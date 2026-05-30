import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Heading } from '../ui/Heading';
import { Text } from '../ui/Text';
import { Image } from '../ui/Image';
import { cn } from '../../lib/utils';

export interface ProductItem {
    name: string;
    grade: string;
    packaging: string;
    spec: string;
}

interface ProductCategoryBlockProps {
    id: string;
    category: string;
    title: string;
    description: string;
    image: string;
    products: ProductItem[];
    isReversed?: boolean;
}

export const ProductCategoryBlock = ({
    id,
    category,
    title,
    description,
    image,
    products,
    isReversed = false
}: ProductCategoryBlockProps) => {
    const { t } = useTranslation("products");
    const imgRef = useRef<HTMLImageElement>(null);
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const section = sectionRef.current;
        const img = imgRef.current;
        if (!section || !img) return;

        const handleScroll = () => {
            const { top, height } = section.getBoundingClientRect();
            const viewportHeight = window.innerHeight;

            if (top > viewportHeight || top + height < 0) return;

            const elementCenter = top + height / 2;
            const viewportCenter = viewportHeight / 2;
            const centerOffset = viewportCenter - elementCenter;

            const shift = centerOffset * 0.15;

            img.style.transform = `translate3d(0, ${shift}px, 0)`;
        };

        handleScroll();

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section
            id={id}
            ref={sectionRef}
            className="w-full py-20 lg:py-32 border-b border-gray-200 bg-white scroll-mt-16 overflow-hidden"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">

                    <div className={cn(
                        "lg:col-span-7 flex flex-col justify-center order-2",
                        isReversed ? "lg:order-1" : "lg:order-2"
                    )}>

                        <div className="mb-12">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="h-0.5 w-8 bg-secondary" />
                                <Text className="text-xs font-bold tracking-[0.2em] text-gray-500 uppercase">
                                    {category}
                                </Text>
                            </div>

                            <Heading level={2} className="text-3xl md:text-4xl font-extrabold text-primary-900 tracking-tight mb-6">
                                {title}
                            </Heading>

                            <Text className="text-gray-600 text-sm md:text-base leading-relaxed text-justify">
                                {description}
                            </Text>
                        </div>

                        <div className="w-full overflow-x-auto border border-gray-200 bg-white">
                            <div className="min-w-150">
                                <div className="grid grid-cols-12 gap-4 px-6 py-4 bg-gray-50 border-b border-gray-200">
                                    <span className="col-span-4 text-[10px] font-bold tracking-widest text-gray-500 uppercase">
                                        {t("productCategoryBlock.tableHeaders.product")}
                                    </span>
                                    <span className="col-span-3 text-[10px] font-bold tracking-widest text-gray-500 uppercase">
                                        {t("productCategoryBlock.tableHeaders.grade")}
                                    </span>
                                    <span className="col-span-3 text-[10px] font-bold tracking-widest text-gray-500 uppercase">
                                        {t("productCategoryBlock.tableHeaders.packaging")}
                                    </span>
                                    <span className="col-span-2 text-[10px] font-bold tracking-widest text-gray-500 uppercase text-right">
                                        {t("productCategoryBlock.tableHeaders.spec")}
                                    </span>
                                </div>

                                <div className="flex flex-col">
                                    {products.map((product, index) => (
                                        <div
                                            key={index}
                                            className="grid grid-cols-12 gap-4 px-6 py-4 border-b border-gray-100 last:border-b-0 hover:bg-gray-50 transition-colors group cursor-default"
                                        >
                                            <div className="col-span-4 flex items-center gap-3">
                                                <div className="h-1.5 w-1.5 bg-secondary opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                                                <span className="text-xs font-bold tracking-tight text-primary-900 uppercase">
                                                    {product.name}
                                                </span>
                                            </div>
                                            <div className="col-span-3 flex items-center">
                                                <span className="text-[10px] sm:text-xs font-mono text-gray-600">
                                                    {product.grade}
                                                </span>
                                            </div>
                                            <div className="col-span-3 flex items-center">
                                                <span className="text-[10px] sm:text-xs font-medium text-gray-600 uppercase tracking-wider">
                                                    {product.packaging}
                                                </span>
                                            </div>
                                            <div className="col-span-2 flex items-center justify-end">
                                                <span className="text-[10px] font-mono text-gray-400 group-hover:text-primary-900 transition-colors">
                                                    {product.spec}
                                                </span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={cn(
                        "lg:col-span-5 flex flex-col order-1",
                        isReversed ? "lg:order-2" : "lg:order-1"
                    )}>
                        <div className="relative w-full h-100 lg:h-full lg:min-h-150 overflow-hidden bg-primary-900 border border-gray-200 shadow-sm">
                            <Image
                                ref={imgRef}
                                src={image}
                                alt={title}
                                containerClassName="absolute inset-0 w-full h-full"
                                className="absolute top-[-15%] left-0 w-full h-[130%] object-cover will-change-transform"
                            />
                            <div className="absolute inset-0 bg-primary-900/10 mix-blend-multiply pointer-events-none" />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};