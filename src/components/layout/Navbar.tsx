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
      "relative px-3 py-2 text-2xl font-bold uppercase transition-colors duration-300 text-white",
      "after:content-[''] after:absolute after:bottom-1 after:left-1/2 after:h-[2px] after:bg-white after:-translate-x-1/2 after:transition-all after:duration-300",
      isActive
        ? "after:w-[calc(100%-1.5rem)]"
        : "after:w-0 hover:after:w-[calc(100%-1.5rem)] hover:text-gray-200"
    );

  const mobileNavItemClasses = ({ isActive }: { isActive: boolean }) =>
    cn(
      "relative block w-fit px-3 py-2 text-base font-bold uppercase transition-colors duration-300 text-white",
      "after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:h-[2px] after:bg-white after:-translate-x-1/2 after:transition-all after:duration-300",
      isActive
        ? "after:w-[calc(100%-1.5rem)]"
        : "after:w-0 hover:after:w-[calc(100%-1.5rem)] hover:text-gray-200"
    );

  return (
    <header
      ref={ref}
      className={cn("sticky top-0 z-50 w-full bg-primary", className)}
      {...props}
    >
      <div className="flex items-center gap-8 justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-3 cursor-pointer outline-none py-3 group">
          <div className="shrink-0 transition-transform duration-300 group-hover:scale-105">
            <Image
              src="/android-chrome-512x512.png"
              aspectRatio="auto"
              alt={t("navbar.logoAlt")}
              className="h-20 md:h-25 object-contain"
              containerClassName="bg-transparent"
            />
          </div>
        </Link>

        <nav className="ml-auto hidden md:flex gap-1">
          {links.map((link) => (
            <NavLink key={link.href} to={link.href} className={navItemClasses}>
              {t(`navbar.${link.label}`)}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2 md:gap-4">
          <LanguageSwitcher />

          <Button
            variant="ghost"
            size="sm"
            className="md:hidden px-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="h-6 w-6 text-white" /> : <Menu className="h-6 w-6 text-white" />}
          </Button>
        </div>
      </div>

      <div
        className={cn(
          "md:hidden transition-all duration-300 ease-in-out bg-primary border-b border-gray-200 shadow-sm overflow-y-auto",
          isOpen ? "max-h-screen opacity-100 py-4" : "max-h-0 opacity-0 border-transparent py-0"
        )}
      >
        <nav className="flex flex-col space-y-1 px-4 sm:px-6">
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
    </header>
  );
}