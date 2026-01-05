import { Metadata } from "next";
import { categoryService } from "@/modules/forum/services/category.service";
import { CategoryList } from "@/modules/forum";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Community",
  description: "Join discussions on wellness, personal growth, and living a balanced life.",
};

export default async function CommunityPage() {
  const categories = await categoryService.getAllCategories();

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="mb-12 text-center">
        <h1 className="text-3xl font-bold text-stone-900 sm:text-4xl">
          Welcome to Our Community
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-stone-600">
          Connect with like-minded individuals, share your experiences, and learn
          from others on the journey to holistic wellness. Choose a category below
          to start exploring.
        </p>
      </div>

      {/* Categories */}
      <div className="mb-8">
        <h2 className="mb-4 text-xl font-semibold text-stone-900">
          Discussion Categories
        </h2>
        <CategoryList categories={categories} />
      </div>

      {/* Community Guidelines */}
      <div className="rounded-xl bg-[#4A7C59]/5 p-6">
        <h3 className="font-semibold text-stone-900">Community Guidelines</h3>
        <ul className="mt-3 space-y-2 text-sm text-stone-600">
          <li className="flex items-start gap-2">
            <span className="text-[#4A7C59]">•</span>
            <span>Be respectful and supportive of all community members</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#4A7C59]">•</span>
            <span>Share knowledge and experiences constructively</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#4A7C59]">•</span>
            <span>Keep discussions on-topic and in the appropriate category</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#4A7C59]">•</span>
            <span>No spam, self-promotion, or harmful content</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
