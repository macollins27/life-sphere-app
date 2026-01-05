import { ThreadCard } from "./thread-card";
import { Button } from "@/shared/components/ui";

interface Thread {
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
}

interface Pagination {
  page: number;
  totalPages: number;
  hasMore: boolean;
}

interface ThreadListProps {
  threads: Thread[];
  pagination?: Pagination;
  onPageChange?: (page: number) => void;
}

export function ThreadList({ threads, pagination, onPageChange }: ThreadListProps) {
  if (threads.length === 0) {
    return (
      <div className="rounded-xl border border-stone-200 bg-white p-8 text-center">
        <p className="text-stone-600">No threads yet. Be the first to start a discussion!</p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {threads.map((thread) => (
        <ThreadCard key={thread.id} thread={thread} />
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
