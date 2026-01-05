import { Metadata } from "next";
import { notFound } from "next/navigation";
import { auth } from "@/lib/auth";
import { threadService } from "@/modules/forum/services/thread.service";
import { postService } from "@/modules/forum/services/post.service";
import { ThreadDetail, PostList, ReplyForm } from "@/modules/forum";
import { Card } from "@/shared/components/ui";
import Link from "next/link";

interface ThreadPageProps {
  params: Promise<{ categorySlug: string; threadSlug: string }>;
}

export async function generateMetadata({
  params,
}: ThreadPageProps): Promise<Metadata> {
  const { categorySlug, threadSlug } = await params;
  const thread = await threadService.getThreadBySlug(categorySlug, threadSlug);

  if (!thread) {
    return { title: "Thread Not Found" };
  }

  return {
    title: thread.title,
    description: thread.content.substring(0, 160),
  };
}

export default async function ThreadPage({ params }: ThreadPageProps) {
  const { categorySlug, threadSlug } = await params;
  const session = await auth();

  const thread = await threadService.getThreadBySlug(categorySlug, threadSlug);

  if (!thread) {
    notFound();
  }

  // Increment view count
  await threadService.incrementViewCount(thread.id);

  // Get posts
  const { posts } = await postService.getPostsByThread(thread.id);

  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Thread Detail */}
      <ThreadDetail thread={thread} />

      {/* Replies */}
      <div className="mt-8">
        <PostList posts={posts} />
      </div>

      {/* Reply Form */}
      <div className="mt-8">
        {session?.user ? (
          <Card className="p-6">
            <h3 className="mb-4 font-semibold text-stone-900">Write a Reply</h3>
            {thread.isLocked ? (
              <p className="text-stone-600">
                This thread is locked and no longer accepting replies.
              </p>
            ) : (
              <ReplyForm threadId={thread.id} />
            )}
          </Card>
        ) : (
          <Card className="p-6 text-center">
            <p className="text-stone-600">
              <Link
                href="/login"
                className="font-medium text-[#4A7C59] hover:underline"
              >
                Sign in
              </Link>{" "}
              to reply to this thread.
            </p>
          </Card>
        )}
      </div>
    </div>
  );
}
