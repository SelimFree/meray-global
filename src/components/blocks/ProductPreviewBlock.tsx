import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Heading } from '../ui/Heading';
import { Text } from '../ui/Text';

export const ProductPreviewBlock = () => {
  const products = [
    {
      id: 'crude',
      title: 'Crude Oil',
      description: 'Global sourcing, blending, and supply of various crude grades to major refiners and industrial consumers.',
      image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?q=80&w=1200&auto=format&fit=crop',
      tag: 'High Volume'
    },
    {
      id: 'refined',
      title: 'Refined Products',
      description: 'Gasoline, middle distillates, and fuel oil distribution across strategic global industrial hubs.',
      // Complex industrial piping and infrastructure
      image: 'https://images.pexels.com/photos/257775/pexels-photo-257775.jpeg?auto=compress&cs=tinysrgb&w=1200',
      tag: 'Strategic'
    },
    {
      id: 'lng',
      title: 'Natural Gas & LNG',
      description: 'Bridging the energy transition with reliable, highly efficient global gas supply chains and maritime transport.',
      // Massive maritime shipping container vessel
      image: 'https://images.pexels.com/photos/799091/pexels-photo-799091.jpeg?auto=compress&cs=tinysrgb&w=1200',
      tag: 'Transition'
    }
  ];

  return (
    <section className="w-full bg-gray-50 py-24 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-4 mb-4">
              <div className="h-0.5 w-8 bg-secondary" />
              <Text className="text-xs font-bold tracking-[0.2em] text-gray-500 uppercase">
                Commodities Portfolio
              </Text>
            </div>
            <Heading level={2} className="text-4xl md:text-5xl font-extrabold text-primary-900 tracking-tight">
              Core Commodities
            </Heading>
            <Text className="text-gray-600 mt-6 text-sm md:text-base leading-relaxed">
              We leverage our physical infrastructure to source, store, and deliver energy products worldwide. Our intelligence-driven logistics network ensures uninterrupted global supply.
            </Text>
          </div>

          <Link to="/products" className="shrink-0 group">
            <button className="flex items-center gap-3 border border-gray-300 bg-white px-6 py-3 text-xs font-bold tracking-widest text-primary-900 uppercase transition-all hover:border-primary-900 hover:bg-primary-900 hover:text-white">
              View All Products
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
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover opacity-90 transition-transform duration-700 ease-out group-hover:scale-105 group-hover:opacity-100"
                  loading="lazy"
                />
                <div className="absolute top-0 left-0 bg-primary-900 px-4 py-2">
                  <span className="text-[10px] font-bold tracking-widest text-white uppercase">
                    {product.tag}
                  </span>
                </div>
              </div>

              <div className="flex flex-col grow p-8">
                <Heading level={3} className="text-2xl font-bold text-primary-900 mb-4 tracking-tight">
                  {product.title}
                </Heading>
                <Text className="text-sm text-gray-600 mb-8 leading-relaxed grow">
                  {product.description}
                </Text>

                <Link
                  to={`/products#${product.id}`}
                  className="mt-auto flex items-center text-xs font-bold tracking-widest text-primary-800 uppercase transition-colors hover:text-secondary"
                >
                  Explore Category
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