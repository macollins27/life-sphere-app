"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/shared/utils/cn";

export interface AvatarProps {
  src?: string | null;
  alt?: string;
  fallback?: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}

function getInitials(name: string): string {
  return name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

function Avatar({
  src,
  alt = "Avatar",
  fallback,
  size = "md",
  className,
}: AvatarProps) {
  const [hasError, setHasError] = useState(false);

  const sizeClasses = {
    sm: "h-8 w-8 text-xs",
    md: "h-10 w-10 text-sm",
    lg: "h-14 w-14 text-base",
  };

  const imageSizes = {
    sm: 32,
    md: 40,
    lg: 56,
  };

  const showImage = src && !hasError;
  const initials = fallback ? getInitials(fallback) : alt ? getInitials(alt) : "?";

  return (
    <div
      className={cn(
        "relative flex shrink-0 items-center justify-center overflow-hidden rounded-full bg-[#4A7C59] font-medium text-white",
        sizeClasses[size],
        className
      )}
    >
      {showImage ? (
        <Image
          src={src}
          alt={alt}
          width={imageSizes[size]}
          height={imageSizes[size]}
          className="h-full w-full object-cover"
          onError={() => setHasError(true)}
        />
      ) : (
        <span>{initials}</span>
      )}
    </div>
  );
}

export { Avatar };
