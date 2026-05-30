import { InnerPageHeroBlock } from "../components/blocks/InnerPageHeroBlock";
import { MissionBlock } from "../components/blocks/MissionBlock";
import { TimelineBlock } from "../components/blocks/TimelineBlock";
import { RiskAndStrategyBlock } from "../components/blocks/RistAndStrategyBlock";

export default function AboutPage() {
  return (
    <main className="flex flex-col w-full bg-white">
      <InnerPageHeroBlock 
        title="Corporate Overview"
        description="Meray Global is a premier independent commodity trading house. We navigate complex global markets to secure and deliver vital energy resources."
        image="https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=2000"
      />
      <MissionBlock />
      <TimelineBlock />
      <RiskAndStrategyBlock />
    </main>
  );
}