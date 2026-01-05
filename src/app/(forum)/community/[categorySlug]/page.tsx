import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { auth } from "@/lib/auth";
import { threadService } from "@/modules/forum/services/thread.service";
import { ThreadList } from "@/modules/forum";
import { Button } from "@/shared/components/ui";

interface CategoryPageProps {
  params: Promise<{ categorySlug: string }>;
  searchParams: Promise<{ page?: string }>;
}

export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  const { categorySlug } = await params;
  const result = await threadService.getThreadsByCategory(categorySlug, 1, 1);

  if (!result) {
    return { title: "Category Not Found" };
  }

  return {
    title: result.category.name,
    description: result.category.description || `Discussions in ${result.category.name}`,
  };
}

export default async function CategoryPage({
  params,
  searchParams,
}: CategoryPageProps) {
  const { categorySlug } = await params;
  const { page: pageParam } = await searchParams;
  const page = parseInt(pageParam || "1", 10);
  const session = await auth();

  const result = await threadService.getThreadsByCategory(categorySlug, page);

  if (!result) {
    notFound();
  }

  const { threads, category, pagination } = result;

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Breadcrumb */}
      <nav className="mb-4 text-sm text-stone-500">
        <Link href="/community" className="hover:text-[#4A7C59] hover:underline">
          Community
        </Link>
        <span className="mx-2">/</span>
        <span className="text-stone-900">{category.name}</span>
      </nav>

      {/* Header */}
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-stone-900 sm:text-3xl">
            {category.name}
          </h1>
          {category.description && (
            <p className="mt-2 text-stone-600">{category.description}</p>
          )}
          <p className="mt-2 text-sm text-stone-500">
            {category.threadCount} threads • {category.postCount} posts
          </p>
        </div>

        {session?.user && (
          <Link href={`/community/${categorySlug}/new`}>
            <Button>New Thread</Button>
          </Link>
        )}

        {!session?.user && (
          <Link href="/login">
            <Button variant="secondary">Sign in to post</Button>
          </Link>
        )}
      </div>

      {/* Thread List */}
      <ThreadList threads={threads} pagination={pagination} />

      {/* Pagination Links */}
      {pagination.totalPages > 1 && (
        <div className="mt-6 flex justify-center gap-2">
          {pagination.page > 1 && (
            <Link
              href={`/community/${categorySlug}?page=${pagination.page - 1}`}
            >
              <Button variant="secondary" size="sm">
                Previous
              </Button>
            </Link>
          )}
          <span className="flex items-center px-4 text-sm text-stone-600">
            Page {pagination.page} of {pagination.totalPages}
          </span>
          {pagination.hasMore && (
            <Link
              href={`/community/${categorySlug}?page=${pagination.page + 1}`}
            >
              <Button variant="secondary" size="sm">
                Next
              </Button>
            </Link>
          )}
        </div>
      )}
    </div>
  );
}
