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
      <div className="flex items-center gap-4 rounded-xl border border-muted-200 bg-background-card p-4 transition-all hover:border-primary-300 hover:shadow-sm">
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
              <Badge variant="primary" className="shrink-0">
                Pinned
              </Badge>
            )}
            {thread.isLocked && (
              <Badge variant="accent" className="shrink-0">
                Locked
              </Badge>
            )}
            <h3 className="truncate font-medium text-foreground">
              {thread.title}
            </h3>
          </div>
          <p className="mt-1 text-sm text-muted-500">
            by{" "}
            <span className="font-medium text-foreground">{authorName}</span>
            {" • "}
            {formatRelativeTime(thread.createdAt)}
          </p>
        </div>

        {/* Stats */}
        <div className="hidden shrink-0 text-right sm:block">
          <p className="text-sm font-medium text-foreground">
            {thread.postCount} {thread.postCount === 1 ? "reply" : "replies"}
          </p>
          <p className="text-xs text-muted-500">
            {thread.viewCount} views
          </p>
        </div>

        {/* Last Activity */}
        <div className="hidden shrink-0 text-right md:block">
          <p className="text-xs text-muted-500">Last activity</p>
          <p className="text-sm text-foreground">
            {formatRelativeTime(thread.lastPostAt)}
          </p>
        </div>
      </div>
    </Link>
  );
}
