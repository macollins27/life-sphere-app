"use client";

import { useState, useEffect } from "react";
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

interface TableOfContentsProps {
  chapters: TOCChapter[];
}

function TableOfContents({ chapters }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-80px 0px -80% 0px",
        threshold: 0,
      }
    );

    // Observe all chapter and section headings
    const headings = document.querySelectorAll("[data-toc-heading]");
    headings.forEach((heading) => observer.observe(heading));

    return () => {
      headings.forEach((heading) => observer.unobserve(heading));
    };
  }, []);

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
  };

  return (
    <nav className="max-h-[calc(100vh-8rem)] overflow-y-auto">
      <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-500">
        Contents
      </h2>

      <ul className="space-y-1">
        {chapters.map((chapter) => (
          <li key={chapter.id}>
            <button
              type="button"
              onClick={() => handleClick(chapter.id)}
              className={cn(
                "block w-full rounded-xl px-3 py-2 text-left text-sm font-medium transition-colors",
                activeId === chapter.id
                  ? "bg-primary-100 text-primary-700"
                  : "text-foreground-muted hover:bg-muted-100 hover:text-foreground"
              )}
            >
              {chapter.number !== undefined && (
                <span className="mr-2 text-muted-400">
                  {chapter.number}.
                </span>
              )}
              {chapter.title}
            </button>

            {chapter.sections && chapter.sections.length > 0 && (
              <ul className="ml-4 mt-1 space-y-1 border-l border-muted-200 pl-3">
                {chapter.sections.map((section) => (
                  <li key={section.id}>
                    <button
                      type="button"
                      onClick={() => handleClick(section.id)}
                      className={cn(
                        "block w-full rounded-xl px-3 py-1.5 text-left text-sm transition-colors",
                        activeId === section.id
                          ? "text-primary-600"
                          : "text-muted-500 hover:text-foreground"
                      )}
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
  );
}

export { TableOfContents };
