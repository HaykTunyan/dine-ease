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
            <nav className="fixed top-0 z-50 w-full glass border-b border-white/10 px-6 py-4 flex items-center justify-between">
                <a href="/" className="text-2xl font-bold tracking-tighter">
                    Dine<span className="gradient-text">Ease</span>
                </a>
                <div className="flex gap-8 text-sm font-medium opacity-80">
                    <a href="/restaurants" className="hover:text-primary transition-colors">Restaurants</a>
                    <a href="/order" className="hover:text-primary transition-colors">Order Table</a>
                    <a href="/about" className="text-primary font-bold">About</a>
                    <a href="/notifications" className="hover:text-primary transition-colors">Notifications</a>
                    <a href="/contact" className="hover:text-primary transition-colors">Contact</a>
                </div>
                <button className="bg-primary text-white px-5 py-2 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity">
                    Get Started
                </button>
            </nav>

            <main>
                {/* Intro Section */}
                <section className="relative pt-48 pb-24 px-6 text-center max-w-5xl mx-auto">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] hero-gradient pointer-events-none opacity-50" />

                    <span className="px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-xs font-semibold text-primary mb-6 inline-block uppercase tracking-[0.2em]">
                        The Best in Dining Technology
                    </span>

                    <h1 className="text-5xl md:text-8xl font-bold tracking-tight mb-8">
                        The Story Behind <br />
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
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                        {STATS.map(stat => (
                            <div key={stat.label} className="glass p-8 rounded-3xl border border-white/10 text-center card-hover">
                                <div className="text-4xl font-bold gradient-text mb-2">{stat.value}</div>
                                <div className="text-sm font-medium opacity-50 uppercase tracking-widest">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Detailed Info */}
                <section className="px-6 py-24 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <div className="relative h-[600px] rounded-[3rem] overflow-hidden shadow-2xl animate-float">
                        <Image
                            src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1200&auto=format&fit=crop"
                            alt="Team presentation"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        <div className="absolute bottom-10 left-10 text-white">
                            <p className="text-sm font-bold uppercase tracking-widest mb-2 text-primary">Est. 2024</p>
                            <h3 className="text-3xl font-bold">Innovation in every byte.</h3>
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
                <section className="px-6 py-24 text-center">
                    <h2 className="text-3xl font-bold mb-8">Ready to join the revolution?</h2>
                    <div className="flex justify-center gap-4">
                        <button className="bg-primary text-white px-10 py-5 rounded-full font-bold shadow-2xl shadow-primary/40 hover:scale-105 active:scale-95 transition-all">
                            Join our Network
                        </button>
                        <button className="px-10 py-5 rounded-full font-bold border border-foreground/10 hover:bg-foreground/5 transition-colors">
                            Contact Us
                        </button>
                    </div>
                </section>
            </main>

            <footer className="border-t border-white/10 py-12 px-6 text-center text-sm text-muted-foreground">
                <p>© 2026 Dine Ease. Elevating the art of dining.</p>
            </footer>
        </div>
    );
}
