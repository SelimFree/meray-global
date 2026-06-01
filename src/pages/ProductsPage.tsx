import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { InnerPageHeroBlock } from "../components/blocks/InnerPageHeroBlock";
import { ProductsNavBlock } from "../components/blocks/ProductsNavBlock";
import { ProductCategoryBlock } from "../components/blocks/ProductCategoryBlock";
import ProductsHeading from "../assets/products/products_heading.png";
import DetailedProducts1 from "../assets/products/detailed_products_1.png";
import DetailedProducts2 from "../assets/products/detailed_products_2.png";
import DetailedProducts3 from "../assets/products/detailed_products_3.png";
import DetailedProducts4 from "../assets/products/detailed_products_4.png";
import DetailedProducts5 from "../assets/products/detailed_products_5.png";
import DetailedProducts6 from "../assets/products/detailed_products_6.png";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

const petroleumFuelsKeys = ["ulsd", "diesel", "jetFuel", "gasoil"];
const petroleumHeavyKeys = ["mazut", "bitumen", "petcoke"];
const chemicalPolymersKeys = ["pp", "peStd", "hdpe", "ldpe", "pvc", "pet"];
const chemicalAromaticsKeys = ["methanol", "toluene", "xylene", "styrene", "meg"];
const fertilizerNitrogenKeys = ["urea", "ammoniumNitrate", "ammonia"];
const fertilizerPhosphateKeys = ["dap", "map", "sulphur"];

export default function ProductsPage() {
    const location = useLocation();
    const { t } = useTranslation("products");

    const { t: tCommon } = useTranslation("common");
    useDocumentTitle(tCommon("navbar.products"));


    const petroleumFuelsData = petroleumFuelsKeys.map(key => ({
        name: t(`categories.petroleumFuels.items.${key}.name`),
        grade: t(`categories.petroleumFuels.items.${key}.grade`),
        packaging: t(`categories.petroleumFuels.items.${key}.packaging`),
        spec: t(`categories.petroleumFuels.items.${key}.spec`),
    }));

    const petroleumHeavyData = petroleumHeavyKeys.map(key => ({
        name: t(`categories.petroleumHeavy.items.${key}.name`),
        grade: t(`categories.petroleumHeavy.items.${key}.grade`),
        packaging: t(`categories.petroleumHeavy.items.${key}.packaging`),
        spec: t(`categories.petroleumHeavy.items.${key}.spec`),
    }));

    const chemicalPolymersData = chemicalPolymersKeys.map(key => ({
        name: t(`categories.chemicalPolymers.items.${key}.name`),
        grade: t(`categories.chemicalPolymers.items.${key}.grade`),
        packaging: t(`categories.chemicalPolymers.items.${key}.packaging`),
        spec: t(`categories.chemicalPolymers.items.${key}.spec`),
    }));

    const chemicalAromaticsData = chemicalAromaticsKeys.map(key => ({
        name: t(`categories.chemicalAromatics.items.${key}.name`),
        grade: t(`categories.chemicalAromatics.items.${key}.grade`),
        packaging: t(`categories.chemicalAromatics.items.${key}.packaging`),
        spec: t(`categories.chemicalAromatics.items.${key}.spec`),
    }));

    const fertilizerNitrogenData = fertilizerNitrogenKeys.map(key => ({
        name: t(`categories.fertilizerNitrogen.items.${key}.name`),
        grade: t(`categories.fertilizerNitrogen.items.${key}.grade`),
        packaging: t(`categories.fertilizerNitrogen.items.${key}.packaging`),
        spec: t(`categories.fertilizerNitrogen.items.${key}.spec`),
    }));

    const fertilizerPhosphateData = fertilizerPhosphateKeys.map(key => ({
        name: t(`categories.fertilizerPhosphate.items.${key}.name`),
        grade: t(`categories.fertilizerPhosphate.items.${key}.grade`),
        packaging: t(`categories.fertilizerPhosphate.items.${key}.packaging`),
        spec: t(`categories.fertilizerPhosphate.items.${key}.spec`),
    }));

    useEffect(() => {
        if (location.hash) {
            const timer = setTimeout(() => {
                const id = location.hash.replace('#', '');
                const element = document.getElementById(id);
                if (element) {
                    const offsetTop = element.getBoundingClientRect().top + window.scrollY - 80;
                    window.scrollTo({ top: offsetTop, behavior: 'smooth' });
                }
            }, 100);
            return () => clearTimeout(timer);
        } else {
            window.scrollTo(0, 0);
        }
    }, [location]);

    return (
        <main className="flex flex-col w-full bg-white relative">
            <InnerPageHeroBlock
                title={t("heroBlock.title")}
                description={t("heroBlock.description")}
                image={ProductsHeading}
            />

            <ProductsNavBlock />

            <ProductCategoryBlock
                id="petroleum-products"
                category={t("categories.petroleumFuels.category")}
                title={t("categories.petroleumFuels.title")}
                description={t("categories.petroleumFuels.description")}
                image={DetailedProducts1}
                products={petroleumFuelsData}
                isReversed={false}
            />

            <ProductCategoryBlock
                id="petroleum-heavy"
                category={t("categories.petroleumHeavy.category")}
                title={t("categories.petroleumHeavy.title")}
                description={t("categories.petroleumHeavy.description")}
                image={DetailedProducts2}
                products={petroleumHeavyData}
                isReversed={true}
            />

            <ProductCategoryBlock
                id="chemicals"
                category={t("categories.chemicalPolymers.category")}
                title={t("categories.chemicalPolymers.title")}
                description={t("categories.chemicalPolymers.description")}
                image={DetailedProducts3}
                products={chemicalPolymersData}
                isReversed={false}
            />

            <ProductCategoryBlock
                id="chemicals-aromatics"
                category={t("categories.chemicalAromatics.category")}
                title={t("categories.chemicalAromatics.title")}
                description={t("categories.chemicalAromatics.description")}
                image={DetailedProducts4}
                products={chemicalAromaticsData}
                isReversed={true}
            />

            <ProductCategoryBlock
                id="fertilizers"
                category={t("categories.fertilizerNitrogen.category")}
                title={t("categories.fertilizerNitrogen.title")}
                description={t("categories.fertilizerNitrogen.description")}
                image={DetailedProducts5}
                products={fertilizerNitrogenData}
                isReversed={false}
            />

            <ProductCategoryBlock
                id="fertilizers-phosphates"
                category={t("categories.fertilizerPhosphate.category")}
                title={t("categories.fertilizerPhosphate.title")}
                description={t("categories.fertilizerPhosphate.description")}
                image={DetailedProducts6}
                products={fertilizerPhosphateData}
                isReversed={true}
            />
        </main>
    );
}