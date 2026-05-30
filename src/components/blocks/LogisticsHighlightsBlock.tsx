import { Anchor, TrainFront, ShieldCheck } from 'lucide-react';
import { Heading } from '../ui/Heading';
import { Text } from '../ui/Text';
import { useTranslation } from 'react-i18next';
import WorldMap from '../../assets/world_map.svg';

const capabilities = [
  {
    icon: Anchor,
    title: "Maritime Chartering",
    description: "Operating a dynamic fleet of specialized chemical and product tankers with real-time route optimization.",
  },
  {
    icon: TrainFront,
    title: "Rail & Tank Storage",
    description: "Secured throughput at major global terminals, connected via dedicated rail and pipeline infrastructure.",
  },
  {
    icon: ShieldCheck,
    title: "Risk & Compliance",
    description: "Strict adherence to international trade laws, maritime regulations, and ESG environmental standards.",
  },
];

const locations = [
  { id: "hou", label: "houston", cx: 250, cy: 180 },
  { id: "ldn", label: "london", cx: 480, cy: 125 },
  { id: "dxb", label: "dubai", cx: 615, cy: 210 },
  { id: "sin", label: "singapore", cx: 740, cy: 270 },
  { id: "tyo", label: "tokyo", cx: 820, cy: 150 },
  { id: "ist", label: "istanbul", cx: 550, cy: 160 },
  { id: "asb", label: "ashgabat", cx: 620, cy: 165 },
  { id: "msk", label: "moscow", cx: 560, cy: 100 },
  { id: "alm", label: "almaty", cx: 655, cy: 145 },
  { id: "bjn", label: "beijing", cx: 750, cy: 145 },
];

const routes = [
  { id: "r1", d: "M 250 180 A 300 300 0 0 1 480 125", duration: 3, startOffset: -1 },
  { id: "r2", d: "M 480 125 A 250 250 0 0 1 615 210", duration: 2.5, startOffset: -1.5 },
  { id: "r3", d: "M 615 210 A 300 300 0 0 1 740 270", duration: 3, startOffset: -2 },
  { id: "r4", d: "M 740 270 A 250 250 0 0 0 820 150", duration: 3.5, startOffset: -0.5 },
  { id: "r5", d: "M 820 150 A 700 500 0 0 0 250 180", duration: 5, startOffset: -3 },
  { id: "r6", d: "M 480 125 A 200 200 0 0 1 560 100", duration: 2, startOffset: -0.5 },
  { id: "r7", d: "M 480 125 A 250 250 0 0 1 550 160", duration: 2, startOffset: -1 },
  { id: "r8", d: "M 550 160 A 150 150 0 0 1 620 165", duration: 1.5, startOffset: -0.2 },
  { id: "r9", d: "M 560 100 A 300 300 0 0 1 655 145", duration: 2.5, startOffset: -1.2 },
  { id: "r11", d: "M 620 165 A 150 150 0 0 1 615 210", duration: 1.5, startOffset: -1.8 },
  { id: "r10", d: "M 655 145 A 150 150 0 0 1 750 145", duration: 2, startOffset: -1.5 },
  { id: "r12", d: "M 750 145 A 100 100 0 0 1 820 150", duration: 1.5, startOffset: -0.5 },
  { id: "r13", d: "M 740 270 A 200 200 0 0 0 750 145", duration: 2.5, startOffset: -2 },
];


