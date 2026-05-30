import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { InnerPageHeroBlock } from "../components/blocks/InnerPageHeroBlock";
import { ProductsNavBlock } from "../components/blocks/ProductsNavBlock";
import { ProductCategoryBlock } from "../components/blocks/ProductCategoryBlock";
import ProductsHeading from "../assets/products/products_heading.png";

const petroleumFuelsData = [
    { name: "Ultra-Low Sulfur Diesel", grade: "ULSD 10ppm (EN 590)", packaging: "Bulk Vessel / Rail Tanker", spec: "EN-590" },
    { name: "Diesel", grade: "Automotive / Industrial Grade", packaging: "Bulk Vessel / Pipeline", spec: "D-2 / GOST" },
    { name: "Jet Fuel (A1)", grade: "Aviation Grade", packaging: "Pipeline / Bulk Vessel", spec: "DEF STAN 91-091" },
    { name: "Gasoil", grade: "0.1% Sulphur", packaging: "Bulk Vessel", spec: "GAS-01" }
];

const petroleumHeavyData = [
    { name: "Fuel Oil (Mazut)", grade: "CST 180 / 380", packaging: "Bulk Vessel", spec: "GOST-10585" },
    { name: "Bitumen", grade: "Penetration 60/70", packaging: "Bulk Vessel / Drums", spec: "BIT-6070" },
    { name: "Petroleum Coke", grade: "Fuel Grade / Calcined", packaging: "Bulk Vessel", spec: "PETCOKE-F" }
];

const chemicalPolymersData = [
    { name: "Polypropylene (PP)", grade: "Homopolymer / Copolymer", packaging: "25kg Bags / Jumbo", spec: "PP-H / PP-C" },
    { name: "Poleethilen", grade: "Standard Thermoplastic", packaging: "25kg Bags / Octabins", spec: "PE-STD" },
    { name: "High-Density PE (HDPE)", grade: "Blow Molding / Extrusion", packaging: "25kg Bags / Bulk", spec: "PE-HD" },
    { name: "Low-Density PE (LDPE)", grade: "Film Grade", packaging: "25kg Bags", spec: "PE-LD" },
    { name: "Polyvinyl Chloride (PVC)", grade: "Suspension Grade (K67)", packaging: "25kg Bags / Jumbo", spec: "PVC-S" },
    { name: "PET Resin", grade: "Bottle Grade (IV 0.80)", packaging: "Jumbo Bags", spec: "PET-BG" }
];

const chemicalAromaticsData = [
    { name: "Methanol", grade: "99.85% IMPCA", packaging: "Bulk Vessel / Iso-Tank", spec: "METH-99" },
    { name: "Toluene", grade: "Nitration Grade", packaging: "Bulk Vessel", spec: "TOL-NG" },
    { name: "Xylene (Mixed)", grade: "Isomer Grade", packaging: "Bulk Vessel", spec: "XYL-MIX" },
    { name: "Styrene Monomer", grade: "99.8% Min", packaging: "Bulk Vessel", spec: "SM-998" },
    { name: "Monoethylene Glycol", grade: "Fiber Grade", packaging: "Bulk / Drums", spec: "MEG-FG" }
];

const fertilizerNitrogenData = [
    { name: "Urea", grade: "Prilled / Granular 46% N", packaging: "Bulk / 50kg Bags / Jumbo", spec: "UREA-46" },
    { name: "Ammonium Nitrate", grade: "Agricultural Grade 34% N", packaging: "Bulk / 50kg Bags", spec: "AN-34" },
    { name: "Ammonia", grade: "Anhydrous 99.5%", packaging: "Pressurized Vessel", spec: "NH3-ANH" }
];

