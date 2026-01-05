import Link from "next/link";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-stone-200 bg-stone-50">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-2">
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
            <p className="mt-4 max-w-md text-sm text-stone-600">
              A supportive community focused on holistic wellness, personal growth,
              and meaningful connections. Join us on the journey to a balanced life.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-stone-900">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-sm text-stone-600 transition-colors hover:text-[#4A7C59]"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/community"
                  className="text-sm text-stone-600 transition-colors hover:text-[#4A7C59]"
                >
                  Community
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-stone-600 transition-colors hover:text-[#4A7C59]"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-stone-900">Legal</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link
                  href="/privacy"
                  className="text-sm text-stone-600 transition-colors hover:text-[#4A7C59]"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-sm text-stone-600 transition-colors hover:text-[#4A7C59]"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/guidelines"
                  className="text-sm text-stone-600 transition-colors hover:text-[#4A7C59]"
                >
                  Community Guidelines
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 border-t border-stone-200 pt-8">
          <p className="text-center text-sm text-stone-500">
            &copy; {currentYear} Life Sphere. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export { Footer };
