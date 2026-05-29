import { ContactTeaserBlock } from "../components/blocks/ContactTeaserBlock";
import { HeroBlock } from "../components/blocks/HeroBlock";
import { LogisticsHighlightsBlock } from "../components/blocks/LogisticsHighlightsBlock";
import { ProductPreviewBlock } from "../components/blocks/ProductPreviewBlock";
import { StatsBlock } from "../components/blocks/StatsBlock";

export default function HomePage() {
  return (
    <main className="flex flex-col w-full">
      <HeroBlock />
      <StatsBlock />
      <ProductPreviewBlock />
      <LogisticsHighlightsBlock />
      <ContactTeaserBlock />
    </main>
  );
}