import { db } from "@/server/db";

const DEFAULT_PAGE_SIZE = 20;

export const postService = {
  async getPostsByThread(
    threadId: string,
    page: number = 1,
    limit: number = DEFAULT_PAGE_SIZE
  ) {
    const skip = (page - 1) * limit;

    const [posts, totalCount] = await Promise.all([
      db.post.findMany({
        where: {
          threadId,
          isDeleted: false,
          parentId: null, // Top-level posts only
        },
        orderBy: { position: "asc" },
        skip,
        take: limit,
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
          replies: {
            where: { isDeleted: false },
            orderBy: { createdAt: "asc" },
            include: {
              author: {
                select: {
                  id: true,
                  username: true,
                  displayName: true,
                  avatarUrl: true,
                },
              },
            },
          },
        },
      }),
      db.post.count({
        where: {
          threadId,
          isDeleted: false,
          parentId: null,
        },
      }),
    ]);

    return {
      posts,
      pagination: {
        page,
        limit,
        totalCount,
        totalPages: Math.ceil(totalCount / limit),
        hasMore: page * limit < totalCount,
      },
    };
  },

  async createPost(data: {
    content: string;
    threadId: string;
    authorId: string;
    parentId?: string;
  }) {
    const post = await db.$transaction(async (tx) => {
      // Get next position
      const lastPost = await tx.post.findFirst({
        where: { threadId: data.threadId },
        orderBy: { position: "desc" },
      });
      const position = (lastPost?.position ?? 0) + 1;

      // Create post
      const newPost = await tx.post.create({
        data: {
          content: data.content,
          threadId: data.threadId,
          authorId: data.authorId,
          parentId: data.parentId,
          position,
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
        },
      });

      // Update thread's post count and last post time
      await tx.thread.update({
        where: { id: data.threadId },
        data: {
          postCount: { increment: 1 },
          lastPostAt: new Date(),
        },
      });

      // Get thread's category to update its post count
      const thread = await tx.thread.findUnique({
        where: { id: data.threadId },
        select: { categoryId: true },
      });

      if (thread) {
        await tx.category.update({
          where: { id: thread.categoryId },
          data: { postCount: { increment: 1 } },
        });
      }

      // Update user's post count
      await tx.user.update({
        where: { id: data.authorId },
        data: { postCount: { increment: 1 } },
      });

      return newPost;
    });

    return post;
  },

  async getPostById(postId: string) {
    return db.post.findUnique({
      where: { id: postId },
      include: {
        author: {
          select: {
            id: true,
            username: true,
            displayName: true,
            avatarUrl: true,
          },
        },
      },
    });
  },
};
