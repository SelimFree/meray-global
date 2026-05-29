import { type ComponentProps } from "react";
import { cn } from "../../lib/utils";

export function Card({ className, ref, ...props }: ComponentProps<"div">) {
  return (
    <div
      ref={ref}
      className={cn(
        " border border-gray-200 bg-white text-gray-900 shadow-sm",
        className
      )}
      {...props}
    />
  );
}

export function CardHeader({ className, ref, ...props }: ComponentProps<"div">) {
  return (
    <div
      ref={ref}
      className={cn("flex flex-col space-y-1.5 p-6", className)}
      {...props}
    />
  );
}

export function CardTitle({ className, ref, ...props }: ComponentProps<"h3">) {
  return (
    <h3
      ref={ref}
      className={cn("text-xl font-semibold leading-none tracking-tight", className)}
      {...props}
    />
  );
}

export function CardDescription({ className, ref, ...props }: ComponentProps<"p">) {
  return (
    <p
      ref={ref}
      className={cn("text-sm text-gray-500", className)}
      {...props}
    />
  );
}

export function CardContent({ className, ref, ...props }: ComponentProps<"div">) {
  return (
    <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
  );
}