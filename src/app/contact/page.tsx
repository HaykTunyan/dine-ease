"use client";

import Header from "@/components/header";
import Footer from "@/components/footer";
import Link from "next/link";
import { useState } from "react";

export default function ContactPage() {

    /**
     * Contact Page
     * 
     * This page is a contact form for users to send messages to the restaurant.
     * It uses a simple state machine to handle the form submission process.
     * 
     * State: idle | submitting | success
     * 
     * 
     */


    const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("submitting");
        // Simulate real action
        setTimeout(() => setStatus("success"), 1500);
        setTimeout(() => setStatus("idle"), 5000);
    };

    return (
        <div className="min-h-screen bg-white dark:bg-black pb-20 overflow-x-hidden font-sans">

            <Header />

            <main className="pt-32 max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
                    <div className="space-y-8 md:space-y-12">
                        <div className="space-y-4">
                            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter italic text-white">
                                Say <span className="gradient-text">Hello</span>
                            </h1>
                            <p className="text-lg md:text-xl text-muted-foreground opacity-60 font-light max-w-md">
                                Whether you're a curious diner or a restaurant owner, our concierge is ready to assist you.
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold uppercase tracking-[0.3em] opacity-40 ml-4">Legal Name</label>
                                    <input
                                        type="text"
                                        placeholder="Dominic West"
                                        required
                                        className="w-full bg-white/[0.03] border border-white/10 rounded-3xl px-6 py-4 text-sm focus:border-primary focus:outline-none transition-all placeholder:opacity-20"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold uppercase tracking-[0.3em] opacity-40 ml-4">Email Channel</label>
                                    <input
                                        type="email"
                                        placeholder="dominic@essence.com"
                                        required
                                        className="w-full bg-white/[0.03] border border-white/10 rounded-3xl px-6 py-4 text-sm focus:border-primary focus:outline-none transition-all placeholder:opacity-20"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] font-bold uppercase tracking-[0.3em] opacity-40 ml-4">Matter of Subject</label>
                                <select className="w-full bg-white/[0.03] border border-white/10 rounded-3xl px-6 py-4 text-sm focus:border-primary focus:outline-none transition-all appearance-none cursor-pointer">
                                    <option className="bg-black">General Inquiry</option>
                                    <option className="bg-black">Partnership Opportunity</option>
                                    <option className="bg-black">Support Request</option>
                                    <option className="bg-black">Feedback & Suggestions</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] font-bold uppercase tracking-[0.3em] opacity-40 ml-4">Detailed Message</label>
                                <textarea
                                    rows={5}
                                    placeholder="Brief your message to our collective..."
                                    className="w-full bg-white/[0.03] border border-white/10 rounded-[2rem] px-6 py-4 text-sm focus:border-primary focus:outline-none transition-all placeholder:opacity-20 resize-none"
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={status === "submitting"}
                                className={`w-full py-6 rounded-[2.5rem] font-bold text-lg uppercase tracking-[0.2em] shadow-2xl transition-all flex items-center justify-center gap-3
                                    ${status === "success" ? "bg-green-500 shadow-green-500/20" : "bg-primary shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] animate-float"}
                                `}
                            >
                                {status === "idle" && "Transmit Message"}
                                {status === "submitting" && "Syncing..."}
                                {status === "success" && "✓ Synchronized"}
                            </button>
                        </form>
                    </div>

                    <div className="space-y-12">
                        <div className="glass p-8 md:p-12 rounded-[2.5rem] md:rounded-[4rem] border border-white/10 relative overflow-hidden group">
                            <div className="absolute -top-32 -right-32 w-80 h-80 bg-primary/20 rounded-full blur-[100px] group-hover:bg-primary/30 transition-all duration-700" />

                            <div className="relative space-y-8 md:space-y-12">
                                <div>
                                    <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-primary block mb-4 border-b border-primary/20 pb-2 w-fit">Direct Channels</span>
                                    <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-white">Global Hubs</h2>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                    <div className="space-y-4">
                                        <h4 className="text-[10px] font-bold tracking-[0.3em] uppercase opacity-40">HQ: New York</h4>
                                        <div className="text-sm space-y-2 font-medium">
                                            <p className="opacity-60 leading-relaxed italic">124 Gastronomy Blvd, Chelsea</p>
                                            <p className="font-bold underline underline-offset-4">+1 555-DINE-EASE</p>
                                        </div>
                                    </div>
                                    <div className="space-y-4">
                                        <h4 className="text-[10px] font-bold tracking-[0.3em] uppercase opacity-40">Office: London</h4>
                                        <div className="text-sm space-y-2 font-medium">
                                            <p className="opacity-60 leading-relaxed italic">19 Saffron St, Shoreditch</p>
                                            <p className="font-bold underline underline-offset-4">+44 20 7946 0000</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="pt-10 border-t border-white/5 italic">
                                    <p className="text-xs text-muted-foreground leading-relaxed opacity-50">
                                        For immediate concierge services, we recommend using our encrypted voice channel or visiting our hubs in the early morning.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="relative h-48 md:h-64 mx-4 md:mx-12 rounded-[2.5rem] md:rounded-[3.5rem] overflow-hidden group shadow-2xl border border-white/5">
                            <div className="absolute inset-0 bg-[#0a0a0a] flex items-center justify-center">
                                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
                                <div className="relative flex flex-col items-center">
                                    <div className="w-12 h-12 bg-primary rounded-full animate-ping opacity-20" />
                                    <div className="w-4 h-4 bg-primary rounded-full absolute top-4 left-4 border-2 border-white shadow-2xl" />
                                    <span className="mt-8 text-[10px] font-bold uppercase tracking-widest text-primary italic">Live Location Scanning...</span>
                                </div>
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[9px] font-mono opacity-20 tracking-tighter">
                                NAV_LAT: 40.7484° N // NAV_LONG: 73.9857° W
                            </div>
                        </div>
                    </div>

                </div>
            </main>

            <Footer />
        </div>
    );
}
