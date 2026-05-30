import { cn } from "../../lib/utils";
import { Text } from "./Text";

export function Loading({ className }: { className?: string }) {
  return (
    <div className={cn("flex min-h-[60vh] w-full flex-col items-center justify-center bg-gray-50", className)}>
      <div className="flex flex-col items-center gap-6">
        
        <div className="flex gap-1.5">
          <div className="h-3 w-3 animate-pulse bg-primary-900" style={{ animationDelay: '0ms' }}></div>
          <div className="h-3 w-3 animate-pulse bg-primary-900" style={{ animationDelay: '150ms' }}></div>
          <div className="h-3 w-3 animate-pulse bg-secondary-500" style={{ animationDelay: '300ms' }}></div>
        </div>
        
        <Text className="text-xs font-bold tracking-[0.3em] text-gray-500 uppercase">
          Processing
        </Text>
        
      </div>
    </div>
  );
}