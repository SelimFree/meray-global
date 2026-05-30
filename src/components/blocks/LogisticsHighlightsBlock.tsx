import { useState, useEffect } from 'react';
import { Anchor, TrainFront, ShieldCheck, MapPin, ArrowRight } from 'lucide-react';
import { Heading } from '../ui/Heading';
import { Text } from '../ui/Text';
import { cn } from '../../lib/utils';
import { Link } from 'react-router-dom';

const capabilities = [
  {
    icon: Anchor,
    title: "Maritime Chartering",
    description: "Operating a dynamic fleet of specialized chemical and product tankers with real-time route optimization."
  },
  {
    icon: TrainFront,
    title: "Rail & Tank Storage",
    description: "Secured throughput at major global terminals, connected via dedicated rail and pipeline infrastructure."
  },
  {
    icon: ShieldCheck,
    title: "Risk & Compliance",
    description: "Strict adherence to international trade laws, maritime regulations, and ESG environmental standards."
  }
];

const globalHubs = [
  { city: "Houston", region: "Americas", coords: "29.7604° N, 95.3698° W" },
  { city: "Rotterdam", region: "EMEA", coords: "51.9225° N, 4.4791° E" },
  { city: "Fujairah", region: "Middle East", coords: "25.1288° N, 56.3265° E" },
  { city: "Singapore", region: "APAC", coords: "1.3521° N, 103.8198° E" }
];

