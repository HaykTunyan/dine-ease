"use client";

import Header from "@/components/header";
import Footer from "@/components/footer";
import Link from "next/link";
import { useState, useEffect } from "react";

const NOTIFICATION_TYPES = [
    {
        icon: "🔔",
        title: "Immediate Confirmation",
        description: "The moment your reservation is synchronized, you receive an encrypted confirmation via push and email.",
        timing: "Real-time"
    },
    {
        icon: "📍",
        title: "Spatial Proximity",
        description: "Alerts triggered when you are within the venue's radius, ensuring a seamless greeting from the concierge.",
        timing: "~15m Before"
    },
    {
        icon: "🍽️",
        title: "Table Readiness",
        description: "A high-priority notification when your specific architectural zone is prepared and your table is live.",
        timing: "On Arrival"
    },
    {
        icon: "💳",
        title: "Digital Handshake",
        description: "Transparent order updates and final billing synchronization delivered directly to your device.",
        timing: "Post-Dining"
    }
];

export default function NotificationsPage() {

    /**
     * 
     * Notifications Page
     * 
     * This page is a notification center for users to receive updates about their reservations.
     * It uses a simple state machine to handle the notification process.
     * 
     * State: idle | submitting | success
     * 
     * 
     */

    const [activeStep, setActiveStep] = useState(0);

    // Auto-cycling workflow steps for visual flair
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveStep((prev) => (prev + 1) % 4);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="min-h-screen bg-white dark:bg-black pb-20 overflow-x-hidden font-sans">
            {/* Header / Navigation */}
            <Header />

            <main className="pt-32 max-w-7xl mx-auto px-6">

                {/* Hero Section */}
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center mb-16 md:mb-32">
                    <div className="flex-1 space-y-6 md:space-y-8 animate-in fade-in slide-in-from-left-10 duration-1000 text-center lg:text-left">
                        <span className="px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-[10px] font-bold text-primary uppercase tracking-[0.3em] inline-block">
                            System Intelligence
                        </span>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-none italic text-white">
                            Stay <span className="gradient-text">Connected</span>
                        </h1>
                        <p className="text-lg md:text-xl text-muted-foreground opacity-60 font-light max-w-xl leading-relaxed mx-auto lg:mx-0">
                            Our high-frequency notification engine ensures you're never out of the loop. From the first click to the final sip, intelligence follows your journey.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start">
                            <button className="bg-primary text-white px-8 md:px-10 py-4 md:py-5 rounded-full md:rounded-[2rem] font-bold text-sm uppercase tracking-widest shadow-2xl shadow-primary/20 hover:scale-105 transition-all">
                                Enable Alerts
                            </button>
                            <Link href="/order" className="glass px-8 md:px-10 py-4 md:py-5 rounded-full md:rounded-[2rem] font-bold text-sm uppercase tracking-widest text-white border border-white/10 hover:bg-white/5 transition-all">
                                Book Now
                            </Link>
                        </div>
                    </div>

                    {/* Visual: Floating Notification Mockup */}
                    <div className="flex-1 relative w-full h-[500px] flex items-center justify-center">
                        <div className="absolute inset-0 hero-gradient opacity-20 blur-[100px]" />

                        {/* Mock Phone / Notification Stack */}
                        <div className="relative z-10 space-y-4 w-full max-w-sm">
                            <div className="glass p-6 rounded-[2.5rem] border border-white/20 shadow-2xl animate-float">
                                <div className="flex items-center gap-4 mb-3">
                                    <div className="w-10 h-10 rounded-2xl bg-primary flex items-center justify-center text-xl shadow-lg shadow-primary/30">🔔</div>
                                    <div className="flex-1">
                                        <h4 className="text-xs font-bold text-white uppercase tracking-widest">Dine Ease Sync</h4>
                                        <p className="text-[10px] opacity-40 font-bold">Just Now</p>
                                    </div>
                                </div>
                                <p className="text-sm font-medium text-white/80 leading-relaxed italic">
                                    &quot;L'Essence de Paris: Your Elite Table is now live and prepared. See you in 5 minutes.&quot;
                                </p>
                            </div>

                            <div className="glass p-6 rounded-[2.5rem] border border-white/10 shadow-xl opacity-60 translate-x-4 scale-95 transition-all">
                                <div className="flex items-center gap-4 mb-3">
                                    <div className="w-10 h-10 rounded-2xl bg-white/10 flex items-center justify-center text-xl">📍</div>
                                    <div className="flex-1">
                                        <h4 className="text-xs font-bold text-white uppercase tracking-widest">Proximity Alert</h4>
                                        <p className="text-[10px] opacity-40 font-bold">15m ago</p>
                                    </div>
                                </div>
                                <p className="text-sm font-medium text-white/40 leading-relaxed">
                                    &quot;Geofence Triggered: Elite Hub detected within 500m.&quot;
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Notification Architecture Section */}
                <section className="py-16 md:py-24 border-t border-white/5">
                    <div className="mb-12 md:mb-20">
                        <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-primary block mb-4 border-b border-primary/20 pb-2 w-fit">Infrastructure</span>
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-white">How it Works</h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                        {NOTIFICATION_TYPES.map((type, idx) => (
                            <div key={idx} className="group glass p-8 md:p-10 rounded-3xl md:rounded-[3.5rem] border border-white/5 hover:border-primary/30 shadow-2xl transition-all duration-500 overflow-hidden relative">
                                <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-all" />
                                <div className="text-4xl md:text-5xl mb-6 md:mb-8 group-hover:scale-110 transition-transform duration-500">{type.icon}</div>
                                <h3 className="text-lg md:text-xl font-bold mb-4 text-white tracking-tight">{type.title}</h3>
                                <p className="text-xs md:text-sm text-white/40 leading-relaxed mb-6 italic">
                                    {type.description}
                                </p>
                                <div className="pt-6 border-t border-white/5">
                                    <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary group-hover:underline">
                                        Transmission: {type.timing}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Interactive Workflow Visualization */}
                <section className="py-16 md:py-32 bg-[#050505] rounded-[2.5rem] md:rounded-[4rem] border border-white/5 p-6 md:p-12 relative overflow-hidden">
                    <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

                    <div className="relative text-center mb-12 md:mb-20 space-y-4">
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tighter italic text-white">The Notification <span className="gradient-text">Lifecycle</span></h2>
                        <p className="text-muted-foreground opacity-40 uppercase text-[10px] font-bold tracking-[0.5em]">Real-time synchronization protocol</p>
                    </div>

                    <div className="relative max-w-4xl mx-auto flex justify-between items-center px-2 md:px-4">
                        {/* Connecting Line */}
                        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/10 -translate-y-1/2" />

                        {[1, 2, 3, 4].map((step, idx) => (
                            <div key={step} className="relative z-10 flex flex-col items-center gap-4 md:gap-6">
                                <div className={`w-10 h-10 md:w-16 md:h-16 rounded-full flex items-center justify-center font-bold text-sm md:text-xl border-2 transition-all duration-700
                                    ${activeStep === idx
                                        ? "bg-primary border-primary shadow-[0_0_40px_rgba(249,115,22,0.4)] text-white scale-110"
                                        : "bg-black border-white/20 text-white/20"
                                    }
                                `}>
                                    0{step}
                                </div>
                                <span className={`text-[8px] md:text-[10px] font-bold uppercase tracking-widest transition-opacity duration-700 text-center
                                    ${activeStep === idx ? "opacity-100 text-primary" : "opacity-20 text-white"}
                                `}>
                                    {["Reserved", "Verified", "Ready", "Closed"][idx]}
                                </span>
                            </div>
                        ))}
                    </div>

                    <div className="mt-20 text-center max-w-xl mx-auto min-h-[80px]">
                        <p className="text-lg text-white font-light italic transition-all duration-500">
                            {activeStep === 0 && "Step 01: Initial reservation handshake initiated. Encryption keys exchanged."}
                            {activeStep === 1 && "Step 02: Venue verification successful. Table availability prioritized in real-time."}
                            {activeStep === 2 && "Step 03: Proximity sensor active. Pushing readiness alert to primary device."}
                            {activeStep === 3 && "Step 04: Dining experience complete. Final receipt delivered securely."}
                        </p>
                    </div>
                </section>

                {/* FAQ / Control Panel Mockup */}
                <section className="py-24 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <div className="space-y-12">
                        <div>
                            <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-primary block mb-4 border-b border-primary/20 pb-2 w-fit">Configuration</span>
                            <h2 className="text-5xl font-bold tracking-tighter text-white">Command Center</h2>
                        </div>

                        <div className="space-y-6">
                            <div className="glass p-6 rounded-3xl border border-white/5 flex items-center justify-between group hover:border-white/20 transition-all">
                                <div>
                                    <h4 className="font-bold text-white mb-1">Push Transmission</h4>
                                    <p className="text-xs text-white/40">Real-time alerts to your mobile device</p>
                                </div>
                                <div className="w-12 h-6 bg-primary rounded-full relative cursor-pointer">
                                    <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full shadow-lg" />
                                </div>
                            </div>
                            <div className="glass p-6 rounded-3xl border border-white/5 flex items-center justify-between group hover:border-white/20 transition-all opacity-50">
                                <div>
                                    <h4 className="font-bold text-white mb-1">E-Relay Digest</h4>
                                    <p className="text-xs text-white/40">Weekly summary of your elite experiences</p>
                                </div>
                                <div className="w-12 h-6 bg-white/10 rounded-full relative cursor-pointer">
                                    <div className="absolute left-1 top-1 w-4 h-4 bg-white/20 rounded-full" />
                                </div>
                            </div>
                            <div className="glass p-6 rounded-3xl border border-white/5 flex items-center justify-between group hover:border-white/20 transition-all">
                                <div>
                                    <h4 className="font-bold text-white mb-1">Encrypted Logs</h4>
                                    <p className="text-xs text-white/40">Maintain a record of all past synchronizations</p>
                                </div>
                                <div className="w-12 h-6 bg-primary rounded-full relative cursor-pointer">
                                    <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full shadow-lg" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="glass p-12 rounded-[4rem] border border-white/10 bg-primary/5 space-y-8 italic">
                        <div className="w-12 h-1 bg-primary" />
                        <h3 className="text-3xl font-bold tracking-tighter text-white">&quot;Timing is the ultimate luxury in modern hospitality.&quot;</h3>
                        <p className="text-sm text-white/60 leading-relaxed font-light">
                            Our system doesn't just notify you; it understands the rhythm of your evening. By leveraging low-latency cloud infrastructure and spatial intelligence, Dine Ease ensures that every notification is a relevant provision, not an interruption.
                        </p>
                        <div className="flex items-center gap-4 pt-6">
                            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary">AI</div>
                            <div>
                                <p className="font-bold text-white text-xs uppercase tracking-widest">Notification Engine</p>
                                <p className="text-[10px] opacity-40 uppercase font-bold tracking-widest leading-none">Powered by DineEase Architecture</p>
                            </div>
                        </div>
                    </div>
                </section>

            </main>

            <Footer />
        </div>
    );
}
