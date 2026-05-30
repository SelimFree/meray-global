import { useState, useEffect } from "react";
import { Cookie, X } from "lucide-react";
import { Button } from "./Button";
import { Text } from "./Text";
import { cn } from "../../lib/utils";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export function CookieBanner() {
    const [isVisible, setIsVisible] = useState(false);
    const { t } = useTranslation();

    useEffect(() => {
        const consent = localStorage.getItem("cookie-consent");
        if (!consent) {
            const timer = setTimeout(() => setIsVisible(true), 2000);
            return () => clearTimeout(timer);
        }
    }, []);

    const acceptCookies = () => {
        localStorage.setItem("cookie-consent", "accepted");
        setIsVisible(false);
    };

    return (
        <div
            className={cn(
                "fixed bottom-0 left-0 w-full z-60 bg-white border-t border-gray-200 transition-all duration-500 transform shadow-[0_-4px_20px_rgba(0,0,0,0.05)]",
                isVisible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0 pointer-events-none"
            )}
        >
            <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                    
                    <div className="flex items-start gap-4 md:items-center">
                        <div className="hidden bg-primary-800 p-2 md:block shrink-0">
                            <Cookie className="h-5 w-5 text-white" />
                        </div>

                        <div className="pr-6 md:pr-0">
                            <Text className="text-xs font-bold tracking-widest text-primary-900 uppercase mb-1 md:mb-0 md:hidden">
                                {t("cookieBanner.title")}
                            </Text>
                            <Text className="text-gray-600 text-sm leading-relaxed max-w-3xl">
                                <span className="hidden font-semibold text-primary-900 md:inline mr-2">
                                    {t("cookieBanner.title")}:
                                </span>
                                {t("cookieBanner.body")}
                            </Text>
                        </div>

                        <button
                            onClick={() => setIsVisible(false)}
                            className="absolute top-4 right-4 text-gray-400 hover:text-gray-900 transition-colors md:hidden"
                        >
                            <X className="h-5 w-5" />
                        </button>
                    </div>

                    <div className="flex items-center gap-3 shrink-0">
                        <Link to="/cookies" onClick={() => setIsVisible(false)}>
                            <Button variant="ghost" size="sm" className="text-sm font-semibold text-gray-600 hover:text-primary-800">
                                {t("cookieBanner.more")}
                            </Button>
                        </Link>
                        <Button size="sm" onClick={acceptCookies} className="px-8 rounded-none bg-primary-800 hover:bg-primary-900">
                            {t("cookieBanner.accept")}
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}