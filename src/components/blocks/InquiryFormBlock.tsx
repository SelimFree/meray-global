import { useState, useRef } from "react";
import { Heading } from '../ui/Heading';
import { Text } from '../ui/Text';
import { Input } from '../ui/Input';
import { Label } from '../ui/Label';
import { Textarea } from '../ui/Textarea';
import { ArrowRight, ShieldCheck, CheckCircle2, Loader2, AlertCircle, X } from 'lucide-react';
import { useTranslation } from "react-i18next";

export const InquiryFormBlock = () => {
    const formRef = useRef<HTMLFormElement>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const { t, i18n } = useTranslation("contact");

    const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError(null);
        if (!formRef.current) return;

        setIsSubmitting(true);

        const formData = new FormData(formRef.current);
        const data = Object.fromEntries(formData.entries());

        const payload = {
            ...data,
            user_lang: i18n.language
        };

        try {
            const response = await fetch("/api/send", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload),
            });

            const result = await response.json();

            if (!response.ok || !result.success) {
                throw new Error(result.error || "Failed to send message");
            }

            setIsSubmitted(true);
            formRef.current.reset();
        } catch (err) {
            console.error(err);
            setError("contactBlock.errorMessage");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="w-full py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-16 lg:gap-24">

                {/* Left Side: Corporate Instructions */}
                <div className="w-full lg:w-5/12 flex flex-col justify-center">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="h-0.5 w-8 bg-secondary" />
                        <Text className="text-xs font-bold tracking-[0.2em] text-gray-500 uppercase">
                            Corporate Communications
                        </Text>
                    </div>

                    <Heading level={2} className="text-3xl md:text-4xl font-extrabold text-primary-900 tracking-tight mb-6">
                        Initiate a Trade Inquiry
                    </Heading>

                    <Text className="text-gray-600 text-sm md:text-base leading-relaxed mb-8">
                        Please provide specific details regarding your supply chain requirements. Inquiries regarding physical commodities, maritime chartering, and terminal logistics will be routed directly to the appropriate regional trading desk.
                    </Text>

                    <div className="flex items-start gap-4 p-6 bg-gray-50 border border-gray-200">
                        <ShieldCheck className="h-6 w-6 text-primary-900 shrink-0" />
                        <div>
                            <Text className="text-xs font-bold tracking-widest text-primary-900 uppercase mb-2">
                                Secure Transmission
                            </Text>
                            <Text className="text-xs text-gray-600 leading-relaxed">
                                All submitted data is encrypted and processed in strict adherence to international corporate privacy standards. We do not engage with unverified third-party brokers.
                            </Text>
                        </div>
                    </div>
                </div>

                {/* Right Side: Form & States */}
                <div className="w-full lg:w-7/12">
                    {!isSubmitted ? (
                        <form ref={formRef} className="space-y-6" onSubmit={handleSubmit}>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <Label htmlFor="firstName" className="text-[10px] font-bold tracking-widest text-gray-500 uppercase">First Name</Label>
                                    <Input id="firstName" name="firstName" placeholder="John" required className="rounded-none border-gray-300 focus:border-primary-900 focus:ring-primary-900" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="lastName" className="text-[10px] font-bold tracking-widest text-gray-500 uppercase">Last Name</Label>
                                    <Input id="lastName" name="lastName" placeholder="Doe" required className="rounded-none border-gray-300 focus:border-primary-900 focus:ring-primary-900" />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <Label htmlFor="company" className="text-[10px] font-bold tracking-widest text-gray-500 uppercase">Corporate Entity</Label>
                                    <Input id="company" name="company" placeholder="e.g. Global Energy Corp" required className="rounded-none border-gray-300 focus:border-primary-900 focus:ring-primary-900" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="email" className="text-[10px] font-bold tracking-widest text-gray-500 uppercase">Business Email</Label>
                                    <Input id="email" name="email" type="email" placeholder="john.doe@company.com" required className="rounded-none border-gray-300 focus:border-primary-900 focus:ring-primary-900" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="department" className="text-[10px] font-bold tracking-widest text-gray-500 uppercase">Routing Destination</Label>
                                <select
                                    id="department"
                                    name="department"
                                    className="flex h-10 w-full rounded-none border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-900 focus:border-transparent disabled:cursor-not-allowed disabled:opacity-50"
                                    required
                                    defaultValue=""
                                >
                                    <option value="" disabled>Select Department...</option>
                                    <option value="trading">Commodity Trading Desk</option>
                                    <option value="logistics">Maritime & Terminal Logistics</option>
                                    <option value="compliance">Risk & Compliance</option>
                                    <option value="media">Press & Media Relations</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="message" className="text-[10px] font-bold tracking-widest text-gray-500 uppercase">Inquiry Details</Label>
                                <Textarea
                                    id="message"
                                    name="message"
                                    placeholder="Specify target commodities, required volumes, or destination ports..."
                                    rows={5}
                                    required
                                    className="rounded-none border-gray-300 focus:border-primary-900 focus:ring-primary-900 resize-none"
                                />
                            </div>

                            {/* Raw Error Block (Replaces Callout) */}
                            {error && (
                                <div className="relative flex items-start gap-4 p-5 border-l-4 border-red-600 bg-red-50">
                                    <AlertCircle className="h-5 w-5 text-red-600 shrink-0 mt-0.5" />
                                    <div className="flex-1 pr-6">
                                        <Text className="text-xs font-bold tracking-widest text-red-900 uppercase mb-1">
                                            {t("contactBlock.errorTitle", "Transmission Error")}
                                        </Text>
                                        <Text className="text-xs text-red-800 leading-relaxed">
                                            {t(error)}
                                        </Text>
                                    </div>
                                    <button 
                                        type="button" 
                                        onClick={() => setError(null)}
                                        className="absolute top-5 right-5 text-red-400 hover:text-red-600 transition-colors"
                                    >
                                        <X className="h-4 w-4" />
                                    </button>
                                </div>
                            )}

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="group flex w-full sm:w-auto items-center justify-center gap-4 bg-primary-900 px-8 py-4 text-xs font-bold tracking-[0.2em] text-white uppercase transition-all duration-300 hover:bg-secondary hover:text-primary-900 border border-transparent rounded-none disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? (
                                    <>
                                        <Loader2 className="h-4 w-4 animate-spin" />
                                        {t("contactBlock.buttonSending", "Transmitting...")}
                                    </>
                                ) : (
                                    <>
                                        {t("contactBlock.buttonSubmit", "Transmit Inquiry")}
                                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                                    </>
                                )}
                            </button>

                        </form>
                    ) : (
                        // Institutional Success State
                        <div className="h-full min-h-112.5 flex flex-col items-center justify-center text-center p-8 bg-gray-50 border border-gray-200 animate-in fade-in duration-500">
                            <div className="h-16 w-16 bg-white border border-gray-200 flex items-center justify-center mb-8 shadow-sm">
                                <CheckCircle2 className="h-8 w-8 text-primary-900" strokeWidth={1.5} />
                            </div>
                            
                            <Heading level={3} className="text-xl md:text-2xl font-bold text-primary-900 uppercase tracking-widest mb-4">
                                {t("contactBlock.successTitle", "Transmission Successful")}
                            </Heading>
                            
                            <Text className="text-gray-600 text-sm leading-relaxed max-w-sm mx-auto mb-10">
                                {t("contactBlock.successMessage", "Your inquiry has been securely routed to the appropriate global desk. A representative will contact you shortly.")}
                            </Text>
                            
                            <button 
                                onClick={() => setIsSubmitted(false)}
                                className="group flex items-center justify-center gap-3 bg-transparent px-6 py-3 text-[10px] font-bold tracking-[0.2em] text-primary-900 uppercase transition-all duration-300 border border-primary-900 hover:bg-primary-900 hover:text-white rounded-none"
                            >
                                {t("contactBlock.successButton", "Initiate Another Inquiry")}
                            </button>
                        </div>
                    )}
                </div>

            </div>
        </section>
    );
};