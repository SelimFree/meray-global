import { AlertCircle, X } from "lucide-react";
import { cn } from "../../lib/utils";
import { Text } from "./Text";

interface CalloutProps {
  title: string;
  message: string;
  onClose?: () => void;
  className?: string;
}

export function Callout({ title, message, onClose, className }: CalloutProps) {
  return (
    <div className={cn(
      "relative w-full  border border-danger-200 bg-danger-50 p-4 animate-in fade-in slide-in-from-top-2 duration-300",
      className
    )}>
      <div className="flex gap-3">
        <AlertCircle className="h-5 w-5 text-danger-600 shrink-0 mt-0.5" />
        <div className="space-y-1">
          <Text className="font-bold text-danger-900 leading-none">{title}</Text>
          <Text className="text-sm text-danger-700 leading-relaxed">{message}</Text>
        </div>
      </div>

      {onClose && (
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-danger-400 hover:text-danger-600 transition-colors"
        >
          <X className="h-4 w-4" />
        </button>
      )}
    </div>
  );
}