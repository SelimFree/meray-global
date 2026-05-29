import { Heading } from '../ui/Heading';
import { Text } from '../ui/Text';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { Image } from '../ui/Image';
import { Link } from 'react-router-dom';

export const HeroBlock = () => {
  return (
    <section className="relative w-full bg-neutral-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-24 flex flex-col lg:flex-row items-center gap-12">
        
        {/* Left Column: Content */}
        <div className="w-full lg:w-1/2 flex flex-col items-start z-10">
          
          {/* Trust Indicators */}
          <div className="flex flex-wrap gap-2 mb-6">
            <Badge variant="success">Live Market Trading</Badge>
            <Badge variant="default">ISO 9001 Certified</Badge>
          </div>

          <Heading level={1} className="text-white text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
            Energizing the Global Economy.
          </Heading>
          
          <Text className="text-neutral-300 text-base sm:text-lg lg:text-xl mb-8 leading-relaxed max-w-2xl">
            Connecting producers and consumers of vital petrochemicals reliably, efficiently, and responsibly across global markets. We manage the physical movement of energy worldwide.
          </Text>
          
          {/* Action Buttons */}
          <div className="w-full flex flex-col sm:flex-row gap-4">
            <Link to="/products" className="w-full sm:w-auto">
              <Button variant="default" size="lg" className="w-full">
                Explore Commodities
              </Button>
            </Link>
            <Link to="/contact" className="w-full sm:w-auto">
              <Button variant="outline" size="lg" className="w-full text-white border-neutral-600 hover:bg-neutral-800">
                Contact Trading Desk
              </Button>
            </Link>
          </div>
        </div>

        {/* Right Column: Visual */}
        <div className="w-full lg:w-1/2 h-100 sm:h-125 lg:h-150 relative rounded-xl overflow-hidden shadow-2xl">
           <Image 
             src="/images/global-logistics-vessel.jpg" 
             alt="Massive trading vessel navigating the ocean at dusk" 
             className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
             loading="eager"
           />
           {/* Subtle gradient overlay to blend the image into the dark background */}
           <div className="absolute inset-0 bg-linear-to-t from-neutral-900/80 via-transparent to-transparent lg:bg-linear-to-r" />
        </div>

      </div>
    </section>
  );
};