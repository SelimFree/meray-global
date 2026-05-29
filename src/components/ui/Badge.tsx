import { type ComponentProps } from "react";
import { cn } from "../../lib/utils";

export type BadgeProps = ComponentProps<"div"> & {
  variant?: "default" | "success" | "outline";
};

export function Badge({ className, variant = "default", ...props }: BadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
        {
          "bg-primary/10 text-primary": variant === "default",
          "bg-success-50 text-success-600 border border-success-100": variant === "success",
          "text-gray-900 border border-gray-200": variant === "outline",
        },
        className
      )}
      {...props}
    />
  );
}