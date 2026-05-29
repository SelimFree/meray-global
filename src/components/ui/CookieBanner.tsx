import { useState, useEffect } from "react";
import { Cookie, X } from "lucide-react";
import { Button } from "./Button";
import { Text } from "./Text";
import { cn } from "../../lib/utils";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export function CookieBanner() {
    const [isVisible, setIsVisible] = useState(false);
    const {t} = useTranslation();

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
                "fixed bottom-4 left-4 right-4 md:left-8 md:right-auto md:max-w-md z-60 transition-all duration-500 transform",
                isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0 pointer-events-none"
            )}
        >
            <div className="bg-white  p-5 shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-gray-200 flex flex-col gap-4">
                <div className="flex items-start gap-4">
                    <div className="bg-primary p-2.5  shrink-0">
                        <Cookie className="h-6 w-6 text-white" />
                    </div>

                    <div className="space-y-1 pr-6">
                        <Text className="text-primary uppercase font-semibold">{t("cookieBanner.title")}</Text>
                        <Text className="text-gray-600 text-sm leading-relaxed">
                            {t("cookieBanner.body")}
                        </Text>
                    </div>

                    <button
                        onClick={() => setIsVisible(false)}
                        className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
                    >
                        <X className="h-5 w-5" />
                    </button>
                </div>

                <div className="flex items-center gap-3">
                    <Button size="sm" onClick={acceptCookies} className="px-8">
                        {t("cookieBanner.accept")}
                    </Button>

                    <Link to="/cookies" onClick={() => setIsVisible(false)}>
                        <Button variant="ghost" size="sm">
                        {t("cookieBanner.more")}
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}