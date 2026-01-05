import Link from "next/link";
import { Nav } from "./nav";
import { UserMenu } from "./user-menu";

function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-stone-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 text-xl font-semibold text-[#4A7C59]"
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

        {/* Navigation */}
        <Nav />

        {/* User Menu */}
        <UserMenu />
      </div>
    </header>
  );
}

export { Header };
