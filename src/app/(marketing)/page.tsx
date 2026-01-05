import Link from "next/link";
import {
  Button,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  DecorativeBlob,
  DecorativeGradientOrb,
} from "@/shared/components/ui";

const features = [
  {
    title: "Mind & Mental Health",
    description:
      "Explore topics on mindfulness, stress management, and emotional well-being with a supportive community.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
        />
      </svg>
    ),
    color: "primary",
  },
  {
    title: "Body & Nutrition",
    description:
      "Share experiences and learn about fitness, nutrition, and physical wellness from fellow members.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
    ),
    color: "accent",
  },
  {
    title: "Relationships & Connection",
    description:
      "Build meaningful connections and discuss healthy relationships in a safe, moderated space.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
    color: "secondary",
  },
  {
    title: "Purpose & Growth",
    description:
      "Discover your path, set meaningful goals, and grow alongside others on similar journeys.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
        />
      </svg>
    ),
    color: "lavender",
  },
];

export default function HomePage() {
  const colorClasses = {
    primary: { bg: "bg-primary-100", text: "text-primary-600" },
    accent: { bg: "bg-accent-100", text: "text-accent-600" },
    secondary: { bg: "bg-secondary-100", text: "text-secondary-600" },
    lavender: { bg: "bg-lavender-100", text: "text-lavender-600" },
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted-50 py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-serif text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Nurture Every Aspect of{" "}
              <span className="text-primary-500">Your Life</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-foreground-muted sm:text-xl">
              Life Sphere is a supportive community where you can explore holistic
              wellness, share your journey, and connect with others who are
              committed to living a balanced, fulfilling life.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/register">
                <Button size="lg">Get Started Free</Button>
              </Link>
              <Link href="/community">
                <Button variant="secondary" size="lg">
                  Explore Community
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Decorative background elements */}
        <DecorativeBlob
          variant="primary"
          size="xl"
          className="-top-24 right-0"
        />
        <DecorativeGradientOrb
          variant="accent"
          size="xl"
          className="-bottom-24 left-0"
        />
      </section>

      {/* Mission Statement */}
      <section className="bg-background-card py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Our Mission
            </h2>
            <p className="mt-6 text-lg leading-8 text-foreground-muted">
              We believe that true wellness encompasses every dimension of life—mind,
              body, relationships, and purpose. Life Sphere provides a safe,
              encouraging space where individuals can learn, share, and grow together.
              Whether you&apos;re taking your first steps toward better health or
              you&apos;re a seasoned wellness advocate, you belong here.
            </p>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="bg-muted-50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              What We Offer
            </h2>
            <p className="mt-4 text-lg text-foreground-muted">
              Explore the key areas of wellness that our community supports
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => {
              const colors = colorClasses[feature.color as keyof typeof colorClasses];
              return (
                <Card key={feature.title} className="transition-shadow hover:shadow-md">
                  <CardHeader>
                    <div className={`mb-3 flex h-12 w-12 items-center justify-center rounded-xl ${colors.bg} ${colors.text}`}>
                      {feature.icon}
                    </div>
                    <CardTitle>{feature.title}</CardTitle>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Join Our Community CTA */}
      <section className="bg-primary-500 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-serif text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Join Our Community
            </h2>
            <p className="mt-4 text-lg text-white/90">
              Connect with thousands of members who are committed to personal growth
              and holistic wellness. Start your journey today.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/register">
                <Button
                  size="lg"
                  className="bg-white text-primary-600 hover:bg-muted-50"
                >
                  Create Free Account
                </Button>
              </Link>
              <Link href="/about">
                <Button
                  variant="ghost"
                  size="lg"
                  className="text-white hover:bg-white/10"
                >
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