const fertilizerPhosphateData = [
    { name: "Diammonium Phosphate", grade: "18-46-0 (DAP)", packaging: "Bulk Vessel", spec: "DAP-18" },
    { name: "Monoammonium Phosphate", grade: "11-52-0 (MAP)", packaging: "Bulk Vessel", spec: "MAP-11" },
    { name: "Sulphur", grade: "Granular / Crushed", packaging: "Bulk Vessel", spec: "SUL-99" }
];

export default function ProductsPage() {
    const location = useLocation();

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
                title="Commodities Portfolio"
                description="Global sourcing and distribution of petrochemicals, thermoplastics, and vital raw materials. We provide our partners with uninterrupted supply chain stability and precise quality control."
                image={ProductsHeading}
            />

            <ProductsNavBlock />

            <ProductCategoryBlock
                id="petroleum-products"
                category="Petroleum products"
                title="Refined Fuels & Distillates"
                description="Reliable distribution of high-demand refined petroleum products, including Ultra-Low Sulfur Diesel, Gasoil, and Aviation Jet Fuel. We secure consistent energy supply chains for industrial centers across Eurasia and the MENA region."
                image="https://images.unsplash.com/photo-1516937941344-00b4e0337589?q=80&w=1200&auto=format&fit=crop" // Industrial Refinery
                products={petroleumFuelsData}
                isReversed={false}
            />

            <ProductCategoryBlock
                id="petroleum-heavy"
                category="Petroleum products"
                title="Heavy Feedstocks & Residues"
                description="Sourcing and maritime transport of downstream heavy residues, including Fuel Oil and Bitumen, engineered to support heavy civil infrastructure, marine bunkering, and specialized industrial manufacturing."
                image="https://images.unsplash.com/photo-1581094288338-2314dddb7ece?q=80&w=1200&auto=format&fit=crop" // Dark steel / Heavy Industry
                products={petroleumHeavyData}
                isReversed={true}
            />

            <ProductCategoryBlock
                id="chemicals"
                category="Chemicals"
                title="Polymers & Industrial Plastics"
                description="Supplying high-quality resins including Polyethylene (PE) and Polypropylene (PP) for advanced industrial and consumer manufacturing. We maintain strategic buffer stock to navigate volatile market demands and ensure seamless production."
                image="https://images.unsplash.com/photo-1586528116311-ad8ed745eb33?q=80&w=1200&auto=format&fit=crop" // Clean Warehouse / Pallets
                products={chemicalPolymersData}
                isReversed={false}
            />

            <ProductCategoryBlock
                id="chemicals-aromatics"
                category="Chemicals"
                title="Aromatics & Solvents"
                description="Sourcing high-purity industrial chemicals for global agricultural and chemical synthesis sectors. Our specialized bulk liquid logistics network ensures zero-contamination transit from terminal to destination."
                image="https://images.unsplash.com/photo-1542137722-1d59d1862105?q=80&w=1200&auto=format&fit=crop" // Chemical piping / valves
                products={chemicalAromaticsData}
                isReversed={true}
            />

            <ProductCategoryBlock
                id="fertilizers"
                category="Fertilizers"
                title="Nitrogen Base Nutrients"
                description="Large-scale supply of foundational agricultural chemicals, including Urea and Ammonium Nitrate. Our multi-modal logistics network integrates rail, maritime, and road freight to ensure on-time delivery for the global agricultural sector."
                image="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=1200&auto=format&fit=crop" // Large scale agriculture / farming
                products={fertilizerNitrogenData}
                isReversed={false}
            />

            <ProductCategoryBlock
                id="fertilizers-phosphates"
                category="Fertilizers"
                title="Phosphates & Sulphur"
                description="Distribution of essential granular and crushed minerals vital for crop yield optimization and industrial acid production. We manage extensive dry bulk freight operations capable of executing high-tonnage contracts globally."
                image="https://images.unsplash.com/photo-1592982537447-6f2a6a0c6c13?q=80&w=1200&auto=format&fit=crop" // Dry bulk / mining earth
                products={fertilizerPhosphateData}
                isReversed={true}
            />
        </main>
    );
}