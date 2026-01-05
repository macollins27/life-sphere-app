import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { postService } from "@/modules/forum/services/post.service";
import { db } from "@/server/db";

interface RouteParams {
  params: Promise<{ threadId: string }>;
}

export async function POST(request: Request, { params }: RouteParams) {
  try {
    const session = await auth();

    if (!session?.user) {
      return NextResponse.json(
        { error: "You must be logged in to reply" },
        { status: 401 }
      );
    }

    const { threadId } = await params;
    const { content, parentId } = await request.json();

    if (!content?.trim()) {
      return NextResponse.json(
        { error: "Reply content is required" },
        { status: 400 }
      );
    }

    // Verify thread exists and is not locked
    const thread = await db.thread.findUnique({
      where: { id: threadId },
    });

    if (!thread) {
      return NextResponse.json(
        { error: "Thread not found" },
        { status: 404 }
      );
    }

    if (thread.isLocked) {
      return NextResponse.json(
        { error: "This thread is locked" },
        { status: 403 }
      );
    }

    if (thread.status === "DELETED" || thread.status === "CLOSED") {
      return NextResponse.json(
        { error: "This thread is closed" },
        { status: 403 }
      );
    }

    // Verify parent post exists if provided
    if (parentId) {
      const parentPost = await postService.getPostById(parentId);
      if (!parentPost || parentPost.threadId !== threadId) {
        return NextResponse.json(
          { error: "Parent post not found" },
          { status: 404 }
        );
      }
    }

    const post = await postService.createPost({
      content: content.trim(),
      threadId,
      authorId: session.user.id,
      parentId,
    });

    return NextResponse.json(
      { message: "Reply posted successfully", ...post },
      { status: 201 }
    );
  } catch (error) {
    console.error("Create post error:", error);
    return NextResponse.json(
      { error: "Failed to post reply" },
      { status: 500 }
    );
  }
}
