import { InnerPageHeroBlock } from "../components/blocks/InnerPageHeroBlock";
import { InquiryFormBlock } from "../components/blocks/InquiryFormBlock";

export default function ContactPage() {
  return (
    <main className="flex flex-col w-full bg-white relative">
      <InnerPageHeroBlock 
        title="Corporate Communications"
        description="Connect directly with our specialized logistics teams and corporate trading desks. We maintain continuous operational readiness across all major maritime and financial time zones."
        image="https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=2000" 
      />
      
      <InquiryFormBlock />
      
    </main>
  );
}