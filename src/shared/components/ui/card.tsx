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
        "rounded-xl border border-stone-200 bg-white shadow-sm",
        className
      )}
      {...props}
    >
      {header && (
        <div className="border-b border-stone-200 px-6 py-4">{header}</div>
      )}
      <div className="px-6 py-4">{children}</div>
      {footer && (
        <div className="border-t border-stone-200 px-6 py-4">{footer}</div>
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
      className={cn("text-lg font-semibold text-stone-900", className)}
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
      className={cn("text-sm text-stone-600", className)}
      {...props}
    />
  );
}

export { Card, CardHeader, CardTitle, CardDescription };
