import Link from "next/link";
import { Card } from "@/shared/components/ui";

interface CategoryCardProps {
  category: {
    id: string;
    name: string;
    slug: string;
    description: string | null;
    icon: string | null;
    color: string | null;
    threadCount: number;
    postCount: number;
  };
}

export function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Link href={`/community/${category.slug}`}>
      <Card className="h-full transition-all hover:border-[#4A7C59]/30 hover:shadow-md">
        <div className="flex items-start gap-4 p-6">
          {/* Icon */}
          <div
            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg text-2xl"
            style={{
              backgroundColor: category.color
                ? `${category.color}20`
                : "#4A7C5920",
              color: category.color || "#4A7C59",
            }}
          >
            {category.icon || "💬"}
          </div>

          {/* Content */}
          <div className="min-w-0 flex-1">
            <h3 className="font-semibold text-stone-900">{category.name}</h3>
            {category.description && (
              <p className="mt-1 line-clamp-2 text-sm text-stone-600">
                {category.description}
              </p>
            )}
            <div className="mt-3 flex items-center gap-4 text-xs text-stone-500">
              <span>{category.threadCount} threads</span>
              <span>{category.postCount} posts</span>
            </div>
          </div>
        </div>
      </Card>
    </Link>
  );
}
