import Link from "next/link";
import { Avatar, Badge } from "@/shared/components/ui";
import { formatRelativeTime } from "@/shared/utils/format-relative-time";

interface ThreadCardProps {
  thread: {
    id: string;
    title: string;
    slug: string;
    isPinned: boolean;
    isLocked: boolean;
    postCount: number;
    viewCount: number;
    createdAt: Date | string;
    lastPostAt: Date | string;
    author: {
      id: string;
      username: string;
      displayName: string | null;
      avatarUrl: string | null;
    };
    category: {
      slug: string;
    };
  };
}

export function ThreadCard({ thread }: ThreadCardProps) {
  const authorName = thread.author.displayName || thread.author.username;

  return (
    <Link href={`/community/${thread.category.slug}/${thread.slug}`}>
      <div className="flex items-center gap-4 rounded-lg border border-stone-200 bg-white p-4 transition-all hover:border-[#4A7C59]/30 hover:shadow-sm">
        {/* Author Avatar */}
        <Avatar
          src={thread.author.avatarUrl}
          alt={authorName}
          fallback={authorName}
          size="md"
        />

        {/* Thread Info */}
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2">
            {thread.isPinned && (
              <Badge variant="success" className="shrink-0">
                Pinned
              </Badge>
            )}
            {thread.isLocked && (
              <Badge variant="warning" className="shrink-0">
                Locked
              </Badge>
            )}
            <h3 className="truncate font-medium text-stone-900">
              {thread.title}
            </h3>
          </div>
          <p className="mt-1 text-sm text-stone-500">
            by{" "}
            <span className="font-medium text-stone-700">{authorName}</span>
            {" • "}
            {formatRelativeTime(thread.createdAt)}
          </p>
        </div>

        {/* Stats */}
        <div className="hidden shrink-0 text-right sm:block">
          <p className="text-sm font-medium text-stone-900">
            {thread.postCount} {thread.postCount === 1 ? "reply" : "replies"}
          </p>
          <p className="text-xs text-stone-500">
            {thread.viewCount} views
          </p>
        </div>

        {/* Last Activity */}
        <div className="hidden shrink-0 text-right md:block">
          <p className="text-xs text-stone-500">Last activity</p>
          <p className="text-sm text-stone-700">
            {formatRelativeTime(thread.lastPostAt)}
          </p>
        </div>
      </div>
    </Link>
  );
}
