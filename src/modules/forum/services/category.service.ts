import { db } from "@/server/db";

export const categoryService = {
  async getAllCategories() {
    return db.category.findMany({
      where: {
        isVisible: true,
        parentId: null, // Top-level categories only
      },
      orderBy: {
        sortOrder: "asc",
      },
      include: {
        children: {
          where: { isVisible: true },
          orderBy: { sortOrder: "asc" },
        },
      },
    });
  },

  async getCategoryBySlug(slug: string) {
    return db.category.findUnique({
      where: { slug },
      include: {
        children: {
          where: { isVisible: true },
          orderBy: { sortOrder: "asc" },
        },
      },
    });
  },

  async getCategoryWithStats(slug: string) {
    const category = await db.category.findUnique({
      where: { slug },
    });

    if (!category) return null;

    // Get recent activity
    const recentThread = await db.thread.findFirst({
      where: {
        categoryId: category.id,
        status: { not: "DELETED" },
      },
      orderBy: { lastPostAt: "desc" },
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

    return {
      ...category,
      recentThread,
    };
  },
};
