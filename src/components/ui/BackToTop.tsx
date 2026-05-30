import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { Button } from "./Button";
import { cn } from "../../lib/utils";

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 600) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div 
      className={cn(
        "fixed bottom-10 right-6 md:right-8 z-40 transition-all duration-300",
        isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0 pointer-events-none"
      )}
    >
      <Button 
        onClick={scrollToTop}
        size="sm"
        className="h-10 w-10 rounded-none bg-primary-900 text-white shadow-sm border border-transparent transition-all duration-300 hover:bg-secondary hover:text-primary-950 p-0 flex items-center justify-center"
        aria-label="Scroll to top"
      >
        <ArrowUp className="h-5 w-5" strokeWidth={2.5} />
      </Button>
    </div>
  );
}