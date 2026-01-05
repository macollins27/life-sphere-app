import { Metadata } from "next";
import Link from "next/link";
import { LoginForm } from "@/modules/auth/components/login-form";
import { Card, CardHeader, CardTitle, CardDescription } from "@/shared/components/ui";

export const metadata: Metadata = {
  title: "Sign In",
  description: "Sign in to your Life Sphere account",
};

export default function LoginPage() {
  return (
    <div className="flex min-h-[calc(100vh-8rem)] items-center justify-center px-4 py-12">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1 text-center">
          <Link
            href="/"
            className="mx-auto mb-4 flex items-center gap-2 text-xl font-semibold text-[#4A7C59]"
          >
            <svg
              className="h-8 w-8"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="16" cy="16" r="14" stroke="currentColor" strokeWidth="2" />
              <path
                d="M16 8C16 8 12 12 12 16C12 20 16 24 16 24C16 24 20 20 20 16C20 12 16 8 16 8Z"
                fill="currentColor"
                opacity="0.3"
              />
              <circle cx="16" cy="16" r="4" fill="currentColor" />
            </svg>
            <span>Life Sphere</span>
          </Link>
          <CardTitle className="text-2xl">Welcome back</CardTitle>
          <CardDescription>
            Sign in to your account to continue your journey
          </CardDescription>
        </CardHeader>
        <div className="px-6 pb-6">
          <LoginForm />
        </div>
      </Card>
    </div>
  );
}
