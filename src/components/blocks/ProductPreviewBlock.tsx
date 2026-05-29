import { Heading } from '../ui/Heading';
import { Text } from '../ui/Text';
import { Card } from '../ui/Card';
import { Image } from '../ui/Image';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { Link } from 'react-router-dom';

export const ProductPreviewBlock = () => {
  const products = [
    {
      id: 'crude',
      title: 'Crude Oil',
      description: 'Global sourcing, blending, and supply of various crude grades to major refiners.',
      image: '/images/crude-oil-terminal.jpg',
      tag: 'High Volume'
    },
    {
      id: 'refined',
      title: 'Refined Products',
      description: 'Gasoline, middle distillates, and fuel oil distribution across industrial hubs.',
      image: '/images/refined-products.jpg',
      tag: 'Strategic'
    },
    {
      id: 'lng',
      title: 'Natural Gas & LNG',
      description: 'Bridging the energy transition with reliable global gas supply chains.',
      image: '/images/lng-carrier.jpg',
      tag: 'Transition'
    }
  ];

  return (
    <section className="w-full bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <Heading level={2} className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Core Commodities
            </Heading>
            <Text className="text-neutral-600 text-base md:text-lg">
              We leverage our physical infrastructure to source, store, and deliver energy products worldwide, ensuring uninterrupted supply.
            </Text>
          </div>
          <Link to="/products" className="shrink-0 w-full md:w-auto">
            <Button variant="outline" className="w-full md:w-auto">
              View All Products
            </Button>
          </Link>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card key={product.id} className="flex flex-col overflow-hidden group border border-neutral-200">
              
              <div className="relative h-64 w-full overflow-hidden">
                <Image 
                  src={product.image} 
                  alt={product.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                />
                <div className="absolute top-4 right-4 z-10">
                  <Badge variant="default" className="bg-white/90 text-neutral-900 backdrop-blur-sm">
                    {product.tag}
                  </Badge>
                </div>
              </div>
              
              <div className="p-6 flex flex-col grow bg-white">
                <Heading level={3} className="text-xl font-bold text-neutral-900 mb-3">
                  {product.title}
                </Heading>
                <Text className="text-neutral-600 mb-8 grow">
                  {product.description}
                </Text>
                
                <Link to={`/products#${product.id}`} className="mt-auto">
                  <Button variant="default" className="w-full">
                    Learn More
                  </Button>
                </Link>
              </div>
              
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
};