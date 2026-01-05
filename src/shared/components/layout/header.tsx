import Link from "next/link";
import { Nav } from "./nav";
import { UserMenu } from "./user-menu";

function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-muted-200 bg-background-card/95 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-background-card/80">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2.5 text-xl font-semibold text-primary-500 transition-colors hover:text-primary-600"
        >
          <svg
            className="h-9 w-9"
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
          <span className="font-serif">Life Sphere</span>
        </Link>

        {/* Navigation */}
        <Nav />

        {/* User Menu */}
        <UserMenu />
      </div>
    </header>
  );
}

export { Header };
