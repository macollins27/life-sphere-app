import { Metadata } from "next";
import { handbook, getTableOfContents } from "@/content/handbook";
import { TableOfContents, ChapterSection, MobileTOC } from "@/modules/handbook";

export const metadata: Metadata = {
  title: "Life Sphere Handbook - A Comprehensive Guide to Well-Being",
  description:
    "A complete guide to holistic wellness covering physical, mental, and spiritual well-being. Learn practical techniques for living a balanced, fulfilling life.",
};

export default function HandbookPage() {
  const tableOfContents = getTableOfContents();

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="border-b border-muted-200 bg-gradient-to-b from-primary-50 to-transparent">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 sm:py-24 lg:px-8">
          <p className="mb-4 text-sm font-medium uppercase tracking-wider text-primary-600">
            The Complete Guide
          </p>
          <h1 className="font-serif text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            {handbook.title}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-xl text-foreground-muted">
            {handbook.subtitle}
          </p>
          <p className="mt-8 text-sm text-muted-500">
            Written by{" "}
            <span className="font-medium text-foreground">{handbook.author}</span>
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="relative lg:grid lg:grid-cols-[280px_1fr] lg:gap-12">
          {/* Table of Contents Sidebar - Desktop */}
          <aside className="hidden lg:block">
            <div className="sticky top-24">
              <TableOfContents chapters={tableOfContents} />
            </div>
          </aside>

          {/* Content */}
          <main className="min-w-0">
            <article className="prose-handbook mx-auto max-w-3xl">
              {handbook.chapters.map((chapter) => (
                <ChapterSection key={chapter.id} chapter={chapter} />
              ))}
            </article>
          </main>
        </div>
      </div>

      {/* Mobile TOC - floating button + drawer */}
      <MobileTOC chapters={tableOfContents} />

      {/* Footer CTA */}
      <div className="border-t border-muted-200 bg-primary-50">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl font-bold text-foreground">
            Ready to Begin Your Journey?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-foreground-muted">
            Join our community to connect with others on the path to holistic
            wellness. Share your experiences, ask questions, and grow together.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="/community"
              className="inline-flex items-center justify-center rounded-xl bg-primary-500 px-6 py-3 text-base font-medium text-white shadow-sm transition-all hover:bg-primary-600 hover:shadow-md"
            >
              Join the Community
            </a>
            <a
              href="/about"
              className="inline-flex items-center justify-center rounded-xl border border-muted-200 bg-background-card px-6 py-3 text-base font-medium text-foreground shadow-sm transition-all hover:bg-muted-50"
            >
              Learn More About Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
