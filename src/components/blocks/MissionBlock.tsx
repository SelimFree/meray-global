import { Heading } from '../ui/Heading';
import { Text } from '../ui/Text';
import { Image } from '../ui/Image';
import AboutBanner from "../../assets/about/about_banner.png";

interface MissionStat {
  value: string;
  label: string;
}

const stats: MissionStat[] = [
  { value: '15+', label: 'Years Active' },
  { value: '40+', label: 'Countries Served' },
  { value: '2k+', label: 'Products Shipped' },
];

export const MissionBlock = () => {
  return (
    <section className="w-full py-24 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-stretch">

          <div className="lg:col-span-7 flex flex-col justify-center pr-0 lg:pr-12">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-0.5 w-8 bg-secondary" />
              <Text className="text-xs font-bold tracking-[0.2em] text-gray-500 uppercase">
                Our Mission
              </Text>
            </div>

            <Heading
              level={2}
              className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary-900 tracking-tight leading-[1.2] mb-8"
            >
              We do not just trade markets.{' '}
              <br className="hidden md:block" />
              <span className="text-gray-400">
                We optimize the physical flow of global energy.
              </span>
            </Heading>

            <div className="flex flex-col gap-6">
              <Text className="text-gray-600 text-base leading-relaxed text-justify">
                Founded on the principles of precision, risk management, and operational
                excellence, Meray Global operates at the critical intersection of producers
                and industrial consumers. We manage physical supply chains with zero
                tolerance for inefficiency.
              </Text>
              <Text className="text-gray-600 text-base leading-relaxed text-justify">
                By integrating proprietary market intelligence with vast logistical
                capabilities—including maritime chartering, rail networks, and strategic
                storage—we guarantee supply continuity regardless of geopolitical
                volatility.
              </Text>
            </div>
          </div>

          <div className="lg:col-span-5 relative overflow-hidden bg-primary-900 min-h-105 flex flex-col justify-end">

            <Image
              src={AboutBanner}
              alt="Industrial port at dusk"
              aspectRatio="auto"
              containerClassName="absolute inset-0 w-full h-full"
              className="w-full h-full object-cover opacity-35"
            />

            <div className="absolute inset-0 bg-linear-to-t from-primary-900/95 via-primary-900/40 to-primary-900/10 pointer-events-none" />

            <div className="absolute top-6 left-6 w-5 h-5 border-t border-l border-white/20 pointer-events-none" />

            <div className="absolute top-6 right-6 flex flex-col items-end gap-0.5 pointer-events-none select-none">
              <span className="text-[9px] font-bold tracking-[0.22em] text-white/30 uppercase">
                Est.
              </span>
              <span
                className="font-extrabold text-white/[0.07] leading-none tracking-tight"
                style={{ fontSize: 'clamp(48px, 6vw, 64px)' }}
              >
                2015
              </span>
            </div>

            <div className="relative z-10 p-8 md:p-10">

              <div className="h-px w-8 bg-secondary mb-5" />

              <Text className="text-[9px] font-bold tracking-[0.22em] text-secondary uppercase mb-3">
                Founding Principle
              </Text>

              <blockquote className="font-serif italic text-lg md:text-xl text-white/90 leading-relaxed mb-8 max-w-sm">
                "Where complexity meets the market,&nbsp;we&nbsp;build&nbsp;the&nbsp;bridge."
              </blockquote>

              <div className="flex gap-8 border-t border-white/10 pt-6">
                {stats.map((stat) => (
                  <div key={stat.label} className="flex flex-col gap-1">
                    <span className="text-xl font-extrabold text-white/85 tracking-tight tabular-nums">
                      {stat.value}
                    </span>
                    <span className="text-[9px] font-bold tracking-[0.18em] text-white/35 uppercase">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};