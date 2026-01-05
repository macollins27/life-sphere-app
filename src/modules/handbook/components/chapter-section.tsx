import type { Chapter } from "@/content/handbook";

interface ChapterSectionProps {
  chapter: Chapter;
}

function ChapterSection({ chapter }: ChapterSectionProps) {
  return (
    <section id={chapter.id} className="scroll-mt-24">
      {/* Chapter Header */}
      <div className="mb-8" data-toc-heading>
        {chapter.number !== undefined && (
          <span className="mb-2 block text-6xl font-light text-stone-200">
            {chapter.number}
          </span>
        )}
        <h2 className="text-2xl font-bold text-stone-900 sm:text-3xl">
          {chapter.title}
        </h2>
      </div>

      {/* Chapter Intro */}
      {chapter.intro && (
        <div className="mb-10 border-l-4 border-[#4A7C59]/30 pl-6">
          <p className="text-lg italic leading-relaxed text-stone-600">
            {chapter.intro.split("\n\n").map((paragraph, idx) => (
              <span key={idx} className="mb-4 block last:mb-0">
                {paragraph}
              </span>
            ))}
          </p>
        </div>
      )}

      {/* Chapter Content (for chapters without sections) */}
      {chapter.content && !chapter.sections && (
        <div className="prose prose-stone prose-lg max-w-none">
          {chapter.content.split("\n\n").map((paragraph, idx) => {
            // Check if this is a numbered list item
            if (paragraph.match(/^\d+\.\s\*\*/)) {
              return (
                <p key={idx} className="mb-4">
                  {renderRichText(paragraph)}
                </p>
              );
            }
            return (
              <p key={idx} className="mb-4 leading-relaxed text-stone-700">
                {renderRichText(paragraph)}
              </p>
            );
          })}
        </div>
      )}

      {/* Sections */}
      {chapter.sections && (
        <div className="space-y-12">
          {chapter.sections.map((section) => (
            <div
              key={section.id}
              id={section.id}
              className="scroll-mt-24"
              data-toc-heading
            >
              <h3 className="mb-4 text-xl font-semibold text-stone-800">
                {section.title}
              </h3>
              <div className="prose prose-stone prose-lg max-w-none">
                {section.content.split("\n\n").map((paragraph, idx) => (
                  <p key={idx} className="mb-4 leading-relaxed text-stone-700">
                    {renderRichText(paragraph)}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Chapter Divider */}
      <div className="mb-16 mt-16 flex items-center justify-center">
        <div className="h-px w-16 bg-stone-200" />
        <div className="mx-4 h-2 w-2 rounded-full bg-[#4A7C59]/30" />
        <div className="h-px w-16 bg-stone-200" />
      </div>
    </section>
  );
}

function renderRichText(text: string): React.ReactNode {
  // Handle bold text marked with **
  const parts = text.split(/(\*\*[^*]+\*\*)/g);

  return parts.map((part, idx) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={idx} className="font-semibold text-stone-900">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return part;
  });
}

export { ChapterSection };
