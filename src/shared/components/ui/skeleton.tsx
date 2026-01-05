import { type HTMLAttributes } from "react";
import { cn } from "@/shared/utils/cn";

function Skeleton({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-stone-200", className)}
      {...props}
    />
  );
}

export { Skeleton };
