import { Heading } from '../ui/Heading';
import { Text } from '../ui/Text';

export const StatsBlock = () => {
  const stats = [
    { id: 1, metric: "5.5M+", description: "Barrels Traded Daily" },
    { id: 2, metric: "150+", description: "Active Global Ports" },
    { id: 3, metric: "$80B+", description: "Annual Revenue" },
    { id: 4, metric: "250+", description: "Vessels on Water" }
  ];

  return (
    <section className="w-full bg-neutral-100 py-12 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-neutral-300">
          {stats.map((stat) => (
            <div key={stat.id} className="flex flex-col items-center justify-center text-center px-4 pt-4 md:pt-0 first:pt-0">
              <Heading level={2} className="text-4xl md:text-5xl font-bold text-neutral-900 mb-2">
                {stat.metric}
              </Heading>
              <Text className="text-sm md:text-base text-neutral-600 font-medium uppercase tracking-wider">
                {stat.description}
              </Text>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};