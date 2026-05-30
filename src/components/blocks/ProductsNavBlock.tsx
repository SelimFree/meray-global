
export const ProductsNavBlock = () => {
    const links = [
        { label: "Chemicals", href: "#chemicals" },
        { label: "Plastics", href: "#plastics" },
        { label: "Raw Materials", href: "#materials" }
    ];

    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
            const offsetTop = element.getBoundingClientRect().top + window.scrollY - 80;
            window.scrollTo({ top: offsetTop, behavior: 'smooth' });
        }
    };

    return (
        <div className="sticky top-22 z-40 w-full bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-sm hidden md:block">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center gap-8 h-16">
                    <span className="text-[10px] font-bold tracking-[0.2em] text-gray-400 uppercase mr-4">
                        Quick Navigate:
                    </span>
                    {links.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            onClick={(e) => scrollToSection(e, link.href)}
                            className="relative h-full flex items-center text-xs font-bold tracking-widest uppercase text-primary-900 hover:text-secondary transition-colors group"
                        >
                            {link.label}
                            <div className="absolute bottom-0 left-0 w-full h-0.5 bg-secondary scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};