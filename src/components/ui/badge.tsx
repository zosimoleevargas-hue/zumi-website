import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "outline";
}

function Badge({ className, variant = "default", ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-0.5 text-xs font-medium",
        variant === "default" && "bg-green-100 text-green-800",
        variant === "outline" && "border border-green-300 text-green-700",
        className,
      )}
      {...props}
    />
  );
}

export { Badge, type BadgeProps };
