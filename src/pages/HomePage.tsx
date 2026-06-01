import { useTranslation } from "react-i18next";
import { ContactTeaserBlock } from "../components/blocks/ContactTeaserBlock";
import { HeroBlock } from "../components/blocks/HeroBlock";
import { LogisticsHighlightsBlock } from "../components/blocks/LogisticsHighlightsBlock";
import { ProductPreviewBlock } from "../components/blocks/ProductPreviewBlock";
import { StatsBlock } from "../components/blocks/StatsBlock";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

export default function HomePage() {

    const { t: tCommon } = useTranslation("common");
    useDocumentTitle(tCommon("navbar.home"));
  
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