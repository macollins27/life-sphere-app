import { Metadata } from "next";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import { categoryService } from "@/modules/forum/services/category.service";
import { CreateThreadForm } from "@/modules/forum";
import { Card, CardHeader, CardTitle, CardDescription } from "@/shared/components/ui";

interface NewThreadPageProps {
  params: Promise<{ categorySlug: string }>;
}

export async function generateMetadata({
  params,
}: NewThreadPageProps): Promise<Metadata> {
  const { categorySlug } = await params;
  const category = await categoryService.getCategoryBySlug(categorySlug);

  if (!category) {
    return { title: "Category Not Found" };
  }

  return {
    title: `New Thread in ${category.name}`,
    description: `Create a new discussion thread in ${category.name}`,
  };
}

export default async function NewThreadPage({ params }: NewThreadPageProps) {
  const { categorySlug } = await params;
  const session = await auth();

  // Redirect to login if not authenticated
  if (!session?.user) {
    redirect(`/login?callbackUrl=/community/${categorySlug}/new`);
  }

  const category = await categoryService.getCategoryBySlug(categorySlug);

  if (!category) {
    notFound();
  }

  // Check if category is locked
  if (category.isLocked) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-8 sm:px-6 lg:px-8">
        <Card className="p-8 text-center">
          <h1 className="text-xl font-semibold text-stone-900">
            Category Locked
          </h1>
          <p className="mt-2 text-stone-600">
            This category is currently locked and not accepting new threads.
          </p>
          <Link
            href={`/community/${categorySlug}`}
            className="mt-4 inline-block font-medium text-[#4A7C59] hover:underline"
          >
            Return to {category.name}
          </Link>
        </Card>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-2xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Breadcrumb */}
      <nav className="mb-4 text-sm text-stone-500">
        <Link href="/community" className="hover:text-[#4A7C59] hover:underline">
          Community
        </Link>
        <span className="mx-2">/</span>
        <Link
          href={`/community/${categorySlug}`}
          className="hover:text-[#4A7C59] hover:underline"
        >
          {category.name}
        </Link>
        <span className="mx-2">/</span>
        <span className="text-stone-900">New Thread</span>
      </nav>

      <Card>
        <CardHeader>
          <CardTitle>Create New Thread</CardTitle>
          <CardDescription>
            Start a new discussion in {category.name}
          </CardDescription>
        </CardHeader>
        <div className="px-6 pb-6">
          <CreateThreadForm
            categoryId={category.id}
            categorySlug={categorySlug}
          />
        </div>
      </Card>
    </div>
  );
}
