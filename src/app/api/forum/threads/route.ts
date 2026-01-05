import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { threadService } from "@/modules/forum/services/thread.service";
import { categoryService } from "@/modules/forum/services/category.service";

export async function POST(request: Request) {
  try {
    const session = await auth();

    if (!session?.user) {
      return NextResponse.json(
        { error: "You must be logged in to create a thread" },
        { status: 401 }
      );
    }

    const { title, content, categoryId } = await request.json();

    if (!title?.trim()) {
      return NextResponse.json(
        { error: "Title is required" },
        { status: 400 }
      );
    }

    if (!content?.trim()) {
      return NextResponse.json(
        { error: "Content is required" },
        { status: 400 }
      );
    }

    if (!categoryId) {
      return NextResponse.json(
        { error: "Category is required" },
        { status: 400 }
      );
    }

    // Verify category exists and is not locked
    const category = await categoryService.getCategoryBySlug(categoryId);

    // Try to find by ID if slug lookup fails
    const categoryById = category || await (async () => {
      const { db } = await import("@/server/db");
      return db.category.findUnique({ where: { id: categoryId } });
    })();

    if (!categoryById) {
      return NextResponse.json(
        { error: "Category not found" },
        { status: 404 }
      );
    }

    if (categoryById.isLocked) {
      return NextResponse.json(
        { error: "This category is locked" },
        { status: 403 }
      );
    }

    const thread = await threadService.createThread({
      title: title.trim(),
      content: content.trim(),
      categoryId: categoryById.id,
      authorId: session.user.id,
    });

    return NextResponse.json(
      { message: "Thread created successfully", ...thread },
      { status: 201 }
    );
  } catch (error) {
    console.error("Create thread error:", error);
    return NextResponse.json(
      { error: "Failed to create thread" },
      { status: 500 }
    );
  }
}
