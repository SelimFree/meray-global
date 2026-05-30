import { useState, useEffect, useCallback, useRef } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, Home, FlaskConical, Package, Leaf } from "lucide-react";
import { cn } from "../../lib/utils";
import { Heading } from "../ui/Heading";
import { Text } from "../ui/Text";

const slides = [
  {
    id: 0,
    overline: "Adding a world of value",
    title: "Welcome",
    description: "Connecting producers and consumers of vital petrochemicals reliably, efficiently, and responsibly across global markets. We manage the physical movement of energy worldwide.",
    buttonText: "Discover More",
    buttonLink: "/about",
    image: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?q=80&w=2000&auto=format&fit=crop",
    navIcon: Home,
    navLabel: "Welcome"
  },
  {
    id: 1,
    overline: "Adding a world of value",
    title: "Chemicals",
    description: "Global sourcing and distribution of aromatics, intermediates, and industrial solvents, ensuring supply chain stability for our partners.",
    buttonText: "Chemicals",
    buttonLink: "/products/chemicals",
    image: "https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?q=80&w=2000&auto=format&fit=crop",
    navIcon: FlaskConical,
    navLabel: "Chemicals"
  },
  {
    id: 2,
    overline: "Adding a world of value",
    title: "Plastics",
    description: "Through our commitment to provide our customers and suppliers with the best services, Meray Global has grown to be a leading and preferred thermoplastics' resin provider.",
    buttonText: "Plastics",
    buttonLink: "/products/plastics",
    image: "https://images.unsplash.com/photo-1518349619113-03114f06ac3a?q=80&w=2000&auto=format&fit=crop",
    navIcon: Package,
    navLabel: "Plastics"
  },
  {
    id: 3,
    overline: "Adding a world of value",
    title: "Raw Materials",
    description: "Delivering essential raw materials and fertilizers to support global agriculture and foundational manufacturing sectors.",
    buttonText: "Raw Materials",
    buttonLink: "/products/materials",
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=2000&auto=format&fit=crop",
    navIcon: Leaf,
    navLabel: "Raw Materials & Fertilizers"
  }
];

