"use client";

import Header from "@/components/header";
import Footer from "@/components/footer";
import { RESTAURANTS } from "../../data";
import { use, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";

export default function RestaurantMenuPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = use(params);
    const restaurant = RESTAURANTS.find(r => r.id === id);
    const [activeCategory, setActiveCategory] = useState(restaurant?.menu?.[0]?.category || "");

    if (!restaurant) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-black text-white font-sans selection:bg-primary/30">
            <Header />

            <main className="pt-32 pb-20 max-w-7xl mx-auto px-6">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16 animate-in fade-in slide-in-from-bottom-10 duration-1000">
                    <div className="space-y-4">
                        <Link
                            href={`/restaurants/${id}`}
                            className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary hover:underline flex items-center gap-2"
                        >
                            <span>←</span> Back to Discovery
                        </Link>
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter italic">
                            The <span className="gradient-text">Menu</span>
                        </h1>
                        <p className="text-muted-foreground uppercase text-[10px] font-bold tracking-[0.5em]">
                            {restaurant.name} // Culinary Collection
                        </p>
                    </div>

                    {/* Category Selector */}
                    <div className="flex flex-wrap gap-4 md:gap-6 border-b border-white/10 pb-4 w-full md:w-auto">
                        {restaurant.menu?.map((cat) => (
                            <button
                                key={cat.category}
                                onClick={() => setActiveCategory(cat.category)}
                                className={`text-[10px] font-bold uppercase tracking-[0.3em] pb-2 transition-all relative ${activeCategory === cat.category
                                        ? "text-primary"
                                        : "text-white/40 hover:text-white"
                                    }`}
                            >
                                {cat.category}
                                {activeCategory === cat.category && (
                                    <div className="absolute bottom-0 left-0 w-full h-[2px] bg-primary animate-in fade-in zoom-in duration-500" />
                                )}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Menu Items Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 animate-in fade-in slide-in-from-bottom-20 duration-1000 delay-300">
                    {restaurant.menu?.find(cat => cat.category === activeCategory)?.items.map((item, idx) => (
                        <div
                            key={idx}
                            className="group glass p-6 md:p-8 rounded-[2.5rem] border border-white/5 hover:border-primary/20 transition-all duration-500 flex flex-col sm:flex-row gap-8 items-center md:items-start"
                        >
                            <div className="relative w-full sm:w-40 h-40 rounded-2xl overflow-hidden shrink-0">
                                <Image
                                    src={item.image}
                                    alt={item.name}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                <div className="absolute bottom-4 right-4 bg-primary px-3 py-1 rounded-full text-xs font-bold shadow-xl">
                                    {item.price}
                                </div>
                            </div>

                            <div className="space-y-4 flex-1 text-center sm:text-left">
                                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                                    <h3 className="text-2xl font-bold tracking-tight group-hover:text-primary transition-colors">{item.name}</h3>
                                </div>
                                <p className="text-sm text-muted-foreground leading-relaxed italic opacity-80">
                                    &quot;{item.description}&quot;
                                </p>
                                <div className="pt-4 border-t border-white/5 flex justify-center sm:justify-start">
                                    <button className="text-[10px] font-bold uppercase tracking-[0.3em] opacity-40 group-hover:opacity-100 group-hover:text-primary transition-all flex items-center gap-2">
                                        Add to Ritual <span className="text-lg">+</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Chef's Note */}
                <div className="mt-32 glass p-12 md:p-20 rounded-[4rem] text-center relative overflow-hidden border border-white/5">
                    <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
                    <div className="relative space-y-8">
                        <div className="w-16 h-1 bg-primary mx-auto" />
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tighter italic">Experience Customization</h2>
                        <p className="max-w-2xl mx-auto text-muted-foreground font-light text-lg md:text-xl leading-relaxed">
                            Our menu is a living organism, evolving with the seasons and the chef&apos;s inspiration.
                            For bespoke dietary requests or private collection pairings, please consult our concierge.
                        </p>
                        <div className="pt-8">
                            <Link href="/contact" className="bg-primary text-white px-10 py-5 rounded-full font-bold text-sm uppercase tracking-widest shadow-2xl shadow-primary/20 hover:scale-110 transition-all inline-block">
                                Consult Concierge
                            </Link>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
