"use client";

import { useState } from "react";
import { cn } from "@/shared/utils/cn";

interface TOCSection {
  id: string;
  title: string;
}

interface TOCChapter {
  id: string;
  number?: number;
  title: string;
  sections?: TOCSection[];
}

interface MobileTOCProps {
  chapters: TOCChapter[];
}

function MobileTOC({ chapters }: MobileTOCProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setIsOpen(false);
  };

  return (
    <div className="lg:hidden">
      {/* Floating Toggle Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#4A7C59] text-white shadow-lg transition-transform hover:scale-105"
        aria-label="Toggle table of contents"
      >
        <svg
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h7"
          />
        </svg>
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Drawer */}
      <nav
        className={cn(
          "fixed inset-y-0 left-0 z-50 w-80 overflow-y-auto bg-white p-6 shadow-xl transition-transform duration-300",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-stone-900">Contents</h2>
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="rounded-lg p-2 text-stone-500 hover:bg-stone-100"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <ul className="space-y-1">
          {chapters.map((chapter) => (
            <li key={chapter.id}>
              <button
                type="button"
                onClick={() => handleClick(chapter.id)}
                className="block w-full rounded-lg px-3 py-2 text-left text-sm font-medium text-stone-600 transition-colors hover:bg-stone-100 hover:text-stone-900"
              >
                {chapter.number !== undefined && (
                  <span className="mr-2 text-stone-400">{chapter.number}.</span>
                )}
                {chapter.title}
              </button>

              {chapter.sections && chapter.sections.length > 0 && (
                <ul className="ml-4 mt-1 space-y-1 border-l border-stone-200 pl-3">
                  {chapter.sections.map((section) => (
                    <li key={section.id}>
                      <button
                        type="button"
                        onClick={() => handleClick(section.id)}
                        className="block w-full rounded-lg px-3 py-1.5 text-left text-sm text-stone-500 transition-colors hover:text-stone-700"
                      >
                        {section.title}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export { MobileTOC };
