import { useState, useEffect, useCallback, useRef } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, FlaskConical, Leaf, Droplet } from "lucide-react";
import { cn } from "../../lib/utils";
import { Heading } from "../ui/Heading";
import { Text } from "../ui/Text";
import { Image } from "../ui/Image";
import SliderImg1 from "../../assets/slider/slider_img_1.png";
import SliderImg2 from "../../assets/slider/slider_img_2.png";
import SliderImg3 from "../../assets/slider/slider_img_3.png";

const slides = [
  {
    id: 1,
    title: "Petroleum products",
    description: "Sourcing and distributing premium refined petroleum products, ensuring reliable and continuous energy supply chains for global industrial and commercial sectors.",
    buttonText: "Petroleum products",
    buttonLink: "/products#petroleum-products",
    image: SliderImg1,
    navIcon: Droplet,
    navLabel: "Petroleum products"
  },
  {
    id: 2,
    title: "Chemicals",
    description: "Sourcing high-purity industrial chemicals, aromatics, and solvents to support manufacturing and refining sectors globally through an optimized bulk liquid logistics network.",
    buttonText: "Chemicals",
    buttonLink: "/products#chemicals",
    image: SliderImg2,
    navIcon: FlaskConical,
    navLabel: "Chemicals"
  },
  {
    id: 3,
    title: "Fertilizers",
    description: "Delivering essential agricultural nutrients and bulk fertilizers to support large-scale farming infrastructure, managed via highly optimized dry bulk freight operations.",
    buttonText: "Fertilizers",
    buttonLink: "/products#fertilizers",
    image: SliderImg3,
    navIcon: Leaf,
    navLabel: "Fertilizers"
  }
];

export const HeroBlock = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  const sectionRef = useRef<HTMLElement>(null);
  const imgRefs = useRef<(HTMLImageElement | null)[]>([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsMounted(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

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
        {slides.map((slide, index) => {
          const isActiveSlide = index === currentSlide;
          const isAnimatedIn = isActiveSlide && isMounted;

          return (
            <div key={slide.id} className="relative w-full h-full shrink-0">

              <Image
                ref={(el) => { imgRefs.current[index] = el; }}
                src={slide.image}
                alt={slide.title}
                containerClassName="absolute inset-0 z-0 bg-primary-950"
                className="w-full h-[130%] object-cover will-change-transform -translate-y-[15%]"
              />

              <div className="absolute inset-0 z-10 bg-primary-950/85 md:bg-transparent md:bg-linear-to-r md:from-primary-950 md:via-primary-950/80 md:to-transparent" />
              <div className="absolute inset-0 z-10 mix-blend-multiply bg-black/40 md:bg-transparent md:bg-linear-to-r md:from-black/80 md:via-black/20 md:to-transparent" />
              <div className="absolute inset-0 z-10 bg-black/20 md:bg-black/10" />

              <div className="absolute inset-0 z-20 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center pb-24 md:pb-32">
                <div className="max-w-2xl">

                  <Heading
                    level={1}
                    className={cn(
                      "text-white text-5xl sm:text-7xl lg:text-[5.5rem] font-extrabold tracking-tighter mb-6 transition-all duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)]",
                      isAnimatedIn ? "opacity-100 translate-x-0 delay-300" : "opacity-0 -translate-x-12"
                    )}
                  >
                    {slide.title}
                  </Heading>

                  <Text
                    className={cn(
                      "text-white/90 text-base sm:text-lg mb-10 leading-relaxed font-medium max-w-xl text-justify transition-all duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)]",
                      isAnimatedIn ? "opacity-100 translate-x-0 delay-500" : "opacity-0 -translate-x-12"
                    )}
                  >
                    {slide.description}
                  </Text>

                  <div className={cn(
                    "transition-all duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)]",
                    isAnimatedIn ? "opacity-100 translate-x-0 delay-700" : "opacity-0 -translate-x-12"
                  )}>
                    <Link to={slide.buttonLink} tabIndex={-1}>
                      <button className="bg-secondary hover:bg-secondary-600 transition-colors duration-300 text-white px-8 py-3.5 text-xs font-bold tracking-widest uppercase rounded-none border border-transparent">
                        {slide.buttonText}
                      </button>
                    </Link>
                  </div>

                </div>
              </div>
            </div>
          );
        })}
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