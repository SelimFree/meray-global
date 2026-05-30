import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowRight } from 'lucide-react';
import { Heading } from '../ui/Heading';
import { Text } from '../ui/Text';
import { Image } from '../ui/Image';
import Product1 from "../../assets/products/product_1.png"
import Product2 from "../../assets/products/product_2.png"
import Product3 from "../../assets/products/product_3.png"

export const ProductPreviewBlock = () => {
  const { t } = useTranslation("home");

  const products = [
    {
      id: 'petroleum-products',
      image: Product1,
      tKey: 'petroleum'
    },
    {
      id: 'fertilizers',
      image: Product2,
      tKey: 'fertilizers'
    },
    {
      id: 'chemicals',
      image: Product3,
      tKey: 'chemicals'
    },
  ];

  return (
    <section className="w-full bg-gray-50 py-24 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-4 mb-4">
              <div className="h-0.5 w-8 bg-secondary" />
              <Text className="text-xs font-bold tracking-[0.2em] text-gray-500 uppercase">
                {t("productPreviewBlock.subtitle")}
              </Text>
            </div>
            <Heading level={2} className="text-4xl md:text-5xl font-extrabold text-primary-900 tracking-tight">
              {t("productPreviewBlock.title")}
            </Heading>
            <Text className="text-gray-600 mt-6 text-sm md:text-base leading-relaxed text-justify">
              {t("productPreviewBlock.description")}
            </Text>
          </div>

          <Link to="/products" className="shrink-0 group">
            <button className="flex items-center gap-3 border border-gray-300 bg-white px-6 py-3 text-xs font-bold tracking-widest text-primary-900 uppercase transition-all hover:border-primary-900 hover:bg-primary-900 hover:text-white">
              {t("productPreviewBlock.buttonViewAll")}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative flex flex-col bg-white border border-gray-200 shadow-sm transition-all duration-500 hover:shadow-xl hover:-translate-y-1"
            >

              <div className="relative h-64 w-full overflow-hidden bg-primary-900">
                <Image
                  src={product.image}
                  alt={t(`productPreviewBlock.products.${product.tKey}.title`)}
                  containerClassName="w-full h-full"
                  className="opacity-90 transition-transform duration-700 ease-out group-hover:scale-105 group-hover:opacity-100"
                />
                
                <div className="absolute top-0 left-0 bg-primary-900 px-4 py-2 z-10">
                  <span className="text-[10px] font-bold tracking-widest text-white uppercase">
                    {t(`productPreviewBlock.products.${product.tKey}.tag`)}
                  </span>
                </div>
              </div>

              <div className="flex flex-col grow p-8">
                <Heading level={3} className="text-2xl font-bold text-primary-900 mb-4 tracking-tight">
                  {t(`productPreviewBlock.products.${product.tKey}.title`)}
                </Heading>
                <Text className="text-sm text-gray-600 mb-8 leading-relaxed grow text-justify">
                  {t(`productPreviewBlock.products.${product.tKey}.description`)}
                </Text>

                <Link
                  to={`/products#${product.id}`}
                  className="mt-auto flex items-center text-xs font-bold tracking-widest text-primary-800 uppercase transition-colors hover:text-secondary"
                >
                  {t("productPreviewBlock.buttonExplore")}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>

              <div className="absolute bottom-0 left-0 h-1 w-0 bg-secondary transition-all duration-500 ease-out group-hover:w-full" />

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};