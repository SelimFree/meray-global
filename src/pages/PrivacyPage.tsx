import { useTranslation } from "react-i18next";
import LegalPage from "./LegalPage";
import { Heading } from "../components/ui/Heading";
import { Text } from "../components/ui/Text";
import { List, ListItem } from "../components/ui/List";
import { useAppContext } from "../context/AppContext";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

interface PrivacyDataItem {
  label: string;
  desc: string;
}

export default function PrivacyPage() {
  const { t } = useTranslation("legal");
  const { companyName } = useAppContext();

  const { t: tCommon } = useTranslation("common");
  useDocumentTitle(tCommon("navbar.privacy"));


  const dataList = t("privacyPolicy.section2.dataList", { returnObjects: true }) as PrivacyDataItem[];

  const content = (
    <div className="space-y-12">
      <section>
        <Heading level={3} className="mb-4 text-xs font-bold tracking-widest text-primary-900 uppercase border-b border-gray-100 pb-2">
          1.0 {t("privacyPolicy.section1.title")}
        </Heading>
        <Text className="text-sm leading-relaxed text-gray-700">
          {t("privacyPolicy.section1.text", { company: companyName })}
        </Text>
      </section>

      <section>
        <Heading level={3} className="mb-4 text-xs font-bold tracking-widest text-primary-900 uppercase border-b border-gray-100 pb-2">
          2.0 {t("privacyPolicy.section2.title")}
        </Heading>
        <Text className="mb-6 text-sm leading-relaxed text-gray-700">
          {t("privacyPolicy.section2.text")}
        </Text>

        <List className="space-y-4">
          {Array.isArray(dataList) && dataList.map((item, index) => (
            <ListItem key={index} icon={null} className="text-sm text-gray-700 pl-4 border-l-2 border-secondary">
              <span>
                <span className="font-bold text-primary-900 uppercase tracking-wide text-xs mr-2">{item.label}</span>
                {item.desc}
              </span>
            </ListItem>
          ))}
        </List>
      </section>

      <section>
        <Heading level={3} className="mb-4 text-xs font-bold tracking-widest text-primary-900 uppercase border-b border-gray-100 pb-2">
          3.0 {t("privacyPolicy.section3.title")}
        </Heading>
        <Text className="text-sm leading-relaxed text-gray-700">
          {t("privacyPolicy.section3.text")}
        </Text>
      </section>
    </div>
  );

  return (
    <LegalPage
      title={t("privacyPolicy.title")}
      lastUpdated={t("privacyPolicy.lastUpdated")}
      content={content}
    />
  );
}