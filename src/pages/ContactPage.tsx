import { useTranslation } from "react-i18next";
import { InnerPageHeroBlock } from "../components/blocks/InnerPageHeroBlock";
import { InquiryFormBlock } from "../components/blocks/InquiryFormBlock";
import ContactHeading from "../assets/contact/contact_heading.png";

export default function ContactPage() {
  const { t } = useTranslation("contact");

  return (
    <main className="flex flex-col w-full bg-white relative">
      <InnerPageHeroBlock
        title={t("heroBlock.title")}
        description={t("heroBlock.description")}
        image={ContactHeading}
      />

      <InquiryFormBlock />

    </main>
  );
}