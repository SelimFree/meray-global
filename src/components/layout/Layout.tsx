import { type ComponentProps, Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { Loading } from "../ui/Loading";
import { cn } from "../../lib/utils";
import ScrollToTop from "../utils/ScrollToTop";
import { BackToTop } from "../ui/BackToTop";
import { CookieBanner } from "../ui/CookieBanner";
import { Breadcrumbs } from "../ui/Breadcrumbs";

export type NavLinkItem = {
  label: string;
  href: string;
};

const globalNavLinks: NavLinkItem[] = [
  { label: "home", href: "/" }
];

export function Layout({ className, ref, ...props }: ComponentProps<"div">) {
  return (
    <div ref={ref} className={cn("flex min-h-screen flex-col", className)} {...props}>
      <ScrollToTop />
      <Navbar links={globalNavLinks} />

      <main className="grow relative">
        <Breadcrumbs />
        <Suspense fallback={<Loading />}>
          <Outlet />
        </Suspense>
      </main>

      <BackToTop />
      <CookieBanner />
      <Footer links={globalNavLinks} />
    </div>
  );
}