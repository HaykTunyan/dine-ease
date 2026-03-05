import Header from "@/components/header";
import Footer from "@/components/footer";
import Image from "next/image";

const STATS = [
    { label: "Partner Restaurants", value: "500+" },
    { label: "Successful Reservations", value: "1.2M" },
    { label: "User Satisfaction", value: "88.9%" },
    { label: "Countries Reached", value: "12" }
];

const MISSION_ITEMS = [
    {
        title: "Our Mission",
        description: "To bridge the gap between discerning diners and exceptional culinary experiences through cutting-edge technology and a passion for hospitality."
    },
    {
        title: "Our Vision",
        description: "A world where every meal is a perfect moment, planned effortlessly and enjoyed to the fullest, supported by intelligence that understands your taste."
    }
];

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-white dark:bg-black pb-20 overflow-hidden">
            {/* Navigation */}

            <Header />


            <main>
                {/* Intro Section */}
                <section className="relative pt-32 md:pt-48 pb-16 md:pb-24 px-6 text-center max-w-5xl mx-auto overflow-hidden">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] md:w-[800px] h-[400px] md:h-[500px] hero-gradient pointer-events-none opacity-50" />

                    <span className="px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-[10px] md:text-xs font-semibold text-primary mb-6 inline-block uppercase tracking-[0.2em]">
                        The Best in Dining Technology
                    </span>

                    <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold tracking-tight mb-8 text-white">
                        The Story Behind <br className="hidden md:block" />
                        <span className="gradient-text">Dine Ease</span>
                    </h1>

                    <p className="text-xl text-muted-foreground leading-relaxed italic">
                        &quot;We didn&apos;t just build an app; we reinvented the way the world sits down to eat.
                        At Dine Ease, we believe that the complexity of logistics should never overshadow
                        the joy of the table.&quot;
                    </p>
                </section>

                {/* Stats Grid */}
                <section className="px-6 py-12 max-w-7xl mx-auto">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
                        {STATS.map(stat => (
                            <div key={stat.label} className="glass p-6 md:p-8 rounded-2xl md:rounded-3xl border border-white/10 text-center card-hover">
                                <div className="text-2xl md:text-4xl font-bold gradient-text mb-2">{stat.value}</div>
                                <div className="text-[10px] md:text-sm font-medium opacity-50 uppercase tracking-widest text-white">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Detailed Info */}
                <section className="px-6 py-16 md:py-24 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
                    <div className="relative h-[400px] md:h-[600px] rounded-[2.5rem] md:rounded-[3rem] overflow-hidden shadow-2xl animate-float">
                        <Image
                            src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1200&auto=format&fit=crop"
                            alt="Team presentation"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        <div className="absolute bottom-6 md:bottom-10 left-6 md:left-10 text-white">
                            <p className="text-xs md:text-sm font-bold uppercase tracking-widest mb-1 md:2 text-primary">Est. 2024</p>
                            <h3 className="text-2xl md:text-3xl font-bold tracking-tight">Innovation in every byte.</h3>
                        </div>
                    </div>

                    <div className="space-y-12">
                        {MISSION_ITEMS.map(item => (
                            <div key={item.title} className="space-y-4">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-[2px] bg-primary" />
                                    <h2 className="text-2xl font-bold uppercase tracking-tighter">{item.title}</h2>
                                </div>
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        ))}

                        <div className="glass p-8 rounded-[2rem] border border-white/10 space-y-6">
                            <h4 className="text-xl font-bold italic font-serif">&quot;Our goal is to make every seat the best seat in the house.&quot;</h4>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary">DE</div>
                                <div>
                                    <p className="font-bold">Hayk T.</p>
                                    <p className="text-xs opacity-50 uppercase font-bold tracking-widest">Founder & Visionary</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Call to Action */}
                <section className="px-6 py-16 md:py-24 text-center">
                    <h2 className="text-2xl md:text-3xl font-bold mb-8 text-white">Ready to join the revolution?</h2>
                    <div className="flex flex-col sm:flex-row justify-center gap-4 px-6 md:px-0">
                        <button className="bg-primary text-white px-8 md:px-10 py-4 md:py-5 rounded-full font-bold shadow-2xl shadow-primary/40 hover:scale-105 active:scale-95 transition-all w-full sm:w-auto">
                            Join our Network
                        </button>
                        <button className="px-8 md:px-10 py-4 md:py-5 rounded-full font-bold border border-foreground/10 hover:bg-foreground/5 transition-colors w-full sm:w-auto text-white">
                            Contact Us
                        </button>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
