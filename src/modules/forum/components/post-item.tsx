import Link from "next/link";
import { Avatar } from "@/shared/components/ui";
import { formatRelativeTime } from "@/shared/utils/format-relative-time";

interface PostItemProps {
  post: {
    id: string;
    content: string;
    position: number;
    isEdited: boolean;
    createdAt: Date | string;
    editedAt: Date | string | null;
    author: {
      id: string;
      username: string;
      displayName: string | null;
      avatarUrl: string | null;
      postCount?: number;
      createdAt?: Date | string;
    };
  };
  isReply?: boolean;
}

export function PostItem({ post, isReply = false }: PostItemProps) {
  const authorName = post.author.displayName || post.author.username;

  return (
    <div
      className={`flex gap-4 ${
        isReply
          ? "ml-8 border-l-2 border-muted-200 pl-4"
          : "rounded-2xl border border-muted-200 bg-background-card p-6"
      }`}
    >
      {/* Author Info Sidebar (desktop) */}
      {!isReply && (
        <div className="hidden w-32 shrink-0 flex-col items-center text-center sm:flex">
          <Link href={`/members/${post.author.username}`}>
            <Avatar
              src={post.author.avatarUrl}
              alt={authorName}
              fallback={authorName}
              size="lg"
            />
          </Link>
          <Link
            href={`/members/${post.author.username}`}
            className="mt-2 font-medium text-foreground hover:text-primary-600"
          >
            {authorName}
          </Link>
          {post.author.postCount !== undefined && (
            <p className="text-xs text-muted-500">
              {post.author.postCount} posts
            </p>
          )}
          {post.author.createdAt && (
            <p className="text-xs text-muted-500">
              Joined {formatRelativeTime(post.author.createdAt)}
            </p>
          )}
        </div>
      )}

      {/* Content */}
      <div className="min-w-0 flex-1">
        {/* Author info (mobile or reply) */}
        <div className={`mb-3 flex items-center gap-3 ${!isReply ? "sm:hidden" : ""}`}>
          <Avatar
            src={post.author.avatarUrl}
            alt={authorName}
            fallback={authorName}
            size={isReply ? "sm" : "sm"}
          />
          <div>
            <Link
              href={`/members/${post.author.username}`}
              className="font-medium text-foreground hover:text-primary-600"
            >
              {authorName}
            </Link>
            <p className="text-xs text-muted-500">
              {formatRelativeTime(post.createdAt)}
              {post.isEdited && post.editedAt && (
                <span className="ml-2 italic">
                  (edited {formatRelativeTime(post.editedAt)})
                </span>
              )}
            </p>
          </div>
        </div>

        {/* Post Content */}
        <div className="prose max-w-none prose-p:my-2 prose-p:text-foreground-muted">
          <p className="whitespace-pre-wrap">{post.content}</p>
        </div>

        {/* Footer (desktop, not reply) */}
        {!isReply && (
          <div className="mt-4 hidden border-t border-muted-100 pt-3 text-xs text-muted-500 sm:block">
            <span>#{post.position}</span>
            {" • "}
            <span>{formatRelativeTime(post.createdAt)}</span>
            {post.isEdited && post.editedAt && (
              <>
                {" • "}
                <span className="italic">
                  edited {formatRelativeTime(post.editedAt)}
                </span>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
