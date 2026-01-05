import { db } from "@/server/db";
import { slugify } from "@/shared/utils/slugify";

const DEFAULT_PAGE_SIZE = 20;

export const threadService = {
  async getThreadsByCategory(
    categorySlug: string,
    page: number = 1,
    limit: number = DEFAULT_PAGE_SIZE
  ) {
    const category = await db.category.findUnique({
      where: { slug: categorySlug },
    });

    if (!category) return null;

    const skip = (page - 1) * limit;

    const [threads, totalCount] = await Promise.all([
      db.thread.findMany({
        where: {
          categoryId: category.id,
          status: { not: "DELETED" },
        },
        orderBy: [
          { isPinned: "desc" },
          { lastPostAt: "desc" },
        ],
        skip,
        take: limit,
        include: {
          author: {
            select: {
              id: true,
              username: true,
              displayName: true,
              avatarUrl: true,
            },
          },
          category: {
            select: {
              id: true,
              name: true,
              slug: true,
            },
          },
        },
      }),
      db.thread.count({
        where: {
          categoryId: category.id,
          status: { not: "DELETED" },
        },
      }),
    ]);

    return {
      threads,
      category,
      pagination: {
        page,
        limit,
        totalCount,
        totalPages: Math.ceil(totalCount / limit),
        hasMore: page * limit < totalCount,
      },
    };
  },

  async getThreadBySlug(categorySlug: string, threadSlug: string) {
    const thread = await db.thread.findFirst({
      where: {
        slug: threadSlug,
        category: { slug: categorySlug },
        status: { not: "DELETED" },
      },
      include: {
        author: {
          select: {
            id: true,
            username: true,
            displayName: true,
            avatarUrl: true,
            postCount: true,
            createdAt: true,
          },
        },
        category: {
          select: {
            id: true,
            name: true,
            slug: true,
          },
        },
        tags: {
          include: {
            tag: true,
          },
        },
      },
    });

    return thread;
  },

  async createThread(data: {
    title: string;
    content: string;
    categoryId: string;
    authorId: string;
  }) {
    const baseSlug = slugify(data.title);

    // Check for existing slug in the category and generate unique one if needed
    const existingWithSlug = await db.thread.findFirst({
      where: {
        categoryId: data.categoryId,
        slug: { startsWith: baseSlug },
      },
      orderBy: { createdAt: "desc" },
    });

    let slug = baseSlug;
    if (existingWithSlug) {
      const suffix = Math.random().toString(36).substring(2, 8);
      slug = `${baseSlug}-${suffix}`;
    }

    const thread = await db.$transaction(async (tx) => {
      // Create thread
      const newThread = await tx.thread.create({
        data: {
          title: data.title,
          slug,
          content: data.content,
          authorId: data.authorId,
          categoryId: data.categoryId,
        },
        include: {
          author: {
            select: {
              id: true,
              username: true,
              displayName: true,
              avatarUrl: true,
            },
          },
          category: {
            select: {
              id: true,
              name: true,
              slug: true,
            },
          },
        },
      });

      // Update denormalized counts
      await tx.category.update({
        where: { id: data.categoryId },
        data: { threadCount: { increment: 1 } },
      });

      await tx.user.update({
        where: { id: data.authorId },
        data: { threadCount: { increment: 1 } },
      });

      return newThread;
    });

    return thread;
  },

  async incrementViewCount(threadId: string) {
    await db.thread.update({
      where: { id: threadId },
      data: { viewCount: { increment: 1 } },
    });
  },

  async getRecentThreads(limit: number = 5) {
    return db.thread.findMany({
      where: {
        status: { not: "DELETED" },
      },
      orderBy: { createdAt: "desc" },
      take: limit,
      include: {
        author: {
          select: {
            id: true,
            username: true,
            displayName: true,
            avatarUrl: true,
          },
        },
        category: {
          select: {
            id: true,
            name: true,
            slug: true,
          },
        },
      },
    });
  },
};
