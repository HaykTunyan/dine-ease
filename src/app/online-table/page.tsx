"use client";

import Header from "@/components/header";
import Footer from "@/components/footer";
import Link from "next/link";
import Image from "next/image";

const MATRIX_FEATURES = [
    {
        title: "Dine Matrix Interface",
        description: "Our proprietary canvas-based spatial engine provides a 1:1 digital twin of the restaurant floor. Every table is a live node in our network.",
        icon: "🖥️",
        image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200"
    },
    {
        title: "Real-time Occupancy",
        description: "Status lights indicate live availability: Orange for 'Optimal Ready', Amber for 'Reserved', and Charcoal for 'Occupied'. No more guessing.",
        icon: "🚦",
        image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1200"
    },
    {
        title: "Zonal Intelligence",
        description: "The floor is divided into distinct architectural sectors—Mixology, Atrium, and Terrace—each with its own acoustic and lighting profile.",
        icon: "🏢",
        image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1200"
    }
];

export default function OnlineTableInfoPage() {

    /**
     * 
     * Online Table Page
     * 
     * This page is a landing page for the online table system.
     * It explains the features of the system and how to use it.
     * 
     * 
     */


    return (
        <div className="min-h-screen bg-black text-white font-sans selection:bg-primary/30">
            <Header />

            <main className="pt-32 pb-20">
                <section className="max-w-7xl mx-auto px-6 mb-24">
                    <div className="flex flex-col lg:flex-row gap-20 items-center">
                        <div className="flex-1 space-y-8 animate-in fade-in slide-in-from-left-10 duration-1000">
                            <span className="px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-[10px] font-bold text-primary uppercase tracking-[0.4em] inline-block">
                                Spatial Technology
                            </span>
                            <h1 className="text-5xl md:text-8xl font-bold tracking-tighter italic leading-none">
                                The <span className="gradient-text">Online</span> Matrix
                            </h1>
                            <p className="text-xl text-muted-foreground opacity-60 font-light max-w-xl leading-relaxed italic">
                                &quot;Seating is no longer a matter of chance. It's a matter of selection. Welcome to the future of spatial reservations.&quot;
                            </p>
                        </div>
                        <div className="flex-1 relative w-full aspect-[4/3] rounded-[4rem] overflow-hidden border border-white/10 shadow-2xl skew-y-3 hover:skew-y-0 transition-transform duration-1000 group">
                            <Image
                                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200"
                                alt="Dine Matrix Visualization"
                                fill
                                className="object-cover group-hover:scale-110 transition-transform duration-1000"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                            <div className="absolute bottom-10 left-10 flex items-center gap-4">
                                <div className="w-3 h-3 rounded-full bg-primary animate-ping" />
                                <span className="text-[10px] font-bold uppercase tracking-widest bg-black/80 px-4 py-2 rounded-full border border-white/10">Live System Tracking</span>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="max-w-7xl mx-auto px-6 py-24 border-t border-white/5">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {MATRIX_FEATURES.map((feature, idx) => (
                            <div key={idx} className="group space-y-8 animate-in fade-in slide-in-from-bottom-10 duration-1000" style={{ animationDelay: `${idx * 200}ms` }}>
                                <div className="relative aspect-[16/10] rounded-[2.5rem] overflow-hidden border border-white/5 group-hover:border-primary/20 transition-all">
                                    <Image
                                        src={feature.image}
                                        alt={feature.title}
                                        fill
                                        className="object-cover opacity-60 group-hover:opacity-100 transition-all duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
                                    <div className="absolute top-6 left-6 w-12 h-12 rounded-2xl glass flex items-center justify-center text-2xl shadow-2xl">
                                        {feature.icon}
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <h3 className="text-2xl font-bold tracking-tight">{feature.title}</h3>
                                    <p className="text-muted-foreground text-sm leading-relaxed italic opacity-80">
                                        {feature.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="mt-32 max-w-7xl mx-auto px-6 py-24 bg-[#050505] rounded-[4rem] border border-white/5 relative overflow-hidden">
                    <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
                    <div className="relative space-y-20">
                        <div className="text-center space-y-4">
                            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter italic">Interacting with the <span className="gradient-text">Matrix</span></h2>
                            <p className="text-[10px] font-bold uppercase tracking-[0.6em] text-primary">Protocol Engagement Sequence</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                            {[
                                { step: "01", label: "Scan the Floor", desc: "Hover over various zones to see occupant details and shadow status." },
                                { step: "02", label: "Select Node", desc: "Click any orange 'Available' table to initiate the configuration handshake." },
                                { step: "03", label: "Configure Time", desc: "Select your preferred arrival window within the matrix configuration modal." },
                                { step: "04", label: "Sync Reservation", desc: "Confirm booking to bridge the digital request with the physical venue." }
                            ].map((item, idx) => (
                                <div key={idx} className="space-y-6 text-center">
                                    <div className="w-16 h-16 rounded-full glass border border-white/10 mx-auto flex items-center justify-center font-bold text-xl text-primary shadow-[0_0_30px_rgba(249,115,22,0.2)]">
                                        {item.step}
                                    </div>
                                    <div className="space-y-2">
                                        <h4 className="font-bold text-sm uppercase tracking-widest">{item.label}</h4>
                                        <p className="text-xs text-muted-foreground leading-relaxed italic opacity-60 px-4">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="flex justify-center pt-8">
                            <Link
                                href="/order"
                                className="bg-primary text-white px-12 py-5 rounded-full font-bold text-sm uppercase tracking-widest shadow-2xl shadow-primary/30 hover:scale-110 active:scale-95 transition-all inline-block"
                            >
                                Enter Live Matrix
                            </Link>
                        </div>
                    </div>
                </section>
                <section className="mt-32 max-w-3xl mx-auto px-6 text-center space-y-8">
                    <div className="w-12 h-1 bg-white/10 mx-auto" />
                    <p className="text-sm text-muted-foreground leading-relaxed font-light italic">
                        The Online Table Matrix utilizes low-latency WebSockets and Canvas acceleration to provide a
                        near-instantaneous synchronization between our global servers and the physical restaurant floor.
                        Every reservation is processed through an encrypted chain ensuring absolute seating integrity.
                    </p>
                    <div className="flex justify-center gap-10 opacity-30">
                        <span className="text-[10px] font-bold tracking-widest uppercase">Canvas_V3.0</span>
                        <span className="text-[10px] font-bold tracking-widest uppercase">Matrix_Sync_Active</span>
                        <span className="text-[10px] font-bold tracking-widest uppercase">SSL_ENCRYPTED</span>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
