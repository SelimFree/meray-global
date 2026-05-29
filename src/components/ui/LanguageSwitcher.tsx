import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Globe, ChevronDown } from "lucide-react";
import { Button } from "../ui/Button";
import { Text } from "../ui/Text";

const languages = [
    { code: "en", label: "English" }
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
        return
    }

    return (
        <div className="relative inline-block text-left">
            <Button
                type="button"
                variant="outline"
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex w-full items-center justify-center gap-2 border-transparent bg-transparent px-3 py-2 shadow-none hover:bg-primary-900 focus:outline-none focus:ring-0"
                id="language-menu-button"
                aria-expanded={isOpen}
                aria-haspopup="true"
            >
                <Globe className="h-6 w-6 text-white" strokeWidth={2} />
                <Text className="hidden w-28 sm:inline-block font-medium text-white uppercase md:text-2xl">
                    {currentLang.label}
                </Text>
                <ChevronDown className={`h-4 w-4 text-gray-400 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
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
                    className="absolute right-0 z-50 mt-2 w-40 origin-top-right bg-white shadow-lg focus:outline-none overflow-hidden"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="language-menu-button"
                >
                    <div className="py-1" role="none">
                        {languages.map((lang) => (
                            <button
                                key={lang.code}
                                onClick={() => handleLanguageChange(lang.code)}
                                className={`uppercase block w-full px-4 py-2 text-left transition-colors ${currentLang.code === lang.code
                                        ? "bg-primary/10"
                                        : "hover:bg-gray-100"
                                    }`}
                                role="menuitem"
                            >
                                <Text className={`${currentLang.code === lang.code ? "text-primary font-semibold" : "text-gray-700 hover:text-gray-900"}`}>
                                    {lang.label}
                                </Text>
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}