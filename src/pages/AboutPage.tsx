import { InnerPageHeroBlock } from "../components/blocks/InnerPageHeroBlock";
import { MissionBlock } from "../components/blocks/MissionBlock";
import { TimelineBlock } from "../components/blocks/TimelineBlock";
import { RiskAndStrategyBlock } from "../components/blocks/RistAndStrategyBlock";
import AboutHeading from "../assets/about/about_heading.png";

export default function AboutPage() {
  return (
    <main className="flex flex-col w-full bg-white">
      <InnerPageHeroBlock
        title="Corporate Overview"
        description="Meray Global is a premier independent commodity trading house. We navigate complex global markets to secure and deliver vital energy resources."
        image={AboutHeading}
      />
      <MissionBlock />
      <TimelineBlock />
      <RiskAndStrategyBlock />
    </main>
  );
}