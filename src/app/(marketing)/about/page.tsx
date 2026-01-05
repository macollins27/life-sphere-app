import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Life Sphere - Our Mission & Story",
  description:
    "Discover the story behind Life Sphere and our mission to help you achieve holistic wellness through physical, mental, and spiritual well-being.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="border-b border-stone-200 bg-gradient-to-b from-[#4A7C59]/5 to-transparent">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 sm:py-24 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-stone-900 sm:text-5xl">
            About Life Sphere
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-xl text-stone-600">
            A journey toward holistic wellness, one mindful step at a time.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Mission Section */}
        <section className="mb-16">
          <h2 className="mb-6 text-2xl font-bold text-stone-900">Our Mission</h2>
          <div className="prose prose-stone prose-lg max-w-none">
            <p className="leading-relaxed text-stone-700">
              Life Sphere was created with a simple yet profound mission: to help
              individuals achieve a balanced, fulfilling life by nurturing their
              physical, mental, and spiritual well-being. We believe that true
              wellness comes from harmony between all aspects of our lives.
            </p>
            <p className="leading-relaxed text-stone-700">
              In a world that often pulls us in countless directions, we provide a
              sanctuary for reflection, growth, and connection. Our platform
              combines time-tested wisdom with modern understanding to create
              practical pathways toward better living.
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section className="mb-16">
          <h2 className="mb-6 text-2xl font-bold text-stone-900">The Story</h2>
          <div className="prose prose-stone prose-lg max-w-none">
            <p className="leading-relaxed text-stone-700">
              Life Sphere began as a personal journey. Like many, I found myself
              caught in the cycle of modern life—always busy, often stressed, and
              disconnected from what truly matters. It was during this time that I
              started exploring different approaches to wellness, drawing from
              ancient practices and contemporary research alike.
            </p>
            <p className="leading-relaxed text-stone-700">
              What I discovered was transformative. Small, intentional changes in
              how I ate, moved, thought, and connected with others led to
              profound shifts in my overall well-being. The Life Sphere Handbook
              emerged from this journey—a compilation of insights, techniques,
              and practices that have helped me and many others live more
              balanced, purposeful lives.
            </p>
            <p className="leading-relaxed text-stone-700">
              Today, Life Sphere has grown into a community of like-minded
              individuals who support each other on this path. We share our
              experiences, learn from one another, and celebrate the small
              victories that lead to lasting change.
            </p>
          </div>
        </section>

        {/* Why Life Sphere Section */}
        <section className="mb-16">
          <h2 className="mb-6 text-2xl font-bold text-stone-900">
            Why Life Sphere?
          </h2>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-xl bg-stone-50 p-6">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-[#4A7C59]/10">
                <svg
                  className="h-5 w-5 text-[#4A7C59]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <h3 className="mb-2 font-semibold text-stone-900">
                Comprehensive Guidance
              </h3>
              <p className="text-sm text-stone-600">
                Our handbook covers all aspects of well-being, providing a
                complete roadmap for your wellness journey.
              </p>
            </div>

            <div className="rounded-xl bg-stone-50 p-6">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-[#4A7C59]/10">
                <svg
                  className="h-5 w-5 text-[#4A7C59]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="mb-2 font-semibold text-stone-900">
                Supportive Community
              </h3>
              <p className="text-sm text-stone-600">
                Connect with others who share your goals. Learn from their
                experiences and share your own insights.
              </p>
            </div>

            <div className="rounded-xl bg-stone-50 p-6">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-[#4A7C59]/10">
                <svg
                  className="h-5 w-5 text-[#4A7C59]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="mb-2 font-semibold text-stone-900">
                Practical Approach
              </h3>
              <p className="text-sm text-stone-600">
                No complex theories—just actionable advice you can implement
                today to start seeing results.
              </p>
            </div>

            <div className="rounded-xl bg-stone-50 p-6">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-[#4A7C59]/10">
                <svg
                  className="h-5 w-5 text-[#4A7C59]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
              <h3 className="mb-2 font-semibold text-stone-900">
                Holistic Focus
              </h3>
              <p className="text-sm text-stone-600">
                We address the whole person—body, mind, and spirit—because true
                wellness encompasses all dimensions.
              </p>
            </div>
          </div>
        </section>

        {/* Author Section */}
        <section className="mb-16 rounded-2xl bg-gradient-to-br from-[#4A7C59]/5 to-[#4A7C59]/10 p-8">
          <div className="flex flex-col items-center text-center sm:flex-row sm:items-start sm:text-left">
            <div className="mb-4 flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-full bg-[#4A7C59]/20 sm:mb-0 sm:mr-6">
              <span className="text-3xl font-bold text-[#4A7C59]">MC</span>
            </div>
            <div>
              <h3 className="mb-1 text-xl font-bold text-stone-900">
                Maxwell Collins
              </h3>
              <p className="mb-3 text-sm text-[#4A7C59]">Founder & Author</p>
              <p className="text-stone-600">
                Passionate about holistic wellness and personal development,
                Maxwell created Life Sphere to share the principles and practices
                that have transformed his life. His goal is to help others
                discover the path to balanced, fulfilling living.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <h2 className="mb-4 text-2xl font-bold text-stone-900">
            Start Your Journey Today
          </h2>
          <p className="mx-auto mb-8 max-w-xl text-stone-600">
            Whether you&apos;re just beginning or looking to deepen your practice,
            we have resources to support you every step of the way.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/handbook"
              className="inline-flex items-center justify-center rounded-lg bg-[#4A7C59] px-6 py-3 text-base font-medium text-white shadow-sm transition-colors hover:bg-[#3d6649]"
            >
              Read the Handbook
            </Link>
            <Link
              href="/community"
              className="inline-flex items-center justify-center rounded-lg border border-stone-300 bg-white px-6 py-3 text-base font-medium text-stone-700 shadow-sm transition-colors hover:bg-stone-50"
            >
              Join the Community
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
