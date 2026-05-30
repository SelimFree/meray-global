import { InnerPageHeroBlock } from "../components/blocks/InnerPageHeroBlock";
import { InquiryFormBlock } from "../components/blocks/InquiryFormBlock";
import ContactHeading from "../assets/contact/contact_heading.png";

export default function ContactPage() {
  return (
    <main className="flex flex-col w-full bg-white relative">
      <InnerPageHeroBlock 
        title="Corporate Communications"
        description="Connect directly with our specialized logistics teams and corporate trading desks. We maintain continuous operational readiness across all major maritime and financial time zones."
        image={ContactHeading}
      />
      
      <InquiryFormBlock />
      
    </main>
  );
}