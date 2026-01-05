import { cn } from "@/shared/utils/cn";

type BlobVariant = "primary" | "secondary" | "accent" | "lavender";
type BlobSize = "sm" | "md" | "lg" | "xl";

interface DecorativeBlobProps {
  variant?: BlobVariant;
  size?: BlobSize;
  className?: string;
  blur?: boolean;
}

const variantClasses: Record<BlobVariant, string> = {
  primary: "text-primary-400",
  secondary: "text-secondary-400",
  accent: "text-accent-400",
  lavender: "text-lavender-400",
};

const sizeClasses: Record<BlobSize, string> = {
  sm: "h-32 w-32",
  md: "h-48 w-48",
  lg: "h-64 w-64",
  xl: "h-96 w-96",
};

function DecorativeBlob({
  variant = "primary",
  size = "lg",
  className,
  blur = true,
}: DecorativeBlobProps) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute -z-10 opacity-20",
        blur && "blur-3xl",
        sizeClasses[size],
        variantClasses[variant],
        className
      )}
      aria-hidden="true"
    >
      <svg viewBox="0 0 200 200" fill="currentColor" className="h-full w-full">
        <path
          d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.5,90,-16.3,89.1,-0.5C88.2,15.3,83.8,30.5,75.6,43.5C67.4,56.5,55.4,67.2,41.6,74.1C27.8,81,12.2,84,-3.5,88.8C-19.2,93.6,-34.8,100.2,-49.2,97.2C-63.6,94.2,-76.8,81.6,-83.4,66.4C-90,51.2,-90,33.4,-88.5,17.1C-87,-0.8,-84,-17.2,-77.5,-31.6C-71,-46,-61,-58.5,-48.2,-66.5C-35.4,-74.5,-19.8,-78,-3.5,-72.8C12.8,-67.6,30.6,-83.6,44.7,-76.4Z"
          transform="translate(100 100)"
        />
      </svg>
    </div>
  );
}

function DecorativeCircle({
  variant = "primary",
  size = "lg",
  className,
  blur = false,
}: DecorativeBlobProps) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute -z-10 opacity-15",
        blur && "blur-2xl",
        sizeClasses[size],
        variantClasses[variant],
        className
      )}
      aria-hidden="true"
    >
      <svg viewBox="0 0 200 200" fill="currentColor" className="h-full w-full">
        <circle cx="100" cy="100" r="80" />
      </svg>
    </div>
  );
}

function DecorativeGradientOrb({
  variant = "primary",
  size = "lg",
  className,
}: Omit<DecorativeBlobProps, "blur">) {
  const gradientClasses: Record<BlobVariant, string> = {
    primary: "from-primary-300 to-primary-500",
    secondary: "from-secondary-300 to-secondary-500",
    accent: "from-accent-300 to-accent-500",
    lavender: "from-lavender-300 to-lavender-500",
  };

  return (
    <div
      className={cn(
        "pointer-events-none absolute -z-10 rounded-full bg-gradient-to-br opacity-20 blur-3xl",
        sizeClasses[size],
        gradientClasses[variant],
        className
      )}
      aria-hidden="true"
    />
  );
}

export { DecorativeBlob, DecorativeCircle, DecorativeGradientOrb };
export type { BlobVariant, BlobSize, DecorativeBlobProps };
