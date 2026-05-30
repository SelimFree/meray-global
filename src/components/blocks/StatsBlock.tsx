import { useEffect, useState, useRef } from 'react';
import { Heading } from '../ui/Heading';
import { Text } from '../ui/Text';
import { cn } from '../../lib/utils';

const stats = [
  { id: 1, prefix: "", value: 5.5, suffix: "M+", decimals: 1, description: "Barrels Traded Daily" },
  { id: 2, prefix: "", value: 150, suffix: "+", decimals: 0, description: "Active Global Ports" },
  { id: 3, prefix: "$", value: 80, suffix: "B+", decimals: 0, description: "Annual Revenue" },
  { id: 4, prefix: "", value: 250, suffix: "+", decimals: 0, description: "Vessels on Water" }
];

function useCountUp(end: number, decimals: number = 0, duration: number = 2000) {
  const [count, setCount] = useState(0);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isIntersecting) return;

    let startTime: number | null = null;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      const easeProgress = 1 - Math.pow(1 - progress, 4); 
      
      setCount(easeProgress * end);

      if (progress < 1) {
        window.requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    window.requestAnimationFrame(animate);
  }, [isIntersecting, end, duration]);

  return { count: count.toFixed(decimals), ref };
}

const StatItem = ({ stat, index }: { stat: typeof stats[0], index: number }) => {
  const { count, ref } = useCountUp(stat.value, stat.decimals, 2500 + (index * 200));

  return (
    <div 
      ref={ref} 
      className={cn(
        "relative flex flex-col justify-center px-8 py-12 transition-all duration-700",
        "border-b border-gray-200 lg:border-b-0 lg:border-r last:border-r-0 last:border-b-0",
        "even:bg-gray-50/50 lg:even:bg-transparent hover:bg-gray-50 transition-colors duration-500"
      )}
    >
      <div className="absolute top-0 left-0 w-full h-1 bg-transparent group-hover:bg-secondary transition-colors duration-300" />
      
      <div className="flex items-baseline gap-1 mb-3">
        <span className="text-2xl font-bold text-gray-400">{stat.prefix}</span>
        <Heading level={2} className="text-5xl md:text-6xl font-extrabold tracking-tighter text-primary-900 tabular-nums">
          {count}
        </Heading>
        <span className="text-2xl font-bold text-secondary">{stat.suffix}</span>
      </div>
      
      <Text className="text-xs font-bold text-gray-500 uppercase tracking-[0.2em]">
        {stat.description}
      </Text>
    </div>
  );
};

export const StatsBlock = () => {
  return (
    <section className="w-full bg-white relative z-10 border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex items-center gap-4 py-6 border-b border-gray-100">
          <div className="h-1.5 w-1.5 bg-secondary shrink-0" />
          <Text className="text-[10px] font-bold tracking-[0.3em] text-gray-400 uppercase">
            Global Infrastructure Metrics
          </Text>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <StatItem key={stat.id} stat={stat} index={index} />
          ))}
        </div>
        
      </div>
    </section>
  );
};