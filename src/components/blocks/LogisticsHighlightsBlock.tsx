// src/components/blocks/LogisticsHighlight.tsx
import { Heading } from '../ui/Heading';
import { Text } from '../ui/Text';
import { Image } from '../ui/Image';
import { Button } from '../ui/Button';
import { List } from '../ui/List'; // Assuming this takes children or an items array
import { Link } from 'react-router-dom';

export const LogisticsHighlightsBlock = () => {
  return (
    <section className="w-full bg-neutral-50 py-16 lg:py-24 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        
        {/* Visual Side */}
        <div className="w-full lg:w-1/2 order-2 lg:order-1 relative rounded-2xl overflow-hidden shadow-xl h-80 sm:h-96 lg:h-125">
          <Image 
            src="/images/storage-terminal.jpg" 
            alt="Petrochemical storage terminal infrastructure" 
            className="w-full h-full object-cover"
          />
          {/* Subtle overlay to enhance contrast if the image is too bright */}
          <div className="absolute inset-0 bg-neutral-900/10 mix-blend-multiply" />
        </div>

        {/* Content Side */}
        <div className="w-full lg:w-1/2 order-1 lg:order-2 flex flex-col items-start">
          <Heading level={2} className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
            Physical Infrastructure & Logistics
          </Heading>
          
          <Text className="text-neutral-600 text-lg mb-6 leading-relaxed">
            Trading isn't just about financial transactions; it's about physical movement. We own, operate, and lease a vast network of infrastructure to ensure your supply chain remains uninterrupted, no matter the market conditions.
          </Text>
          
          {/* Infrastructure Details */}
          <div className="mb-8 w-full">
            {/* If your List component accepts standard <li> children: */}
            <List className="space-y-3 text-neutral-700 font-medium">
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-neutral-900"></span>
                Strategic storage terminals across 3 major continents.
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-neutral-900"></span>
                Chartered fleet of over 50 deep-water vessels.
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-neutral-900"></span>
                Integrated blending facilities for customized crude grades.
              </li>
            </List>
          </div>

          <Link to="/about" className="w-full sm:w-auto">
            <Button variant="default" size="lg" className="w-full">
              Learn About Our Operations
            </Button>
          </Link>
        </div>
        
      </div>
    </section>
  );
};