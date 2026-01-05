import Link from "next/link";
import { Avatar, Badge } from "@/shared/components/ui";
import { formatRelativeTime } from "@/shared/utils/format-relative-time";

interface ThreadDetailProps {
  thread: {
    id: string;
    title: string;
    content: string;
    isPinned: boolean;
    isLocked: boolean;
    postCount: number;
    viewCount: number;
    createdAt: Date | string;
    author: {
      id: string;
      username: string;
      displayName: string | null;
      avatarUrl: string | null;
      postCount: number;
      createdAt: Date | string;
    };
    category: {
      name: string;
      slug: string;
    };
  };
}

export function ThreadDetail({ thread }: ThreadDetailProps) {
  const authorName = thread.author.displayName || thread.author.username;

  return (
    <div className="overflow-hidden rounded-xl border border-stone-200 bg-white">
      {/* Header */}
      <div className="border-b border-stone-200 bg-stone-50 px-6 py-4">
        <div className="flex items-center gap-2 text-sm text-stone-500">
          <Link
            href="/community"
            className="hover:text-[#4A7C59] hover:underline"
          >
            Community
          </Link>
          <span>/</span>
          <Link
            href={`/community/${thread.category.slug}`}
            className="hover:text-[#4A7C59] hover:underline"
          >
            {thread.category.name}
          </Link>
        </div>
        <div className="mt-2 flex items-start justify-between gap-4">
          <h1 className="text-2xl font-bold text-stone-900">{thread.title}</h1>
          <div className="flex shrink-0 gap-2">
            {thread.isPinned && <Badge variant="success">Pinned</Badge>}
            {thread.isLocked && <Badge variant="warning">Locked</Badge>}
          </div>
        </div>
      </div>

      {/* Original Post */}
      <div className="flex gap-4 p-6">
        {/* Author Info Sidebar */}
        <div className="hidden w-32 shrink-0 flex-col items-center text-center sm:flex">
          <Link href={`/members/${thread.author.username}`}>
            <Avatar
              src={thread.author.avatarUrl}
              alt={authorName}
              fallback={authorName}
              size="lg"
            />
          </Link>
          <Link
            href={`/members/${thread.author.username}`}
            className="mt-2 font-medium text-stone-900 hover:text-[#4A7C59]"
          >
            {authorName}
          </Link>
          <p className="text-xs text-stone-500">
            {thread.author.postCount} posts
          </p>
          <p className="text-xs text-stone-500">
            Joined {formatRelativeTime(thread.author.createdAt)}
          </p>
        </div>

        {/* Content */}
        <div className="min-w-0 flex-1">
          {/* Mobile author info */}
          <div className="mb-4 flex items-center gap-3 sm:hidden">
            <Avatar
              src={thread.author.avatarUrl}
              alt={authorName}
              fallback={authorName}
              size="sm"
            />
            <div>
              <Link
                href={`/members/${thread.author.username}`}
                className="font-medium text-stone-900 hover:text-[#4A7C59]"
              >
                {authorName}
              </Link>
              <p className="text-xs text-stone-500">
                {formatRelativeTime(thread.createdAt)}
              </p>
            </div>
          </div>

          {/* Post Content */}
          <div className="prose prose-stone max-w-none">
            <p className="whitespace-pre-wrap">{thread.content}</p>
          </div>

          {/* Footer */}
          <div className="mt-6 flex items-center justify-between border-t border-stone-100 pt-4 text-xs text-stone-500">
            <span className="hidden sm:inline">
              Posted {formatRelativeTime(thread.createdAt)}
            </span>
            <div className="flex gap-4">
              <span>{thread.viewCount} views</span>
              <span>{thread.postCount} replies</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
