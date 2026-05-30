import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Globe, ChevronDown } from "lucide-react";
import { Button } from "../ui/Button";
import { Text } from "../ui/Text";

const languages = [
    { code: "en", label: "EN" },
    { code: "ru", label: "RU" },
];

export function LanguageSwitcher() {
    const { i18n } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);

    const currentLang = languages.find((lang) => i18n.language?.startsWith(lang.code)) || languages[0];
    
    const handleLanguageChange = (code: string) => {
        i18n.changeLanguage(code);
        setIsOpen(false);
    };

    if (languages.length <= 1) {
        return null;
    }

    return (
        <div className="relative inline-block text-left">
            <Button
                type="button"
                variant="ghost"
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex w-full items-center justify-center gap-2 rounded-none border-transparent bg-transparent px-2 py-2 shadow-none hover:bg-white/10 focus:outline-none focus:ring-0"
                id="language-menu-button"
                aria-expanded={isOpen}
                aria-haspopup="true"
            >
                <Globe className="h-4 w-4 text-white" strokeWidth={2} />
                <Text className="hidden w-6 text-left text-xs font-bold tracking-widest text-white uppercase sm:inline-block">
                    {currentLang.label}
                </Text>
                <ChevronDown className={`h-3 w-3 text-white/70 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
            </Button>

            {isOpen && (
                <div
                    className="fixed inset-0 z-40"
                    onClick={() => setIsOpen(false)}
                    aria-hidden="true"
                ></div>
            )}

            {isOpen && (
                <div
                    className="absolute right-0 z-50 mt-2 w-24 origin-top-right border border-gray-200 bg-white shadow-sm focus:outline-none"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="language-menu-button"
                >
                    <div className="py-1" role="none">
                        {languages.map((lang) => {
                            const isActive = currentLang.code === lang.code;
                            return (
                                <button
                                    key={lang.code}
                                    onClick={() => handleLanguageChange(lang.code)}
                                    className={`flex w-full items-center px-4 py-2.5 text-left transition-colors ${
                                        isActive
                                            ? "bg-gray-50 border-l-2 border-primary-800"
                                            : "border-l-2 border-transparent hover:bg-gray-50 hover:border-gray-300"
                                    }`}
                                    role="menuitem"
                                >
                                    <Text className={`text-xs font-bold tracking-widest uppercase ${
                                        isActive ? "text-primary-900" : "text-gray-500"
                                    }`}>
                                        {lang.label}
                                    </Text>
                                </button>
                            );
                        })}
                    </div>
                </div>
            )}
        </div>
    );
}