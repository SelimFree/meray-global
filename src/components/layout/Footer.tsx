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
      className={cn("bg-primary border-t border-gray-200", className)}
      {...props}
    >
      <div className="mx-auto max-w-8xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 lg:gap-12">

          <div className="md:col-span-2">
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
            <Text variant="muted" className="mt-4 text-white md:text-lg">
              {t("footer.slogan")}
            </Text>
          </div>

          <div className="md:col-start-4 md:text-right uppercase">
            <Text className="mb-4 font-semibold text-white md:text-xl">{t("footer.quickLinks")}</Text>

            <List className="grid grid-cols-1 gap-x-8 gap-y-3 space-y-0">
              {links.map((link) => (
                <ListItem key={link.href} icon={null} className="p-0 md:justify-end">
                  <Link to={link.href} className="text-white/60 text-md hover:text-white transition-colors inline-block w-full md:text-lg">
                    {t(`navbar.${link.label}`)}
                  </Link>
                </ListItem>
              ))}
            </List>
          </div>

          <div className="md:text-right uppercase">
            <Text className="mb-4 font-semibold text-white md:text-xl">{t("footer.legal")}</Text>
            <List className="space-y-3">
              <ListItem icon={null} className="p-0 md:justify-end">
                <Link to="/privacy" className="text-white/60 text-md hover:text-white md:text-lg">{t("footer.privacy")}</Link>
              </ListItem>
              <ListItem icon={null} className="p-0 md:justify-end">
                <Link to="/terms" className="text-white/60 text-md hover:text-white md:text-lg">{t("footer.terms")}</Link>
              </ListItem>
              <ListItem icon={null} className="p-0 md:justify-end">
                <Link to="/cookies" className="text-white/60 text-md hover:text-white md:text-lg">{t("footer.cookie")}</Link>
              </ListItem>
            </List>
          </div>

        </div>

        <div className="mt-12 flex flex-col md:flex-row items-center justify-between gap-4 pt-8">
          <Text variant="muted" className="text-sm uppercase">
            {t("footer.rights", { year: new Date().getFullYear(), company: companyName })}
          </Text>
        </div>
      </div>
    </footer>
  );
}