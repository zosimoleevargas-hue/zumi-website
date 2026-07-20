import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  withShadow?: boolean;
}

function Card({ className, withShadow = true, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl bg-white overflow-hidden",
        withShadow && "shadow-sm hover:shadow-md transition-shadow",
        className,
      )}
      {...props}
    />
  );
}

export { Card, type CardProps };