export const LogisticsHighlightsBlock = () => {
  const { t } = useTranslation("about");

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

            <Text className="text-gray-600 text-sm md:text-base leading-relaxed mb-12 max-w-lg text-justify">
              Our integrated logistics network bridges the gap between producers and consumers.
              We manage complex physical movements across oceans, rails, and pipelines with
              absolute terminal precision.
            </Text>

            <div className="flex flex-col gap-8 mb-12">
              {capabilities.map((cap, index) => {
                const Icon = cap.icon;
                return (
                  <div key={index} className="flex items-start gap-5 group">
                    <div className="p-3 bg-gray-50 border border-gray-200 transition-colors group-hover:border-primary-900 group-hover:bg-primary-900">
                      <Icon
                        className="h-6 w-6 text-primary-900 transition-colors group-hover:text-white"
                        strokeWidth={1.5}
                      />
                    </div>
                    <div>
                      <Heading level={3} className="text-sm font-bold text-primary-900 uppercase tracking-widest mb-2">
                        {cap.title}
                      </Heading>
                      <Text className="text-sm text-gray-600 leading-relaxed max-w-md text-justify">
                        {cap.description}
                      </Text>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

          <div className="relative scale-110 lg:scale-150 w-full overflow-hidden flex flex-col min-h-49 lg:min-h-82">
            <div className="relative flex-1 overflow-hidden">

              <div className="absolute inset-0 w-full h-full pointer-events-none">
                <img src={WorldMap} className="w-full h-full object-contain opacity-15 grayscale" />
              </div>

              <svg
                viewBox="0 0 1000 500"
                className="absolute inset-0 w-full h-full z-10 overflow-visible"
                preserveAspectRatio="xMidYMid meet"
              >
                <defs>
                  <filter id="lh-glow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="5" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                {routes.map((route) => (
                  <path
                    key={`track-${route.id}`}
                    d={route.d}
                    fill="none"
                    stroke="rgba(255,255,255,0.18)"
                    strokeWidth="1.5"
                    strokeDasharray="4 9"
                  />
                ))}

                {routes.map((route) => (
                  <g key={`fwd-${route.id}`} filter="url(#lh-glow)">
                    <circle r="4" fill="var(--color-secondary)">
                      <animateMotion
                        dur={`${route.duration}s`}
                        repeatCount="indefinite"
                        path={route.d}
                        begin={`${route.startOffset}s`}
                      />
                    </circle>
                    <circle r="2.5" fill="var(--color-secondary)" opacity="0.55">
                      <animateMotion
                        dur={`${route.duration}s`}
                        repeatCount="indefinite"
                        path={route.d}
                        begin={`${route.startOffset + 0.06}s`}
                      />
                    </circle>
                    <circle r="1.5" fill="var(--color-secondary)" opacity="0.28">
                      <animateMotion
                        dur={`${route.duration}s`}
                        repeatCount="indefinite"
                        path={route.d}
                        begin={`${route.startOffset + 0.12}s`}
                      />
                    </circle>
                  </g>
                ))}

                {routes.map((route) => (
                  <g key={`rev-${route.id}`} filter="url(#lh-glow)">
                    <circle r="4" fill="var(--color-secondary)">
                      <animateMotion
                        dur={`${route.duration}s`}
                        repeatCount="indefinite"
                        path={route.d}
                        begin={`${route.startOffset - route.duration / 2}s`}
                        keyPoints="1;0"
                        keyTimes="0;1"
                        calcMode="linear"
                      />
                    </circle>
                    <circle r="2.5" fill="var(--color-secondary)" opacity="0.55">
                      <animateMotion
                        dur={`${route.duration}s`}
                        repeatCount="indefinite"
                        path={route.d}
                        begin={`${route.startOffset - route.duration / 2 + 0.06}s`}
                        keyPoints="1;0"
                        keyTimes="0;1"
                        calcMode="linear"
                      />
                    </circle>
                    <circle r="1.5" fill="var(--color-secondary)" opacity="0.28">
                      <animateMotion
                        dur={`${route.duration}s`}
                        repeatCount="indefinite"
                        path={route.d}
                        begin={`${route.startOffset - route.duration / 2 + 0.12}s`}
                        keyPoints="1;0"
                        keyTimes="0;1"
                        calcMode="linear"
                      />
                    </circle>
                  </g>
                ))}

                {locations.map((loc) => (
                  <g key={loc.id}>
                    <circle cx={loc.cx} cy={loc.cy} r="8" fill="var(--color-secondary)" opacity="0.3">
                      <animate attributeName="r" values="6;20;6" dur="2.5s" repeatCount="indefinite" />
                      <animate attributeName="opacity" values="0.45;0;0.45" dur="2.5s" repeatCount="indefinite" />
                    </circle>

                    <circle cx={loc.cx} cy={loc.cy} r="4" fill="white" filter="url(#lh-glow)" />
                    <circle cx={loc.cx} cy={loc.cy} r="2" fill="var(--color-secondary)" />

                    <text
                      x={loc.cx}
                      y={loc.cy - 12}
                      fontSize="10"
                      fontWeight="bold"
                      textAnchor="middle"
                      fill="rgba(0, 75, 112, 0.7)"
                      fontFamily="inherit"
                      letterSpacing="0.08em"
                      style={{ textTransform: 'uppercase' }}
                    >
                      {t(`logisticsMapBlock.${loc.label}`, loc.label)}
                    </text>
                  </g>
                ))}
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};