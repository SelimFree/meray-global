import { Link } from 'react-router-dom';
import { ArrowRight, Globe } from 'lucide-react';
import { Heading } from '../ui/Heading';
import { Text } from '../ui/Text';

export const ContactTeaserBlock = () => {
  return (
    <section className="relative w-full bg-primary-900 border-t border-white/10 overflow-hidden">

      <div className="absolute top-0 right-0 w-3/4 md:w-1/2 h-full bg-black/10 transform skew-x-[-45deg] translate-x-1/4 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 lg:gap-8">

          <div className="max-w-3xl flex flex-col">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-0.5 w-12 bg-secondary" />
              <Text className="text-xs font-bold tracking-[0.2em] text-white/60 uppercase">
                Contact Us
              </Text>
            </div>

            <Heading level={2} className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tighter leading-[1.1] mb-6">
              Structure your next <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-white to-white/40">
                strategic physical trade.
              </span>
            </Heading>

            <Text className="text-white/70 text-base md:text-lg max-w-xl leading-relaxed">
              Connect directly with our global specialists to secure supply, optimize downstream logistics, or discuss custom commodity solutions.
            </Text>
          </div>

          <div className="flex flex-col gap-6 shrink-0 lg:pb-2">
            <Link to="/contact" className="group">
              <button className="flex w-full sm:w-auto items-center justify-center gap-4 bg-secondary px-8 py-5 text-xs font-bold tracking-[0.2em] text-primary-900 uppercase transition-all duration-300 hover:bg-white shadow-[0_0_20px_rgba(var(--color-secondary),0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] border border-transparent rounded-none">
                Make a request
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </button>
            </Link>

            <div className="flex items-center justify-center sm:justify-start gap-3 opacity-60">
              <Globe className="h-4 w-4 text-white" />
              <Text className="text-[10px] font-bold tracking-widest text-white uppercase">
                Dubai • Ashgabat • Singapore • Astana
              </Text>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};