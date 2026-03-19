"use client";

import Header from "@/components/header";
import { useState } from "react";

type Table = {
    id: string;
    name: string;
    capacity: number;
    status: "available" | "reserved" | "occupied";
    type: "bar_stool" | "table_round" | "table_long";
    zone: string;
};

const TABLES: Table[] = [
    { id: "b1", name: "Bar 01", capacity: 1, status: "available", type: "bar_stool", zone: "ALPHA_ZONE" },
    { id: "b2", name: "Bar 02", capacity: 1, status: "available", type: "bar_stool", zone: "ALPHA_ZONE" },
    { id: "b3", name: "Bar 03", capacity: 1, status: "occupied", type: "bar_stool", zone: "ALPHA_ZONE" },
    { id: "b4", name: "Bar 04", capacity: 1, status: "available", type: "bar_stool", zone: "ALPHA_ZONE" },
    { id: "r1", name: "Round 01", capacity: 4, status: "available", type: "table_round", zone: "BETA_ZONE" },
    { id: "r2", name: "Round 02", capacity: 4, status: "reserved", type: "table_round", zone: "BETA_ZONE" },
    { id: "l1", name: "Grand 01", capacity: 8, status: "available", type: "table_long", zone: "GAMMA_ZONE" },
    { id: "l2", name: "Grand 02", capacity: 6, status: "available", type: "table_long", zone: "GAMMA_ZONE" },
];

