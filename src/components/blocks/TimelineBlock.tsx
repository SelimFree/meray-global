import { useTranslation } from 'react-i18next';
import { Heading } from '../ui/Heading';
import { Text } from '../ui/Text';
import { cn } from '../../lib/utils';

const timelineEvents = [
  { tKey: "y2015" },
  { tKey: "y2021" },
  { tKey: "y2024" },
  { tKey: "y2026" }
];

export const TimelineBlock = () => {
  const { t } = useTranslation("about");

  return (
    <section className="w-full py-24 border-b border-gray-200 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-20">
          <Heading level={2} className="text-3xl md:text-4xl font-extrabold text-primary-900 tracking-tight">
            {t("timelineBlock.title")}
          </Heading>
        </div>

        <div className="relative">
          <div className="absolute left-1.25 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 md:-translate-x-1/2" />

          <div className="flex flex-col gap-12">
            {timelineEvents.map((event, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={event.tKey}
                  className={cn(
                    "relative flex w-full",
                    isEven ? "md:justify-start" : "md:justify-end"
                  )}
                >
                  <div className="absolute left-0.5 md:left-1/2 top-2 w-2 h-2 bg-secondary md:-translate-x-1/2 shadow-[0_0_0_6px_rgba(249,250,251,1)] z-10" />

                  <div className="w-full pl-8 md:pl-0 md:w-[calc(50%-3rem)]">
                    <div className={cn(
                      "flex flex-col",
                      isEven ? "md:items-end md:text-right" : "md:items-start md:text-left"
                    )}>
                      <span className="text-3xl font-mono font-bold text-gray-300 tracking-tighter block mb-2">
                        {t(`timelineBlock.events.${event.tKey}.year`)}
                      </span>
                      <Heading level={3} className="text-lg font-bold text-primary-900 mb-2">
                        {t(`timelineBlock.events.${event.tKey}.title`)}
                      </Heading>
                      <Text className="text-sm text-gray-600 text-justify">
                        {t(`timelineBlock.events.${event.tKey}.description`)}
                      </Text>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};