import { useState, useRef } from "react";
import { Heading } from '../ui/Heading';
import { Text } from '../ui/Text';
import { Input } from '../ui/Input';
import { Label } from '../ui/Label';
import { Textarea } from '../ui/Textarea';
import { ArrowRight, ShieldCheck, CheckCircle2, Loader2, AlertCircle, X, Mail } from 'lucide-react';
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
           user_lang: (i18n.language || "en").split('-')[0]
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

                <div className="w-full lg:w-5/12 flex flex-col justify-center">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="h-0.5 w-8 bg-secondary" />
                        <Text className="text-xs font-bold tracking-[0.2em] text-gray-500 uppercase">
                            {t("contactBlock.subtitle")}
                        </Text>
                    </div>

                    <Heading level={2} className="text-3xl md:text-4xl font-extrabold text-primary-900 tracking-tight mb-6">
                        {t("contactBlock.title")}
                    </Heading>

                    <Text className="text-gray-600 text-sm md:text-base leading-relaxed mb-8">
                        {t("contactBlock.description")}
                    </Text>

                    <div className="flex items-start gap-4 p-6 bg-gray-50 border border-gray-200 mb-8">
                        <ShieldCheck className="h-6 w-6 text-primary-900 shrink-0" />
                        <div>
                            <Text className="text-xs font-bold tracking-widest text-primary-900 uppercase mb-2">
                                {t("contactBlock.securityTitle")}
                            </Text>
                            <Text className="text-xs text-gray-600 leading-relaxed">
                                {t("contactBlock.securityDescription")}
                            </Text>
                        </div>
                    </div>

                    <div className="pt-8 border-t border-gray-200">
                        <Text className="text-[10px] font-bold tracking-[0.2em] text-gray-500 uppercase mb-4">
                            {t("contactBlock.directContactTitle")}
                        </Text>
                        <a 
                            href={`mailto:${t("contactBlock.emailAddress")}`}
                            className="group flex items-center gap-5 text-primary-900 hover:text-secondary transition-colors"
                        >
                            <div className="flex items-center justify-center h-12 w-12 bg-gray-50 border border-gray-200 group-hover:border-secondary transition-colors">
                                <Mail className="h-5 w-5" strokeWidth={1.5} />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-sm font-bold tracking-tight">
                                    {t("contactBlock.emailAddress")}
                                </span>
                                <span className="text-xs text-gray-500 mt-0.5">
                                    {t("contactBlock.directContactLabel")}
                                </span>
                            </div>
                        </a>
                    </div>
                </div>

                <div className="w-full lg:w-7/12">
                    {!isSubmitted ? (
                        <form ref={formRef} className="space-y-6" onSubmit={handleSubmit}>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <Label htmlFor="firstName" className="text-[10px] font-bold tracking-widest text-gray-500 uppercase">
                                        {t("contactBlock.form.firstNameLabel")}
                                    </Label>
                                    <Input id="firstName" name="firstName" placeholder={t("contactBlock.form.firstNamePlaceholder")} required className="rounded-none border-gray-300 focus:border-primary-900 focus:ring-primary-900" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="lastName" className="text-[10px] font-bold tracking-widest text-gray-500 uppercase">
                                        {t("contactBlock.form.lastNameLabel")}
                                    </Label>
                                    <Input id="lastName" name="lastName" placeholder={t("contactBlock.form.lastNamePlaceholder")} required className="rounded-none border-gray-300 focus:border-primary-900 focus:ring-primary-900" />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <Label htmlFor="company" className="text-[10px] font-bold tracking-widest text-gray-500 uppercase">
                                        {t("contactBlock.form.companyLabel")}
                                    </Label>
                                    <Input id="company" name="company" placeholder={t("contactBlock.form.companyPlaceholder")} required className="rounded-none border-gray-300 focus:border-primary-900 focus:ring-primary-900" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="email" className="text-[10px] font-bold tracking-widest text-gray-500 uppercase">
                                        {t("contactBlock.form.emailLabel")}
                                    </Label>
                                    <Input id="email" name="email" type="email" placeholder={t("contactBlock.form.emailPlaceholder")} required className="rounded-none border-gray-300 focus:border-primary-900 focus:ring-primary-900" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="department" className="text-[10px] font-bold tracking-widest text-gray-500 uppercase">
                                    {t("contactBlock.form.departmentLabel")}
                                </Label>
                                <select
                                    id="department"
                                    name="department"
                                    className="flex h-10 w-full rounded-none border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-900 focus:border-transparent disabled:cursor-not-allowed disabled:opacity-50"
                                    required
                                    defaultValue=""
                                >
                                    <option value="" disabled>{t("contactBlock.form.departmentOptions.default")}</option>
                                    <option value="trading">{t("contactBlock.form.departmentOptions.trading")}</option>
                                    <option value="logistics">{t("contactBlock.form.departmentOptions.logistics")}</option>
                                    <option value="compliance">{t("contactBlock.form.departmentOptions.compliance")}</option>
                                    <option value="media">{t("contactBlock.form.departmentOptions.media")}</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="message" className="text-[10px] font-bold tracking-widest text-gray-500 uppercase">
                                    {t("contactBlock.form.messageLabel")}
                                </Label>
                                <Textarea
                                    id="message"
                                    name="message"
                                    placeholder={t("contactBlock.form.messagePlaceholder")}
                                    rows={5}
                                    required
                                    className="rounded-none border-gray-300 focus:border-primary-900 focus:ring-primary-900 resize-none"
                                />
                            </div>

                            {error && (
                                <div className="relative flex items-start gap-4 p-5 border-l-4 border-red-600 bg-red-50">
                                    <AlertCircle className="h-5 w-5 text-red-600 shrink-0 mt-0.5" />
                                    <div className="flex-1 pr-6">
                                        <Text className="text-xs font-bold tracking-widest text-red-900 uppercase mb-1">
                                            {t("contactBlock.errorTitle")}
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
                                        {t("contactBlock.buttonSending")}
                                    </>
                                ) : (
                                    <>
                                        {t("contactBlock.buttonSubmit")}
                                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                                    </>
                                )}
                            </button>

                        </form>
                    ) : (
                        <div className="h-full min-h-112.5 flex flex-col items-center justify-center text-center p-8 bg-gray-50 border border-gray-200 animate-in fade-in duration-500">
                            <div className="h-16 w-16 bg-white border border-gray-200 flex items-center justify-center mb-8 shadow-sm">
                                <CheckCircle2 className="h-8 w-8 text-primary-900" strokeWidth={1.5} />
                            </div>

                            <Heading level={3} className="text-xl md:text-2xl font-bold text-primary-900 uppercase tracking-widest mb-4">
                                {t("contactBlock.successTitle")}
                            </Heading>

                            <Text className="text-gray-600 text-sm leading-relaxed max-w-sm mx-auto mb-10">
                                {t("contactBlock.successMessage")}
                            </Text>

                            <button
                                onClick={() => setIsSubmitted(false)}
                                className="group flex items-center justify-center gap-3 bg-transparent px-6 py-3 text-[10px] font-bold tracking-[0.2em] text-primary-900 uppercase transition-all duration-300 border border-primary-900 hover:bg-primary-900 hover:text-white rounded-none"
                            >
                                {t("contactBlock.successButton")}
                            </button>
                        </div>
                    )}
                </div>

            </div>
        </section>
    );
};