import { AlertTriangle, RefreshCw } from "lucide-react";
import { Button } from "../components/ui/Button";
import { Heading } from "../components/ui/Heading";
import { Text } from "../components/ui/Text";
import { useTranslation } from "react-i18next";

export default function ServerErrorPage() {
  const { t } = useTranslation();
  
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center bg-gray-50 px-4 py-24 sm:px-6">
      <div className="flex w-full max-w-2xl flex-col items-center gap-8 border-l-4 border-danger-500 bg-white p-8 text-center shadow-sm sm:p-12 md:flex-row md:items-start md:text-left">
        
        <div className="flex h-16 w-16 shrink-0 items-center justify-center border border-danger-200 bg-danger-50">
          <AlertTriangle className="h-8 w-8 text-danger-600" />
        </div>
        
        <div className="flex-1">
          <Text className="mb-2 text-xs font-bold tracking-widest text-danger-600 uppercase">
            Critical System Failure
          </Text>
          
          <Heading level={1} className="mb-4 text-2xl font-extrabold tracking-tight text-gray-900 uppercase sm:text-3xl">
            {t("errorPage.title")}
          </Heading>
          
          <Text className="mb-8 text-sm leading-relaxed text-gray-600">
            {t("errorPage.subtitle")}
          </Text>

          <Button 
            onClick={() => window.location.reload()} 
            className="bg-gray-900 gap-3 px-8 py-3 text-xs font-bold tracking-widest text-white uppercase transition-all hover:bg-gray-800"
          >
            <RefreshCw className="h-4 w-4" />
            {t("errorPage.refreshBtn")}
          </Button>
        </div>
        
      </div>
    </div>
  );
}