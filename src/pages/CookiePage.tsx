import { useTranslation } from "react-i18next";
import LegalPage from "./LegalPage";
import { Heading } from "../components/ui/Heading";
import { Text } from "../components/ui/Text";
import { List, ListItem } from "../components/ui/List";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

interface CookieDataItem {
  label: string;
  desc: string;
}

export default function CookiePage() {
  const { t } = useTranslation("legal");

    const { t: tCommon } = useTranslation("common");
    useDocumentTitle(tCommon("navbar.cookie"));
  

  const SharpBullet = <div className="h-1.5 w-1.5 bg-secondary mt-1.5 shrink-0" />;
  const cookieList = t("cookiePolicy.section2.list", { returnObjects: true }) as CookieDataItem[];

  const content = (
    <div className="space-y-12">
      <section>
        <Heading level={3} className="mb-4 text-xs font-bold tracking-widest text-primary-900 uppercase border-b border-gray-100 pb-2">
          1.0 {t("cookiePolicy.section1.title")}
        </Heading>
        <Text className="text-sm leading-relaxed text-gray-700">
          {t("cookiePolicy.section1.text")}
        </Text>
      </section>

      <section>
        <Heading level={3} className="mb-4 text-xs font-bold tracking-widest text-primary-900 uppercase border-b border-gray-100 pb-2">
          2.0 {t("cookiePolicy.section2.title")}
        </Heading>
        <Text className="mb-6 text-sm leading-relaxed text-gray-700">
          {t("cookiePolicy.section2.text")}
        </Text>

        <List className="space-y-4">
          {Array.isArray(cookieList) && cookieList.map((item, index) => (
            <ListItem key={index} icon={SharpBullet} className="items-start text-sm text-gray-700">
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
          3.0 {t("cookiePolicy.section3.title")}
        </Heading>
        <Text className="text-sm leading-relaxed text-gray-700">
          {t("cookiePolicy.section3.textBefore")}
          <a
            href="https://allaboutcookies.org"
            className="text-primary-800 font-bold hover:text-secondary hover:underline underline-offset-4 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("cookiePolicy.section3.linkText")}
          </a>
          .
        </Text>
      </section>
    </div>
  );

  return (
    <LegalPage
      title={t("cookiePolicy.title")}
      lastUpdated={t("cookiePolicy.lastUpdated")}
      content={content}
    />
  );
}