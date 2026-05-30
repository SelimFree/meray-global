import { InnerPageHeroBlock } from "../components/blocks/InnerPageHeroBlock";
import { ProductsNavBlock } from "../components/blocks/ProductsNavBlock";
import { ProductCategoryBlock } from "../components/blocks/ProductCategoryBlock";

const chemicalProductsData = [
    { name: "Methanol", grade: "99.85% IMPCA", packaging: "Bulk Vessel / Iso-Tank", spec: "GLOBAL-01" },
    { name: "Toluene", grade: "Nitration Grade", packaging: "Bulk Vessel", spec: "EMEA-04" },
    { name: "Xylene (Mixed)", grade: "Isomer Grade", packaging: "Bulk Vessel", spec: "APAC-02" },
    { name: "Styrene Monomer", grade: "99.8% Min", packaging: "Bulk Vessel", spec: "AMER-08" },
    { name: "Monoethylene Glycol", grade: "Fiber Grade", packaging: "Bulk / Drums", spec: "EMEA-12" }
];

const plasticProductsData = [
    { name: "Polypropylene (PP)", grade: "Homopolymer", packaging: "25kg Bags / Jumbo", spec: "GLOBAL-14" },
    { name: "High-Density PE", grade: "Blow Molding", packaging: "25kg Bags / Bulk", spec: "GLOBAL-18" },
    { name: "Low-Density PE", grade: "Film Grade", packaging: "25kg Bags", spec: "EMEA-22" },
    { name: "Polyvinyl Chloride", grade: "Suspension (K67)", packaging: "25kg Bags", spec: "APAC-11" },
    { name: "Polystyrene (GPPS)", grade: "Injection", packaging: "25kg Bags / Octabins", spec: "AMER-03" }
];

const rawMaterialsData = [
    { name: "Urea", grade: "Prilled / Granular 46%", packaging: "Bulk Vessel / 50kg", spec: "GLOBAL-44" },
    { name: "Sulphur", grade: "Granular / Crushed", packaging: "Bulk Vessel", spec: "EMEA-31" },
    { name: "Petroleum Coke", grade: "Fuel / Calcined", packaging: "Bulk Vessel", spec: "AMER-19" },
    { name: "Bitumen", grade: "Penetration 60/70", packaging: "Bulk Vessel / Drums", spec: "GLOBAL-08" }
];

export default function ProductsPage() {
    return (
        <main className="flex flex-col w-full bg-white relative">
            <InnerPageHeroBlock
                title="Commodities Portfolio"
                description="Global sourcing and distribution of petrochemicals, thermoplastics, and vital raw materials. We provide our partners with uninterrupted supply chain stability and precise quality control."
                image="https://images.pexels.com/photos/163726/belgium-antwerp-shipping-container-163726.jpeg?auto=compress&cs=tinysrgb&w=2000"
            />

            <ProductsNavBlock />

            <ProductCategoryBlock
                id="chemicals"
                category="Chemicals"
                title="Aromatics & Solvents"
                description="Sourcing high-purity industrial chemicals for manufacturing, agricultural, and refining sectors globally. Our bulk liquid logistics network ensures zero-contamination transit."
                image="https://images.pexels.com/photos/257775/pexels-photo-257775.jpeg?auto=compress&cs=tinysrgb&w=1200" // Chemical Piping/Refinery
                products={chemicalProductsData}
            />

            <ProductCategoryBlock
                id="plastics"
                category="Plastics"
                title="Thermoplastic Resins"
                description="Supplying premium polymer grades optimized for injection molding, extrusion, and advanced packaging solutions. We maintain strategic buffer stock at major global hubs."
                image="https://images.pexels.com/photos/2246476/pexels-photo-2246476.jpeg?auto=compress&cs=tinysrgb&w=1200"
                products={plasticProductsData}
                isReversed={true}
            />

            <ProductCategoryBlock
                id="materials"
                category="Raw Materials"
                title="Agricultural & Base Materials"
                description="Delivering essential foundational materials to support large-scale industrial and agricultural infrastructure, managed via highly optimized dry bulk freight operations."
                image="https://images.pexels.com/photos/2101147/pexels-photo-2101147.jpeg?auto=compress&cs=tinysrgb&w=1200" // Heavy machinery / Dry Bulk Mining
                products={rawMaterialsData}
            />
        </main>
    );
}