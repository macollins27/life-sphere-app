import { forwardRef, type ButtonHTMLAttributes } from "react";
import { cn } from "@/shared/utils/cn";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "danger" | "accent";
  size?: "sm" | "md" | "lg";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", disabled, ...props }, ref) => {
    return (
      <button
        ref={ref}
        disabled={disabled}
        className={cn(
          "inline-flex items-center justify-center rounded-xl font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
          {
            "bg-primary-500 text-white shadow-sm hover:bg-primary-600 hover:shadow-md hover:-translate-y-0.5 focus-visible:ring-primary-500":
              variant === "primary",
            "bg-muted-100 text-foreground hover:bg-muted-200 focus-visible:ring-muted-400":
              variant === "secondary",
            "bg-transparent text-foreground hover:bg-muted-100 focus-visible:ring-muted-400":
              variant === "ghost",
            "bg-red-500 text-white hover:bg-red-600 focus-visible:ring-red-500":
              variant === "danger",
            "bg-accent-500 text-white shadow-sm hover:bg-accent-600 hover:shadow-md hover:-translate-y-0.5 focus-visible:ring-accent-500":
              variant === "accent",
          },
          {
            "h-9 px-4 text-sm": size === "sm",
            "h-11 px-5 text-sm": size === "md",
            "h-13 px-7 text-base": size === "lg",
          },
          className
        )}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button };