export default function OrderTablePage() {

    /**
     * 
     * Order Table Page 
     * 
     */

    const [selectedTable, setSelectedTable] = useState<Table | null>(null);
    const [bookingData, setBookingData] = useState({ name: "", time: "" });

    const renderTableNode = (table: Table) => {

        /**
         * 
         * Render Table Node
         * 
         * This function renders a table node.
         * 
         */

        const isSelected = selectedTable?.id === table.id;
        const isAvailable = table.status === "available";

        const shapeStyles = {
            bar_stool: "w-14 h-14 rounded-full",
            table_round: "w-24 h-24 rounded-full",
            table_long: "w-44 h-24 rounded-[2rem]",
        }[table.type];

        return (
            <div key={table.id} className="group relative flex flex-col items-center">
                <span className="absolute -top-6 text-[8px] font-black tracking-[0.2em] text-white/20 group-hover:text-primary transition-colors">
                    {table.id}
                </span>

                <button
                    disabled={!isAvailable}
                    onClick={() => setSelectedTable(table)}
                    className={`
                        ${shapeStyles}
                        relative flex items-center justify-center border-2 transition-all duration-500 ease-out
                        ${isAvailable
                            ? isSelected
                                ? "bg-primary border-primary shadow-[0_0_40px_rgba(249,115,22,0.5)] scale-110 z-20"
                                : "bg-white/[0.02] border-white/10 hover:border-primary/60 hover:bg-primary/5 hover:shadow-[0_0_20px_rgba(249,115,22,0.2)]"
                            : "bg-zinc-900 border-white/5 opacity-20 cursor-not-allowed"
                        }
                    `}
                >
                    <div className={`absolute inset-2 border border-dashed rounded-inherit opacity-10 ${isSelected ? 'border-black opacity-40' : 'border-white'}`} />

                    <div className="flex flex-col items-center">
                        <span className={`text-[10px] font-black tracking-tighter ${isSelected ? 'text-black' : 'text-white'}`}>
                            {table.capacity}P
                        </span>
                    </div>

                    {isAvailable && !isSelected && (
                        <div className="absolute top-0 right-0 w-2 h-2 bg-primary rounded-full animate-ping" />
                    )}
                </button>
            </div>
        );
    };

    return (
        <div className="min-h-screen bg-[#020202] text-white selection:bg-primary/30 overflow-x-hidden">
            <Header />

            <main className="pt-28 pb-20 px-6 max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16">
                    <div className="space-y-1">
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-primary animate-pulse" />
                            <span className="text-[10px] font-bold tracking-[0.4em] text-primary uppercase">System_Active</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter">
                            Seat <span className="text-primary">Matrix</span>
                        </h1>
                    </div>
                    <div className="flex gap-6 border border-white/5 bg-white/[0.02] px-6 py-3 rounded-2xl backdrop-blur-md">
                        <div className="flex items-center gap-2 text-[9px] font-black uppercase tracking-widest text-white/40">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary" /> Free
                        </div>
                        <div className="flex items-center gap-2 text-[9px] font-black uppercase tracking-widest text-white/40">
                            <div className="w-1.5 h-1.5 rounded-full bg-zinc-700" /> Full
                        </div>
                    </div>
                </div>
                <div className="relative space-y-24 py-10">
                    <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:32px_32px] [mask-image:linear-gradient(to_bottom,transparent,black,transparent)]" />

                    {["ALPHA_ZONE", "BETA_ZONE", "GAMMA_ZONE"].map((zone) => (
                        <section key={zone} className="relative z-10">
                            <div className="flex items-center gap-4 mb-10">
                                <span className="text-[10px] font-black text-primary/40 tracking-[0.5em]">{zone}</span>
                                <div className="h-[1px] flex-1 bg-gradient-to-r from-white/10 to-transparent" />
                            </div>

                            <div className="flex flex-wrap gap-x-12 gap-y-16 justify-center md:justify-start px-4">
                                {TABLES.filter(t => t.zone === zone).map(renderTableNode)}
                            </div>
                        </section>
                    ))}
                </div>
            </main>

            {selectedTable && (
                <div className="fixed inset-0 z-[100] flex items-end md:items-stretch justify-end">
                    <div
                        className="absolute inset-0 bg-black/80 backdrop-blur-md animate-in fade-in duration-500"
                        onClick={() => setSelectedTable(null)}
                    />

                    <div className="relative w-full md:w-[450px] bg-[#050505] border-t md:border-t-0 md:border-l border-white/10 p-8 md:p-12 shadow-2xl animate-in slide-in-from-bottom md:slide-in-from-right duration-500 overflow-y-auto">
                        <div className="mb-12">
                            <button
                                onClick={() => setSelectedTable(null)}
                                className="text-[10px] font-bold text-white/20 hover:text-primary transition-colors tracking-[0.3em] mb-10 block"
                            >
                                ESC_SESSION [×]
                            </button>

                            <h2 className="text-5xl font-black italic uppercase tracking-tighter mb-2">
                                {selectedTable.name}
                            </h2>
                            <p className="text-[10px] font-black text-primary tracking-[0.5em] uppercase opacity-50">Node Assignment</p>
                        </div>

                        <div className="space-y-10">
                            <div className="space-y-4">
                                <label className="text-[9px] font-black text-white/30 uppercase tracking-[0.3em] block ml-1">Arrival Window</label>
                                <div className="grid grid-cols-3 gap-2">
                                    {["19:00", "20:30", "22:00"].map(t => (
                                        <button
                                            key={t}
                                            onClick={() => setBookingData({ ...bookingData, time: t })}
                                            className={`py-4 rounded-xl text-[10px] font-black border transition-all ${bookingData.time === t ? 'bg-primary border-primary text-black' : 'bg-white/5 border-white/10 text-white/40 hover:border-white/30'}`}
                                        >
                                            {t}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="space-y-4">
                                <label className="text-[9px] font-black text-white/30 uppercase tracking-[0.3em] block ml-1">Guest Credentials</label>
                                <input
                                    type="text"
                                    placeholder="ENTRY_NAME"
                                    className="w-full bg-white/[0.03] border border-white/10 rounded-2xl py-5 px-6 font-bold text-[11px] tracking-[0.2em] focus:border-primary outline-none transition-all placeholder:opacity-20 uppercase"
                                />
                            </div>

                            <button className="w-full bg-primary text-black py-7 rounded-[2rem] font-black text-xs uppercase tracking-[0.5em] shadow-[0_20px_50px_rgba(249,115,22,0.3)] hover:scale-[1.02] active:scale-95 transition-all">
                                Execute Assignment
                            </button>
                        </div>

                        <div className="mt-20 pt-10 border-t border-white/5 opacity-10">
                            <p className="text-[8px] font-mono leading-loose">
                                // PROTOCOL: {selectedTable.id}<br />
                                // STATUS: SECURE<br />
                                // ZONE: {selectedTable.zone}
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}