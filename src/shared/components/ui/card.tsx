import { type HTMLAttributes, type ReactNode } from "react";
import { cn } from "@/shared/utils/cn";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  header?: ReactNode;
  footer?: ReactNode;
}

function Card({ className, header, footer, children, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-muted-200 bg-background-card shadow-sm transition-shadow hover:shadow-md",
        className
      )}
      {...props}
    >
      {header && (
        <div className="border-b border-muted-200 px-6 py-4">{header}</div>
      )}
      <div className="px-6 py-5">{children}</div>
      {footer && (
        <div className="border-t border-muted-200 px-6 py-4">{footer}</div>
      )}
    </div>
  );
}

function CardHeader({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("flex flex-col space-y-1.5", className)}
      {...props}
    />
  );
}

function CardTitle({
  className,
  ...props
}: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      className={cn("font-serif text-xl font-semibold text-foreground", className)}
      {...props}
    />
  );
}

function CardDescription({
  className,
  ...props
}: HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn("text-sm text-foreground-muted leading-relaxed", className)}
      {...props}
    />
  );
}

export { Card, CardHeader, CardTitle, CardDescription };
