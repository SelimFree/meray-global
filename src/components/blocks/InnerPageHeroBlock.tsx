import { useEffect, useRef } from 'react';
import { Heading } from '../ui/Heading';
import { Text } from '../ui/Text';

interface InnerPageHeroProps {
    title: string;
    description: string;
    image: string;
}

export const InnerPageHeroBlock = ({ title, description, image }: InnerPageHeroProps) => {
    const imgRef = useRef<HTMLImageElement>(null);
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const section = sectionRef.current;
        const img = imgRef.current;
        if (!section || !img) return;

        const handleScroll = () => {
            const { top, height } = section.getBoundingClientRect();
            const viewportHeight = window.innerHeight;

            if (top > viewportHeight || top + height < 0) return;
            const progress = -top / (height + viewportHeight);
            const shift = progress * height * 0.35;

            img.style.transform = `translateY(${shift}px)`;
        };

        handleScroll();

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section
            ref={sectionRef}
            className="relative w-full h-[45vh] min-h-90 max-h-125 overflow-hidden bg-primary-900 border-b border-secondary/20"
        >
            <div className="absolute inset-0 z-0">
                <img
                    ref={imgRef}
                    src={image}
                    alt={title}
                    className="w-full h-[130%] object-cover will-change-transform -translate-y-[15%]"
                />
            </div>

            <div className="absolute inset-0 z-10 bg-primary-950/85 md:bg-transparent md:bg-linear-to-r md:from-primary-950 md:via-primary-950/80 md:to-transparent" />
            <div className="absolute inset-0 z-10 mix-blend-multiply bg-black/40 md:bg-transparent md:bg-linear-to-r md:from-black/80 md:via-black/20 md:to-transparent" />
            <div className="absolute inset-0 z-10 bg-black/20 md:bg-black/10" />

            <div className="absolute bottom-0 right-0 z-20 hidden lg:block opacity-20 pointer-events-none w-1/3 h-full">
                <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full fill-white">
                    <polygon points="50,100 75,50 100,100" />
                    <polygon points="75,100 100,25 100,100" />
                </svg>
            </div>

            <div className="relative z-30 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-end pb-12 md:pb-16">
                <div className="max-w-3xl">
                    <Heading
                        level={1}
                        className="text-white text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter mb-4 drop-shadow-md"
                    >
                        {title}
                    </Heading>
                    <Text className="text-white/80 text-base md:text-lg max-w-2xl leading-relaxed drop-shadow-sm font-medium">
                        {description}
                    </Text>
                </div>
            </div>
        </section>
    );
};