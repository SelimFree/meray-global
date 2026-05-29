import { Loader2 } from "lucide-react";
import { cn } from "../../lib/utils";
import { Text } from "./Text";

export function Loading({ className }: { className?: string }) {
  return (
    <div className={cn("flex min-h-[50vh] w-full items-center justify-center", className)}>
      <div className="flex flex-col items-center gap-4">
        <Loader2 className="h-10 w-10 animate-spin text-primary" />
        <Text variant="muted" className="animate-pulse font-medium text-xl md:text-2xl">
          Loading...
        </Text>
      </div>
    </div>
  );
}