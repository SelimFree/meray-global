import { LineChart, Shield, Scale } from 'lucide-react';
import { Heading } from '../ui/Heading';
import { Text } from '../ui/Text';

const strategies = [
  {
    icon: LineChart,
    id: "01",
    title: "Market Intelligence",
    description: "Leveraging proprietary analytics and real-time terminal data to identify global arbitrage opportunities and optimize physical trading routes before market shifts occur."
  },
  {
    icon: Shield,
    id: "02",
    title: "Financial Hedging",
    description: "Protecting physical cargoes against severe price volatility using sophisticated derivative structures, backed by robust institutional credit facilities."
  },
  {
    icon: Scale,
    id: "03",
    title: "Regulatory Compliance",
    description: "Navigating complex international trade jurisdictions, maritime laws, and global customs requirements with an uncompromising, zero-tolerance legal framework."
  }
];

export const RiskAndStrategyBlock = () => {
  return (
    <section className="w-full py-24 bg-primary-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-4 mb-4">
              <div className="h-0.5 w-8 bg-secondary" />
              <Text className="text-xs font-bold tracking-[0.2em] text-white/50 uppercase">
                Corporate Security
              </Text>
            </div>
            <Heading level={2} className="text-white text-3xl md:text-4xl font-extrabold tracking-tight mb-6">
              Risk Management
            </Heading>
            <Text className="text-white/70 text-sm md:text-base leading-relaxed">
              Global trade is inherently volatile. We secure our supply chains and protect our partners through rigorous financial, operational, and legal risk mitigation protocols.
            </Text>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-l border-white/10">
          {strategies.map((strategy) => {
            const Icon = strategy.icon;
            return (
              <div
                key={strategy.id}
                className="group relative flex flex-col p-8 md:p-12 border-r border-b border-white/10 bg-white/5 hover:bg-white/10 transition-colors duration-500"
              >
                <span className="absolute top-6 right-8 text-4xl font-mono font-bold text-white/10 group-hover:text-white/20 transition-colors">
                  {strategy.id}
                </span>

                <Icon className="h-8 w-8 text-secondary mb-8" strokeWidth={1.5} />

                <Heading level={3} className="text-white text-lg font-bold uppercase tracking-widest mb-4">
                  {strategy.title}
                </Heading>

                <Text className="text-sm text-white/60 leading-relaxed group-hover:text-white/80 transition-colors">
                  {strategy.description}
                </Text>

                <div className="absolute bottom-0 left-0 w-0 h-1 bg-secondary transition-all duration-500 group-hover:w-full" />
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};