export const HeroBlock = () => {
  const [currentSlide, setCurrentSlide] = useState(2);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const sectionRef = useRef<HTMLElement>(null);
  const imgRefs = useRef<(HTMLImageElement | null)[]>([]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const handleScroll = () => {
      const { top, height } = section.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      if (top > viewportHeight || top + height < 0) return;

      const progress = -top / (height + viewportHeight);
      const shift = progress * height * 0.35;

      imgRefs.current.forEach((img, i) => {
        if (!img) return;
        img.style.transform = i === currentSlide
          ? `translateY(${shift}px)`
          : 'translateY(0px)';
      });
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentSlide]);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  }, []);

  const handleManualChange = (action: 'next' | 'prev' | number) => {
    setIsAutoPlaying(false);
    if (action === 'next') nextSlide();
    else if (action === 'prev') prevSlide();
    else setCurrentSlide(action);
  };

  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(nextSlide, 8000);
    return () => clearInterval(timer);
  }, [nextSlide, isAutoPlaying]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-[80vh] min-h-125 md:min-h-150 overflow-hidden bg-primary-950"
    >
      <div
        className="flex w-full h-full transition-transform duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)]"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={slide.id} className="relative w-full h-full shrink-0">

            <img
              ref={(el) => { imgRefs.current[index] = el; }}
              src={slide.image}
              alt={slide.title}
              className="w-full h-[130%] object-cover will-change-transform -translate-y-[15%]"
            />

            <div className="absolute inset-0 z-10 bg-primary-950/85 md:bg-transparent md:bg-linear-to-r md:from-primary-950 md:via-primary-950/80 md:to-transparent" />
            <div className="absolute inset-0 z-10 mix-blend-multiply bg-black/40 md:bg-transparent md:bg-linear-to-r md:from-black/80 md:via-black/20 md:to-transparent" />
            <div className="absolute inset-0 z-10 bg-black/20 md:bg-black/10" />

            <div className="absolute inset-0 z-20 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center pb-24 md:pb-32">
              <div className="max-w-2xl">

                <div className="flex items-center gap-4 mb-6">
                  <div className="h-0.5 w-12 bg-secondary" />
                  <Text className="text-xs font-bold tracking-[0.2em] text-white uppercase">
                    {slide.overline}
                  </Text>
                </div>

                <Heading level={1} className="text-white text-5xl sm:text-7xl lg:text-[5.5rem] font-extrabold tracking-tighter mb-6">
                  {slide.title}
                </Heading>

                <Text className="text-white/90 text-base sm:text-lg mb-10 leading-relaxed font-medium max-w-xl">
                  {slide.description}
                </Text>

                <Link to={slide.buttonLink} tabIndex={-1}>
                  <button className="bg-secondary hover:bg-secondary-600 transition-colors duration-300 text-white px-8 py-3.5 text-xs font-bold tracking-widest uppercase rounded-none border border-transparent">
                    {slide.buttonText}
                  </button>
                </Link>

              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute bottom-0 right-0 z-30 hidden lg:block opacity-20 pointer-events-none w-1/2 h-full">
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full fill-white">
          <polygon points="50,100 75,50 100,100" />
          <polygon points="75,100 100,25 100,100" />
        </svg>
      </div>

      <div className="absolute bottom-0 left-0 w-full z-40 bg-primary-950/75 backdrop-blur-md border-t border-white/10 h-16 md:h-24 flex items-center">

        <div className="flex md:hidden flex-1 items-center justify-center gap-5 h-full pl-4">
          {slides.map((slide, index) => (
            <button
              key={`mobile-${slide.id}`}
              onClick={() => handleManualChange(index)}
              className={cn(
                "h-2.5 w-2.5 transition-all duration-300 rounded-none",
                index === currentSlide ? "bg-secondary scale-110 shadow-[0_0_8px_rgba(255,255,255,0.3)]" : "bg-white/30 hover:bg-white/50"
              )}
              aria-label={`Go to ${slide.navLabel}`}
            />
          ))}
        </div>

        <div className="hidden md:flex flex-1 h-full overflow-x-auto no-scrollbar md:pl-6">
          {slides.map((slide, index) => {
            const Icon = slide.navIcon;
            const isActive = index === currentSlide;

            return (
              <button
                key={`desktop-${slide.id}`}
                onClick={() => handleManualChange(index)}
                className={cn(
                  "relative flex flex-col items-center justify-center h-full min-w-40 px-4 transition-all duration-300 group",
                  isActive ? "bg-white/5" : "hover:bg-white/5"
                )}
              >
                <Icon
                  className={cn(
                    "h-6 w-6 mb-2 transition-colors",
                    isActive ? "text-white" : "text-white/50 group-hover:text-white/80"
                  )}
                  strokeWidth={isActive ? 2 : 1.5}
                />
                <span className={cn(
                  "text-[10px] font-bold tracking-widest uppercase text-center transition-colors",
                  isActive ? "text-white" : "text-white/50 group-hover:text-white/80"
                )}>
                  {slide.navLabel}
                </span>
                {isActive && (
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-secondary" />
                )}
              </button>
            );
          })}
        </div>

        <div className="flex items-center h-full border-l border-white/10 shrink-0 px-2 md:px-4 bg-primary-950/50">
          <button
            onClick={() => handleManualChange('prev')}
            className="p-3 md:p-4 text-white/50 hover:text-white transition-colors"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
          </button>
          <button
            onClick={() => handleManualChange('next')}
            className="p-3 md:p-4 text-white/50 hover:text-white transition-colors"
            aria-label="Next slide"
          >
            <ChevronRight className="h-5 w-5 md:h-6 md:w-6" />
          </button>
        </div>

      </div>
    </section>
  );
};