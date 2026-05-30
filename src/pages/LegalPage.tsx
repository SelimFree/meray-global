import { useTranslation } from "react-i18next";
import { Heading } from "../components/ui/Heading";
import { Text } from "../components/ui/Text";

interface LegalPageProps {
  title: string;
  lastUpdated: string;
  content: React.ReactNode;
}

export default function LegalPage({ title, lastUpdated, content }: LegalPageProps) {
  const { t } = useTranslation("legal");

  return (
    <div className="min-h-screen bg-gray-50 pt-32 pb-24 md:pt-40 md:pb-32">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        
        <div className="mb-12 border-b-2 border-primary-900 pb-8">
          <Heading level={1} className="text-3xl md:text-5xl font-extrabold uppercase tracking-tight text-primary-900">
            {title}
          </Heading>
          <Text className="mt-6 text-xs font-bold tracking-widest text-gray-500 uppercase">
            {t("custom.lastUpdatedLabel")} {lastUpdated}
          </Text>
        </div>

        <div className="bg-white p-6 sm:p-10 md:p-16 border border-gray-200 shadow-sm">
          {content}
        </div>

      </div>
    </div>
  );
}