import Link from "next/link";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-muted-200 bg-muted-50">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link
              href="/"
              className="flex items-center gap-2.5 text-xl font-semibold text-primary-500"
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
            <p className="mt-5 max-w-md text-sm leading-relaxed text-foreground-muted">
              A supportive community focused on holistic wellness, personal growth,
              and meaningful connections. Join us on the journey to a balanced life.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif font-semibold text-foreground">Quick Links</h3>
            <ul className="mt-5 space-y-3">
              <li>
                <Link
                  href="/about"
                  className="text-sm text-foreground-muted transition-colors hover:text-primary-500"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/handbook"
                  className="text-sm text-foreground-muted transition-colors hover:text-primary-500"
                >
                  Handbook
                </Link>
              </li>
              <li>
                <Link
                  href="/community"
                  className="text-sm text-foreground-muted transition-colors hover:text-primary-500"
                >
                  Community
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-serif font-semibold text-foreground">Legal</h3>
            <ul className="mt-5 space-y-3">
              <li>
                <Link
                  href="/privacy"
                  className="text-sm text-foreground-muted transition-colors hover:text-primary-500"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-sm text-foreground-muted transition-colors hover:text-primary-500"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/guidelines"
                  className="text-sm text-foreground-muted transition-colors hover:text-primary-500"
                >
                  Community Guidelines
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 border-t border-muted-200 pt-8">
          <p className="text-center text-sm text-muted-500">
            &copy; {currentYear} Life Sphere. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export { Footer };
