import { forwardRef, type TextareaHTMLAttributes } from "react";
import { cn } from "@/shared/utils/cn";

export interface TextareaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, error, disabled, id, ...props }, ref) => {
    const textareaId = id || label?.toLowerCase().replace(/\s+/g, "-");

    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={textareaId}
            className="mb-2 block text-sm font-medium text-foreground"
          >
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          id={textareaId}
          disabled={disabled}
          className={cn(
            "flex min-h-[120px] w-full rounded-xl border bg-background-card px-4 py-3 text-sm text-foreground leading-relaxed transition-all duration-200 placeholder:text-muted-400 focus:outline-none focus:ring-2 focus:ring-offset-1 disabled:cursor-not-allowed disabled:bg-muted-100 disabled:opacity-50",
            error
              ? "border-red-400 focus:border-red-500 focus:ring-red-500/20"
              : "border-muted-300 focus:border-primary-400 focus:ring-primary-400/20",
            className
          )}
          {...props}
        />
        {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
      </div>
    );
  }
);

Textarea.displayName = "Textarea";

export { Textarea };
