import { type ComponentProps } from "react";
import { Link } from "react-router-dom";
import { cn } from "../../lib/utils";
import { Text } from "../ui/Text";
import { List, ListItem } from "../ui/List";
import type { NavLinkItem } from "./Layout";
import { Image } from "../ui/Image";
import { useTranslation } from "react-i18next";
import { useAppContext } from "../../context/AppContext";

export interface FooterProps extends ComponentProps<"footer"> {
  links: NavLinkItem[];
}

export function Footer({ links, className, ref, ...props }: FooterProps) {
  const { t } = useTranslation();
  const { companyName } = useAppContext();

  return (
    <footer
      ref={ref}
      className={cn("bg-primary border-t border-white/10", className)}
      {...props}
    >
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Adjusted grid: 2 columns on md (tablet) for wider text support, 5 on lg (desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">

          <div className="md:col-span-2 lg:col-span-2">
            <Link to="/" className="group flex cursor-pointer items-center outline-none">
              <div className="shrink-0 transition-opacity duration-300 group-hover:opacity-90">
                <Image
                  src="/android-chrome-512x512.png"
                  aspectRatio="auto"
                  alt={t("navbar.logoAlt", "Meray Global")}
                  className="h-24 object-contain md:h-40 brightness-0 invert"
                  containerClassName="bg-transparent"
                />
              </div>
            </Link>
            <Text
              variant="muted"
              className="max-w-sm text-sm leading-relaxed text-white/70 text-justify"
            >
              {t("footer.slogan")}
            </Text>
          </div>

          <div className="md:text-left lg:col-start-4 lg:text-right">
            {/* Added whitespace-nowrap to guarantee single-line titles across all languages */}
            <Text className="mb-6 text-xs font-bold tracking-widest text-white/90 uppercase whitespace-nowrap">
              {t("footer.quickLinks")}
            </Text>

            <List className="grid grid-cols-1 gap-y-4 space-y-0">
              {links.map((link) => (
                <ListItem key={link.href} icon={null} className="p-0 lg:justify-end">
                  <Link
                    to={link.href}
                    className="inline-block w-full text-sm font-medium text-white/60 transition-colors duration-300 hover:text-white"
                  >
                    {t(`navbar.${link.label}`)}
                  </Link>
                </ListItem>
              ))}
            </List>
          </div>

          <div className="md:text-left lg:text-right">
            {/* Added whitespace-nowrap */}
            <Text className="mb-6 text-xs font-bold tracking-widest text-white/90 uppercase whitespace-nowrap">
              {t("footer.legal")}
            </Text>

            <List className="space-y-4">
              <ListItem icon={null} className="p-0 lg:justify-end">
                <Link
                  to="/privacy"
                  className="inline-block w-full text-sm font-medium text-white/60 transition-colors duration-300 hover:text-white"
                >
                  {t("footer.privacy")}
                </Link>
              </ListItem>
              <ListItem icon={null} className="p-0 lg:justify-end">
                <Link
                  to="/terms"
                  className="inline-block w-full text-sm font-medium text-white/60 transition-colors duration-300 hover:text-white"
                >
                  {t("footer.terms")}
                </Link>
              </ListItem>
              <ListItem icon={null} className="p-0 lg:justify-end">
                <Link
                  to="/cookies"
                  className="inline-block w-full text-sm font-medium text-white/60 transition-colors duration-300 hover:text-white"
                >
                  {t("footer.cookie")}
                </Link>
              </ListItem>
            </List>
          </div>

        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 md:flex-row">
          <Text
            variant="muted"
            className="text-xs font-medium tracking-wider text-white/40 uppercase text-center md:text-left"
          >
            {t("footer.rights", { year: new Date().getFullYear(), company: companyName })}
          </Text>
        </div>
      </div>
    </footer>
  );
}