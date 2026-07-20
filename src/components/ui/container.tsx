import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  as?: "div" | "section" | "article" | "nav" | "header" | "footer";
}

function Container({
  className,
  as: Tag = "div",
  ...props
}: ContainerProps) {
  return (
    <Tag
      className={cn("mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8", className)}
      {...props}
    />
  );
}

export { Container, type ContainerProps };
