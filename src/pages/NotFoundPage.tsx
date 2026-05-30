import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "../components/ui/Button";
import { Heading } from "../components/ui/Heading";
import { Text } from "../components/ui/Text";
import { useTranslation } from "react-i18next";

export default function NotFoundPage() {
  const { t } = useTranslation();
  
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center bg-gray-50 px-4 py-24 sm:px-6">
      <div className="w-full max-w-2xl border border-gray-200 bg-white p-10 text-center shadow-sm sm:p-16">
        
        <Text className="mb-4 text-xs font-bold tracking-widest text-primary-800 uppercase">
          System Notice 404
        </Text>
        
        <Heading level={1} className="mb-2 text-4xl font-extrabold tracking-tight text-gray-900 uppercase sm:text-5xl">
          {t("notFoundPage.title")}
        </Heading>
        
        <Heading level={3} className="text-sm font-bold tracking-widest text-gray-400 uppercase">
          {t("notFoundPage.subtitle")}
        </Heading>
        
        <div className="mx-auto my-8 h-px w-16 bg-gray-200"></div>
        
        <Text className="mx-auto max-w-md whitespace-pre-line text-sm leading-relaxed text-gray-600">
          {t("notFoundPage.body")}
        </Text>

        <div className="mt-12 flex justify-center">
          <Link to="/">
            <Button className="gap-3 px-8 py-3 text-xs font-bold tracking-widest uppercase transition-all hover:bg-primary-900">
              <ArrowLeft className="h-4 w-4" />
              {t("notFoundPage.returnBtn")}
            </Button>
          </Link>
        </div>
        
      </div>
    </div>
  );
}