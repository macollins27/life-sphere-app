import { PostItem } from "./post-item";
import { Button } from "@/shared/components/ui";

interface Reply {
  id: string;
  content: string;
  createdAt: Date | string;
  author: {
    id: string;
    username: string;
    displayName: string | null;
    avatarUrl: string | null;
  };
}

interface Post {
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
  replies?: Reply[];
}

interface Pagination {
  page: number;
  totalPages: number;
  hasMore: boolean;
}

interface PostListProps {
  posts: Post[];
  pagination?: Pagination;
  onPageChange?: (page: number) => void;
}

export function PostList({ posts, pagination, onPageChange }: PostListProps) {
  if (posts.length === 0) {
    return (
      <div className="rounded-xl border border-stone-200 bg-white p-8 text-center">
        <p className="text-stone-600">No replies yet. Be the first to reply!</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <h2 className="font-semibold text-stone-900">
        Replies ({posts.length})
      </h2>

      {posts.map((post) => (
        <div key={post.id} className="space-y-3">
          <PostItem post={post} />
          {post.replies?.map((reply) => (
            <PostItem
              key={reply.id}
              post={{
                ...reply,
                position: 0,
                isEdited: false,
                editedAt: null,
              }}
              isReply
            />
          ))}
        </div>
      ))}

      {pagination && pagination.totalPages > 1 && (
        <div className="flex items-center justify-center gap-2 pt-4">
          <Button
            variant="secondary"
            size="sm"
            disabled={pagination.page <= 1}
            onClick={() => onPageChange?.(pagination.page - 1)}
          >
            Previous
          </Button>
          <span className="px-4 text-sm text-stone-600">
            Page {pagination.page} of {pagination.totalPages}
          </span>
          <Button
            variant="secondary"
            size="sm"
            disabled={!pagination.hasMore}
            onClick={() => onPageChange?.(pagination.page + 1)}
          >
            Next
          </Button>
        </div>
      )}
    </div>
  );
}
