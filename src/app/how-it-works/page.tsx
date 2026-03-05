"use client";

import Header from "@/components/header";
import Footer from "@/components/footer";
import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";

const SYSTEMS_STEPS = [
    {
        id: "01",
        title: "Digital Discovery",
        subtitle: "The Prelude",
        description: "Browse our curated collection of elite restaurants. Dive deep into artisanal menus, view high-resolution culinary artistry, and choose your atmosphere.",
        icon: "🔍",
        image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1200",
        color: "bg-blue-500/20"
    },
    {
        id: "02",
        title: "Table Matrix Selection",
        subtitle: "Spatial Precision",
        description: "Interact with our live Dine Matrix. Select your exact seating zone—whether it's an intimate corner or a high-energy central hub—with real-time availability sync.",
        icon: "📐",
        image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200",
        color: "bg-primary/20"
    },
    {
        id: "03",
        title: "Encrypted Reservation",
        subtitle: "The Handshake",
        description: "Secure your experience with a single tap. Our system generates a unique digital authentication key and synchronizes your arrival with the venue's concierge.",
        icon: "🔐",
        image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=1200",
        color: "bg-emerald-500/20"
    },
    {
        id: "04",
        title: "Proximity Awareness",
        subtitle: "Real-time Intelligence",
        description: "As you approach the venue, our geofencing engine triggers high-priority notifications. Your table status shifts to 'Ready' the moment you cross the threshold.",
        icon: "🛰️",
        image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1200",
        color: "bg-purple-500/20"
    }
];

export default function HowItWorksPage() {
    const [currentStep, setCurrentStep] = useState(0);

    return (
        <div className="min-h-screen bg-black text-white font-sans selection:bg-primary/30">
            <Header />

            <main className="pt-32 pb-20">
                {/* Hero Introduction */}
                <section className="max-w-7xl mx-auto px-6 mb-24 text-center">
                    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-10 duration-1000">
                        <span className="px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-[10px] font-bold text-primary uppercase tracking-[0.4em] inline-block">
                            Operational Protocol
                        </span>
                        <h1 className="text-5xl md:text-8xl font-bold tracking-tighter italic leading-tight">
                            The <span className="gradient-text">Dine Ease</span> Lifecycle
                        </h1>
                        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed">
                            Experience the intersection of architectural precision and culinary luxury. Our multi-layered system ensures your journey is seamless, secure, and spectacular.
                        </p>
                    </div>
                </section>

                {/* Vertical Process Visualization */}
                <section className="max-w-7xl mx-auto px-6 relative">
                    <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-white/10 -translate-x-1/2 hidden lg:block" />

                    <div className="space-y-32 md:space-y-48">
                        {SYSTEMS_STEPS.map((step, idx) => (
                            <div key={step.id}
                                className={`flex flex-col lg:flex-row items-center gap-12 md:gap-24 relative ${idx % 2 === 0 ? "" : "lg:flex-row-reverse"
                                    }`}
                            >
                                {/* Digital Marker */}
                                <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 z-10 hidden lg:block">
                                    <div className="w-12 h-12 rounded-full bg-black border border-white/20 flex items-center justify-center font-bold text-xs ring-8 ring-black">
                                        {step.id}
                                    </div>
                                </div>

                                {/* Content Side */}
                                <div className="flex-1 space-y-6 text-center lg:text-left">
                                    <div className={`w-16 h-16 rounded-2xl ${step.color} flex items-center justify-center text-3xl mb-4 mx-auto lg:mx-0 shadow-2xl`}>
                                        {step.icon}
                                    </div>
                                    <div className="space-y-2">
                                        <h4 className="text-primary font-bold uppercase tracking-[0.3em] text-xs underline underline-offset-8 decoration-primary/20">
                                            {step.subtitle}
                                        </h4>
                                        <h2 className="text-3xl md:text-5xl font-bold tracking-tighter italic">{step.title}</h2>
                                    </div>
                                    <p className="text-muted-foreground text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 italic font-light">
                                        &quot;{step.description}&quot;
                                    </p>
                                </div>

                                {/* Visual Side */}
                                <div className="flex-1 w-full flex justify-center">
                                    <div className="relative w-full max-w-md aspect-square rounded-[3rem] overflow-hidden group shadow-2xl border border-white/5">
                                        <Image
                                            src={step.image}
                                            alt={step.title}
                                            fill
                                            className="object-cover group-hover:scale-110 transition-transform duration-1000 opacity-80"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                                        <div className="absolute bottom-8 left-8 right-8 text-right">
                                            <span className="text-[6rem] md:text-[8rem] font-bold opacity-10 tracking-tighter select-none leading-none">
                                                {step.id}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* System Architecture Overview */}
                <section className="mt-48 max-w-7xl mx-auto px-6">
                    <div className="glass p-12 md:p-24 rounded-[4rem] border border-white/10 relative overflow-hidden text-center">
                        <div className="absolute -top-32 -left-32 w-80 h-80 bg-primary/10 rounded-full blur-[120px]" />
                        <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-blue-500/10 rounded-full blur-[120px]" />

                        <div className="relative space-y-12">
                            <div className="space-y-4">
                                <h2 className="text-4xl md:text-6xl font-bold tracking-tighter italic text-white">Advanced Infrastructure</h2>
                                <p className="text-muted-foreground max-w-2xl mx-auto text-lg italic">
                                    Our platform operates on a low-latency, encrypted cloud mesh, ensuring that every reservation, every notification, and every digital payment is handled with 99.9% precision.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                                <div className="space-y-3 p-6 border-l border-white/10">
                                    <h5 className="text-primary font-bold uppercase tracking-widest text-[10px]">Security</h5>
                                    <p className="text-xs font-bold text-white uppercase tracking-tighter">P2P Encryption Protocol</p>
                                    <p className="text-[10px] text-muted-foreground leading-relaxed">Your data is secured using military-grade encryption cycles from discovery to checkout.</p>
                                </div>
                                <div className="space-y-3 p-6 border-l border-white/10">
                                    <h5 className="text-primary font-bold uppercase tracking-widest text-[10px]">Consistency</h5>
                                    <p className="text-xs font-bold text-white uppercase tracking-tighter">Distributed Node Sync</p>
                                    <p className="text-[10px] text-muted-foreground leading-relaxed">Real-time table matrix updates across all devices simultaneously without latency.</p>
                                </div>
                                <div className="space-y-3 p-6 border-l border-white/10">
                                    <h5 className="text-primary font-bold uppercase tracking-widest text-[10px]">Intelligence</h5>
                                    <p className="text-xs font-bold text-white uppercase tracking-tighter">Spatial Awareness AI</p>
                                    <p className="text-[10px] text-muted-foreground leading-relaxed">Automatic notifications triggered by highly accurate proximity geolocation scanning.</p>
                                </div>
                            </div>

                            <div className="pt-8">
                                <Link
                                    href="/restaurants"
                                    className="bg-primary text-white px-12 py-5 rounded-full font-bold text-sm uppercase tracking-widest shadow-2xl shadow-primary/30 hover:scale-110 active:scale-95 transition-all inline-block"
                                >
                                    Begin Your Experience
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
