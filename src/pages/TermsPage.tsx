import { useTranslation } from "react-i18next";
import LegalPage from "./LegalPage";
import { Heading } from "../components/ui/Heading";
import { Text } from "../components/ui/Text";
import { List, ListItem } from "../components/ui/List";
import { useAppContext } from "../context/AppContext";

export default function TermsPage() {
  const { t } = useTranslation("legal");
  const { companyName, country } = useAppContext();

  const SharpBullet = <div className="h-1.5 w-1.5 bg-secondary mt-1.5 shrink-0" />;
  const licenseList = t("termsOfService.section2.list", { returnObjects: true }) as string[];

  const content = (
    <div className="space-y-12">
      <section>
        <Heading level={3} className="mb-4 text-xs font-bold tracking-widest text-primary-900 uppercase border-b border-gray-100 pb-2">
          1.0 {t("termsOfService.section1.title")}
        </Heading>
        <Text className="text-sm leading-relaxed text-gray-700">
          {t("termsOfService.section1.text", { company: companyName })}
        </Text>
      </section>

      <section>
        <Heading level={3} className="mb-4 text-xs font-bold tracking-widest text-primary-900 uppercase border-b border-gray-100 pb-2">
          2.0 {t("termsOfService.section2.title")}
        </Heading>
        <Text className="mb-6 text-sm leading-relaxed text-gray-700">
          {t("termsOfService.section2.text")}
        </Text>

        <List className="space-y-4">
          {Array.isArray(licenseList) && licenseList.map((item, index) => (
            <ListItem key={index} icon={SharpBullet} className="items-start text-sm text-gray-700">
              {item}
            </ListItem>
          ))}
        </List>
      </section>

      <section>
        <Heading level={3} className="mb-4 text-xs font-bold tracking-widest text-primary-900 uppercase border-b border-gray-100 pb-2">
          3.0 {t("termsOfService.section3.title")}
        </Heading>
        <Text className="text-sm leading-relaxed text-gray-700">
          {t("termsOfService.section3.text", { country: country })}
        </Text>
      </section>
    </div>
  );

  return (
    <LegalPage
      title={t("termsOfService.title")}
      lastUpdated={t("termsOfService.lastUpdated")}
      content={content}
    />
  );
}