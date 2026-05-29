// src/components/blocks/ContactTeaser.tsx
import { Heading } from '../ui/Heading';
import { Text } from '../ui/Text';
import { Input } from '../ui/Input';
import { Label } from '../ui/Label';
import { Textarea } from '../ui/Textarea';
import { Button } from '../ui/Button';

export const ContactTeaserBlock = () => {
  return (
    <section className="w-full bg-neutral-900 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-12 lg:gap-24">
        
        {/* Text/Info Side */}
        <div className="w-full lg:w-5/12 flex flex-col justify-center">
          <Heading level={2} className="text-white text-3xl md:text-4xl font-bold mb-6">
            Initiate a Trade Inquiry
          </Heading>
          <Text className="text-neutral-400 text-lg mb-8">
            Connect directly with our global trading desks. Whether you are looking to secure supply or optimize your downstream logistics, our team is ready to structure a solution.
          </Text>
          
          <div className="space-y-4">
            <div>
              <Text className="text-neutral-500 text-sm font-semibold uppercase tracking-wider mb-1">Geneva Desk</Text>
              <Text className="text-white">+41 22 123 4567</Text>
            </div>
            <div>
              <Text className="text-neutral-500 text-sm font-semibold uppercase tracking-wider mb-1">Singapore Desk</Text>
              <Text className="text-white">+65 6789 0123</Text>
            </div>
          </div>
        </div>

        {/* Form Side */}
        <div className="w-full lg:w-7/12 bg-white rounded-xl p-6 sm:p-8 md:p-10 shadow-2xl">
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input id="firstName" placeholder="e.g. Jane" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input id="lastName" placeholder="e.g. Doe" required />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="company">Company Name</Label>
              <Input id="company" placeholder="e.g. Global Energy Corp" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Corporate Email</Label>
              <Input id="email" type="email" placeholder="jane.doe@company.com" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Inquiry Details</Label>
              <Textarea 
                id="message" 
                placeholder="Specify the commodities, volumes, or logistics requirements..." 
                rows={4} 
                required 
              />
            </div>

            <Button type="submit" variant="default" size="lg" className="w-full">
              Submit Inquiry
            </Button>
            
            <Text className="text-xs text-neutral-500 text-center mt-4">
              Your data is secured and processed in accordance with our corporate privacy policy.
            </Text>
          </form>
        </div>

      </div>
    </section>
  );
};