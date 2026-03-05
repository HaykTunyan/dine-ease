
"use client";


import { useRouter } from 'next/navigation';


const HeroSection = () => {

    /**
     * 
     * Hero Section
     * 
     * @returns JSX.Element
     * 
     */


    const router = useRouter();


    const handleBookTable = () => {
        router.push("/order");
    };


    const handleExploreMenu = () => {
        router.push("/restaurants");
    };


    return (
        <section className="relative pt-40 pb-20 px-6 flex flex-col items-center text-center overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] hero-gradient pointer-events-none" />

            <div className="animate-float">
                <span className="px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-xs font-semibold text-primary mb-6 inline-block">
                    Next Generation Dining
                </span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight max-w-4xl mb-6 leading-[1.1]">
                Elevate Your Dining <br className="hidden md:block" />
                Experience with <span className="gradient-text">Intelligence</span>
            </h1>

            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mb-10 leading-relaxed px-4 md:px-0">
                From real-time table maps to seamless digital ordering, Dine Ease connects you
                with your favorite restaurants in a way that feels like magic.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto px-6 sm:px-0">
                <button className="bg-primary text-white px-8 py-4 rounded-full font-bold shadow-xl shadow-primary/20 hover:scale-105 transition-transform cursor-pointer w-full sm:w-auto"
                    onClick={handleBookTable}
                >
                    Book a Table
                </button>
                <button className="px-8 py-4 rounded-full font-bold border border-foreground/10 hover:bg-foreground/5 transition-colors cursor-pointer w-full sm:w-auto"
                    onClick={handleExploreMenu}
                >
                    Explore Menu
                </button>
            </div>
        </section>
    )
}

export default HeroSection