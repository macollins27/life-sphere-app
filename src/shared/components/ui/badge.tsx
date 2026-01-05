import { type HTMLAttributes } from "react";
import { cn } from "@/shared/utils/cn";

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "primary" | "secondary" | "accent" | "lavender" | "success" | "warning" | "danger";
}

function Badge({ className, variant = "default", ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium",
        {
          "bg-muted-100 text-muted-700": variant === "default",
          "bg-primary-100 text-primary-700": variant === "primary",
          "bg-secondary-100 text-secondary-700": variant === "secondary",
          "bg-accent-100 text-accent-700": variant === "accent",
          "bg-lavender-100 text-lavender-700": variant === "lavender",
          "bg-green-100 text-green-700": variant === "success",
          "bg-amber-100 text-amber-700": variant === "warning",
          "bg-red-100 text-red-700": variant === "danger",
        },
        className
      )}
      {...props}
    />
  );
}

export { Badge };
