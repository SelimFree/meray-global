import { useLocation, Link } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";
import { useTranslation } from "react-i18next";
import { cn } from "../../lib/utils";

export function Breadcrumbs({ className }: { className?: string }) {
    const location = useLocation();
    const { t } = useTranslation();

    const pathnames = location.pathname.split("/").filter((x) => x);

    if (pathnames.length === 0) return null;

    return (
        <nav
            aria-label="Breadcrumb"
            className={cn("absolute z-10 w-full py-6 pointer-events-none", className)}
        >
            <div className="w-full mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <ol className="inline-flex items-center space-x-2 text-xs font-bold tracking-widest uppercase text-gray-500 pointer-events-auto">

                    <li>
                        <Link
                            to="/"
                            className="flex items-center hover:text-primary-800 transition-colors duration-200"
                        >
                            <Home className="h-4 w-4" aria-hidden="true" />
                            <span className="sr-only">{t("navbar.home", "Home")}</span>
                        </Link>
                    </li>

                    {pathnames.map((value, index) => {
                        const isLast = index === pathnames.length - 1;
                        const to = `/${pathnames.slice(0, index + 1).join("/")}`;

                        const defaultLabel = value.charAt(0).toUpperCase() + value.slice(1).replace(/-/g, ' ');
                        const label = t(`navbar.${value}`, defaultLabel);

                        return (
                            <li key={to} className="flex items-center space-x-2">
                                <ChevronRight className="h-4 w-4 text-gray-300 shrink-0" aria-hidden="true" />
                                {isLast ? (
                                    <span className="text-primary-900" aria-current="page">
                                        {label}
                                    </span>
                                ) : (
                                    <Link
                                        to={to}
                                        className="hover:text-primary-800 transition-colors duration-200"
                                    >
                                        {label}
                                    </Link>
                                )}
                            </li>
                        );
                    })}

                </ol>
            </div>
        </nav>
    );
}