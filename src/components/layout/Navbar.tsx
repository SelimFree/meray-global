import { type ComponentProps, useState } from "react";
import { Menu, X } from "lucide-react";
import { NavLink, Link } from "react-router-dom";
import { Button } from "../ui/Button";
import { cn } from "../../lib/utils";
import type { NavLinkItem } from "./Layout";
import { Image } from "../ui/Image";
import { LanguageSwitcher } from "../ui/LanguageSwitcher";
import { useTranslation } from "react-i18next";

export interface NavbarProps extends ComponentProps<"header"> {
  links: NavLinkItem[];
}

export function Navbar({ links, className, ref, ...props }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

  const navItemClasses = ({ isActive }: { isActive: boolean }) =>
    cn(
      "group relative py-2 text-xs font-bold tracking-widest uppercase transition-colors duration-300",
      isActive ? "text-white" : "text-white/80 hover:text-white"
    );

  const mobileNavItemClasses = ({ isActive }: { isActive: boolean }) =>
    cn(
      "block w-full px-4 py-3 text-sm font-bold tracking-widest uppercase transition-all duration-300",
      isActive
        ? "bg-primary-900 text-secondary border-l-2 border-secondary"
        : "text-white/80 border-l-2 border-transparent hover:bg-primary-800 hover:text-white"
    );

  return (
    <header
      ref={ref}
      className={cn(
        "sticky top-0 z-90 w-full bg-primary/85 backdrop-blur-md transition-all h-18 md:h-22.5",
        className
      )}
      {...props}
    >
      <div className="flex h-full w-full items-center justify-between">

        <div className="relative h-full flex items-center w-30 md:w-50">
          <div className="absolute inset-0 scale-110 bg-white [clip-path:polygon(0_0,100%_0,85%_100%,0_100%)] shadow-[4px_0_15px_rgba(0,0,0,0.1)]" />

          <Link
            to="/"
            className="relative z-10 flex h-full w-full items-center px-4 sm:px-6 md:px-8 outline-none group"
          >
            <div className="shrink-0 transition-opacity duration-300 group-hover:opacity-80">
              <Image
                src="/android-chrome-512x512.png"
                aspectRatio="auto"
                alt={t("navbar.logoAlt")}
                className="h-20 object-contain md:h-22"
                containerClassName="bg-transparent"
              />
            </div>
          </Link>
        </div>

        <nav className="hidden flex-1 items-center justify-end gap-6 px-4 md:flex lg:gap-8 lg:px-8">
          {links.map((link) => (
            <NavLink key={link.href} to={link.href} className={navItemClasses}>
              {({ isActive }) => (
                <>
                  {t(`navbar.${link.label}`)}
                  <span
                    className={cn(
                      "absolute bottom-0 left-0 h-0.5 w-full bg-secondary transition-all duration-300 origin-left",
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    )}
                  />
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="ml-auto flex h-full items-center gap-4 pr-4 sm:pr-6 md:ml-0 md:pl-6 lg:pr-8">
          <LanguageSwitcher />

          <Button
            variant="ghost"
            size="sm"
            className="px-2 hover:bg-white/10 md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X className="h-6 w-6 text-white" /> : <Menu className="h-6 w-6 text-white" />}
          </Button>
        </div>
      </div>

      <div
        className={cn(
          "absolute left-0 top-18 w-full grid bg-primary-900/98 backdrop-blur-md transition-all duration-300 ease-in-out md:hidden",
          isOpen ? "grid-rows-[1fr] border-b border-white/10 opacity-100 shadow-xl" : "grid-rows-[0fr] opacity-0"
        )}
      >
        <div className="overflow-hidden">
          <nav className="flex flex-col space-y-1 px-4 py-4 sm:px-6">
            {links.map((link) => (
              <NavLink
                key={link.href}
                to={link.href}
                onClick={() => setIsOpen(false)}
                className={mobileNavItemClasses}
              >
                {t(`navbar.${link.label}`)}
              </NavLink>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}