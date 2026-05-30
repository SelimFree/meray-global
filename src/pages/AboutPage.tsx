import { useTranslation } from "react-i18next";
import { InnerPageHeroBlock } from "../components/blocks/InnerPageHeroBlock";
import { MissionBlock } from "../components/blocks/MissionBlock";
import { TimelineBlock } from "../components/blocks/TimelineBlock";
import { RiskAndStrategyBlock } from "../components/blocks/RistAndStrategyBlock";
import AboutHeading from "../assets/about/about_heading.png";

export default function AboutPage() {
  const { t } = useTranslation("about");

  return (
    <main className="flex flex-col w-full bg-white">
      <InnerPageHeroBlock
        title={t("heroBlock.title")}
        description={t("heroBlock.description")}
        image={AboutHeading}
      />
      <MissionBlock />
      <TimelineBlock />
      <RiskAndStrategyBlock />
    </main>
  );
}