export const LogisticsHighlightsBlock = () => {
  const [pingIndex, setPingIndex] = useState<number | null>(null);
  const [vesselCount, setVesselCount] = useState(254);

  useEffect(() => {
    // 1. Telemetry Ping Simulator: Flashes a random row every 2.5 seconds
    const pingInterval = setInterval(() => {
      const random = Math.floor(Math.random() * globalHubs.length);
      setPingIndex(random);

      // Clear the flash after 800ms
      setTimeout(() => setPingIndex(null), 800);
    }, 2500);

    const countInterval = setInterval(() => {
      setVesselCount(prev => {
        if (prev > 260) return prev - 1;
        if (prev < 250) return prev + 1;
        return prev + (Math.random() > 0.5 ? 1 : -1);
      });
    }, 4500);

    return () => {
      clearInterval(pingInterval);
      clearInterval(countInterval);
    };
  }, []);

  return (
    <section className="w-full bg-white py-24 border-b border-gray-200">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <div className="flex flex-col">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-0.5 w-8 bg-secondary" />
              <Text className="text-xs font-bold tracking-[0.2em] text-gray-500 uppercase">
                Global Infrastructure
              </Text>
            </div>

            <Heading level={2} className="text-4xl md:text-5xl font-extrabold text-primary-900 tracking-tight mb-6">
              Global Reach. <br />
              <span className="text-gray-400">Precision Delivery.</span>
            </Heading>

            <Text className="text-gray-600 text-sm md:text-base leading-relaxed mb-12 max-w-lg">
              Our integrated logistics network bridges the gap between producers and consumers. We manage complex physical movements across oceans, rails, and pipelines with absolute terminal precision.
            </Text>

            <div className="flex flex-col gap-8 mb-12">
              {capabilities.map((cap, index) => {
                const Icon = cap.icon;
                return (
                  <div key={index} className="flex items-start gap-5 group">
                    <div className="p-3 bg-gray-50 border border-gray-200 transition-colors group-hover:border-primary-900 group-hover:bg-primary-900">
                      <Icon className="h-6 w-6 text-primary-900 transition-colors group-hover:text-white" strokeWidth={1.5} />
                    </div>
                    <div>
                      <Heading level={3} className="text-sm font-bold text-primary-900 uppercase tracking-widest mb-2">
                        {cap.title}
                      </Heading>
                      <Text className="text-sm text-gray-600 leading-relaxed max-w-md">
                        {cap.description}
                      </Text>
                    </div>
                  </div>
                );
              })}
            </div>

            <Link to="/logistics" className="group flex w-fit items-center gap-3 border-b-2 border-primary-900 pb-1 text-xs font-bold tracking-widest text-primary-900 uppercase transition-colors hover:text-secondary hover:border-secondary">
              Explore Our Supply Chain
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="relative w-full h-full min-h-125 lg:min-h-150 bg-primary-900 border border-gray-200 shadow-2xl overflow-hidden flex flex-col">

            <div className="flex items-center justify-between border-b border-white/10 px-6 md:px-8 py-5 md:py-6 bg-black/20">
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-secondary" />
                <span className="text-[10px] sm:text-xs font-bold tracking-widest text-white uppercase">
                  Network Routing Status
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-none bg-secondary animate-pulse" />
                <span className="text-[10px] font-bold tracking-widest text-white/50 uppercase">
                  Live
                </span>
              </div>
            </div>

            <div
              className="absolute inset-0 z-0 opacity-10 pointer-events-none animate-pan-grid"
              style={{
                backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.2) 1px, transparent 1px)`,
                backgroundSize: '40px 40px'
              }}
            />

            <div className="relative z-10 flex flex-col grow justify-center px-4 md:px-8 py-10 gap-2">

              <div className="grid grid-cols-12 gap-2 md:gap-4 pb-4 border-b border-white/10 mb-4 px-2 md:px-4">
                <span className="col-span-5 md:col-span-4 text-[10px] font-bold tracking-widest text-white/40 uppercase">Terminal</span>
                <span className="hidden md:block col-span-3 text-[10px] font-bold tracking-widest text-white/40 uppercase">Region</span>
                <span className="col-span-7 md:col-span-5 text-[10px] font-bold tracking-widest text-white/40 uppercase text-right">Coordinates</span>
              </div>

              {globalHubs.map((hub, index) => {
                const isPinged = pingIndex === index;

                return (
                  <div
                    key={index}
                    className={cn(
                      "grid grid-cols-12 gap-2 md:gap-4 items-center px-2 md:px-4 py-4 md:py-5 border transition-all duration-300 cursor-default group",
                      isPinged
                        ? "border-secondary/40 bg-secondary/10 shadow-[inset_0_0_20px_rgba(var(--color-secondary),0.1)]"
                        : "border-transparent hover:border-white/10 hover:bg-black/10"
                    )}
                  >
                    <div className="col-span-5 md:col-span-4 flex items-center gap-3">
                      <div className={cn(
                        "hidden sm:block h-1.5 w-1.5 transition-all duration-200 shrink-0",
                        isPinged ? "bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]" : "bg-secondary opacity-50 group-hover:opacity-100"
                      )} />
                      <span className={cn(
                        "text-xs sm:text-sm font-bold tracking-wider uppercase truncate transition-colors duration-200",
                        isPinged ? "text-white" : "text-white/80"
                      )}>
                        {hub.city}
                      </span>
                    </div>
                    <div className="hidden md:block col-span-3">
                      <span className={cn(
                        "text-xs font-medium transition-colors duration-200",
                        isPinged ? "text-white/90" : "text-white/60"
                      )}>
                        {hub.region}
                      </span>
                    </div>
                    <div className="col-span-7 md:col-span-5 text-right flex justify-end">
                      <span className={cn(
                        "text-[10px] sm:text-xs font-mono tracking-wider transition-colors duration-200",
                        isPinged ? "text-secondary font-bold" : "text-white/40 group-hover:text-white/80"
                      )}>
                        {hub.coords}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="border-t border-white/10 px-6 md:px-8 py-4 bg-black/20 flex items-center gap-2">
              <span className="text-[10px] font-mono text-white/30 uppercase tracking-widest tabular-nums">
                System connected. Monitoring {vesselCount} active maritime vessels
              </span>
              <div className="h-3 w-1.5 bg-white/50 animate-pulse" />
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};