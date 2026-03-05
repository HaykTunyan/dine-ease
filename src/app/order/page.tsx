"use client";

import Header from "@/components/header";
import { useState, useRef, useEffect } from "react";

type Table = {
    id: string;
    name: string;
    capacity: number;
    status: "available" | "reserved" | "occupied";
    x: number;
    y: number;
    width: number;
    height: number;
    type: "table_round" | "table_long" | "bar_stool" | "decor";
    reservation?: {
        name: string;
        time: string;
    };
};

const TABLES: Table[] = [
    // --- Zone 1: Exclusive Lounge / Bar ---
    { id: "b1", name: "Bar 01", capacity: 1, status: "available", x: 100, y: 80, width: 30, height: 30, type: "bar_stool" },
    { id: "b2", name: "Bar 02", capacity: 1, status: "occupied", x: 150, y: 80, width: 30, height: 30, type: "bar_stool", reservation: { name: "Mark J.", time: "18:30" } },
    { id: "b3", name: "Bar 03", capacity: 1, status: "available", x: 200, y: 80, width: 30, height: 30, type: "bar_stool" },
    { id: "b4", name: "Bar 04", capacity: 1, status: "available", x: 250, y: 80, width: 30, height: 30, type: "bar_stool" },
    { id: "b5", name: "Bar 05", capacity: 1, status: "available", x: 300, y: 80, width: 30, height: 30, type: "bar_stool" },

    { id: "h1", name: "High 01", capacity: 2, status: "available", x: 450, y: 80, width: 40, height: 40, type: "table_round" },
    { id: "h2", name: "High 02", capacity: 2, status: "reserved", x: 550, y: 80, width: 40, height: 40, type: "table_round", reservation: { name: "Alice W.", time: "20:30" } },
    { id: "h3", name: "High 03", capacity: 2, status: "available", x: 650, y: 80, width: 40, height: 40, type: "table_round" },

    // --- Zone 2: Main Dining Hall (Central) ---
    { id: "r1", name: "Round 01", capacity: 4, status: "available", x: 100, y: 220, width: 80, height: 80, type: "table_round" },
    { id: "r2", name: "Round 02", capacity: 4, status: "reserved", x: 230, y: 220, width: 80, height: 80, type: "table_round", reservation: { name: "Sarah K.", time: "19:15" } },
    { id: "r3", name: "Round 03", capacity: 4, status: "available", x: 360, y: 220, width: 80, height: 80, type: "table_round" },
    { id: "r4", name: "Round 04", capacity: 4, status: "available", x: 490, y: 220, width: 80, height: 80, type: "table_round" },
    { id: "r5", name: "Round 05", capacity: 4, status: "occupied", x: 620, y: 220, width: 80, height: 80, type: "table_round", reservation: { name: "James B.", time: "Ongoing" } },

    // --- Zone 3: Grand Terrace / Premium ---
    { id: "l1", name: "Grand 01", capacity: 8, status: "available", x: 100, y: 380, width: 140, height: 70, type: "table_long" },
    { id: "l2", name: "Grand 02", capacity: 6, status: "occupied", x: 300, y: 380, width: 110, height: 70, type: "table_long", reservation: { name: "VIP Event", time: "All Night" } },
    { id: "l3", name: "Grand 03", capacity: 10, status: "available", x: 460, y: 380, width: 180, height: 70, type: "table_long" },

    // --- Zone 4: Garden Side Seating ---
    { id: "g1", name: "Garden 01", capacity: 2, status: "available", x: 850, y: 100, width: 50, height: 50, type: "table_round" },
    { id: "g2", name: "Garden 02", capacity: 2, status: "available", x: 850, y: 200, width: 50, height: 50, type: "table_round" },
    { id: "g3", name: "Garden 03", capacity: 2, status: "available", x: 850, y: 300, width: 50, height: 50, type: "table_round" },
    { id: "g4", name: "Garden 04", capacity: 2, status: "reserved", x: 850, y: 400, width: 50, height: 50, type: "table_round", reservation: { name: "David L.", time: "21:00" } },

    // Extra Tables to reach 8+ more
    { id: "x3", name: "Window B", capacity: 4, status: "available", x: 100, y: 550, width: 80, height: 60, type: "table_long" },
    { id: "x4", name: "Window C", capacity: 4, status: "available", x: 300, y: 550, width: 80, height: 60, type: "table_long" },
    { id: "x5", name: "Window D", capacity: 4, status: "available", x: 500, y: 550, width: 80, height: 60, type: "table_long" },
    { id: "x6", name: "Window E", capacity: 4, status: "available", x: 700, y: 550, width: 80, height: 60, type: "table_long" },

];

export default function OrderTablePage() {

    /**
     * 
     * Order Table Page
     * 
     * 
     * 
     */


    const [selectedTable, setSelectedTable] = useState<Table | null>(null);
    const [hoveredTable, setHoveredTable] = useState<Table | null>(null);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [showConfirmation, setShowConfirmation] = useState(false);
    const [lastBookedTable, setLastBookedTable] = useState<Table | null>(null);
    const [bookingData, setBookingData] = useState({
        name: "",
        email: "",
        phone: "",
        time: ""
    });
    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const canvasRef = useRef<HTMLCanvasElement>(null);

    const validateForm = () => {
        const newErrors: { [key: string]: string } = {};

        if (!bookingData.name.trim()) newErrors.name = "GUEST_NAME_REQUIRED";
        else if (bookingData.name.length < 2) newErrors.name = "INVALID_NAME_PROTOCOL";

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!bookingData.email.trim()) newErrors.email = "SECURE_EMAIL_REQUIRED";
        else if (!emailRegex.test(bookingData.email)) newErrors.email = "ENCRYPTION_LAYER_MISMATCH";

        const phoneRegex = /^\+?[\d\s-]{10,}$/;
        if (!bookingData.phone.trim()) newErrors.phone = "RELAY_PHONE_REQUIRED";
        else if (!phoneRegex.test(bookingData.phone)) newErrors.phone = "SIGNAL_TRANSFER_FAILED";

        if (!bookingData.time) newErrors.time = "SELECTION_REQUIRED";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const drawFurniture = (t: Table, ctx: CanvasRenderingContext2D) => {
            const isSelected = selectedTable?.id === t.id;
            const isHovered = hoveredTable?.id === t.id;
            const themeColor = t.status === "available" ? "#f97316" : t.status === "reserved" ? "#f59e0b" : "#444";

            ctx.save();

            if (isSelected || isHovered) {
                ctx.shadowBlur = 20;
                ctx.shadowColor = themeColor;
            }

            if (t.type === "bar_stool") {
                ctx.strokeStyle = "rgba(255,255,255,0.05)";
                ctx.lineWidth = 12;
                ctx.lineCap = "round";
                ctx.beginPath(); ctx.moveTo(100, 60); ctx.lineTo(350, 60); ctx.stroke();

                ctx.fillStyle = themeColor + (isSelected ? "ff" : "66");
                ctx.strokeStyle = themeColor;
                ctx.lineWidth = 2;
                ctx.beginPath(); ctx.arc(t.x + 15, t.y + 15, 12, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
            }

            else if (t.type === "table_round") {
                const cx = t.x + t.width / 2;
                const cy = t.y + t.height / 2;
                ctx.fillStyle = "rgba(255,255,255,0.03)";
                ctx.strokeStyle = "rgba(255,255,255,0.1)";
                const chairR = t.width / 2 + 8;
                for (let i = 0; i < 4; i++) {
                    const angle = (Math.PI / 2) * i;
                    ctx.beginPath(); ctx.arc(cx + Math.cos(angle) * chairR, cy + Math.sin(angle) * chairR, 10, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
                }
                ctx.fillStyle = themeColor + (isSelected ? "cc" : "22");
                ctx.strokeStyle = themeColor;
                ctx.beginPath(); ctx.arc(cx, cy, t.width / 2, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
            }

            else if (t.type === "table_long") {
                ctx.fillStyle = "rgba(255,255,255,0.03)";
                ctx.strokeStyle = "rgba(255,255,255,0.1)";
                const chairCount = Math.floor(t.capacity / 2);
                for (let i = 0; i < chairCount; i++) {
                    const xPos = t.x + (t.width / chairCount) * i + (t.width / chairCount / 2) - 10;
                    ctx.beginPath(); ctx.roundRect(xPos, t.y - 12, 20, 10, 3); ctx.fill(); ctx.stroke();
                    ctx.beginPath(); ctx.roundRect(xPos, t.y + t.height + 2, 20, 10, 3); ctx.fill(); ctx.stroke();
                }
                ctx.fillStyle = themeColor + (isSelected ? "dd" : "22");
                ctx.strokeStyle = themeColor;
                ctx.beginPath(); ctx.roundRect(t.x, t.y, t.width, t.height, 10); ctx.fill(); ctx.stroke();
            }

            else if (t.type === "decor") {
                ctx.fillStyle = "#064e3b";
                ctx.beginPath(); ctx.arc(t.x + 20, t.y + 20, 18, 0, Math.PI * 2); ctx.fill();
                ctx.fillStyle = "#166534";
                ctx.beginPath(); ctx.arc(t.x + 15, t.y + 15, 10, 0, Math.PI * 2); ctx.fill();
            }

            ctx.restore();
        };


        const drawTooltip = (t: Table, x: number, y: number) => {
            if (!t.reservation) return;
            ctx.save();
            const padding = 15;
            const textAreaW = 140;
            const textH = 14;

            ctx.font = "bold 11px Outfit";
            ctx.fillStyle = "rgba(0,0,0,0.95)";
            ctx.strokeStyle = "rgba(255,255,255,0.2)";
            ctx.beginPath(); ctx.roundRect(x + 20, y - 60, textAreaW, 50, 15); ctx.fill(); ctx.stroke();

            ctx.fillStyle = "#fff";
            ctx.fillText(`Occupant: ${t.reservation.name}`, x + 20 + padding, y - 60 + 20);
            ctx.fillStyle = "#f97316";
            ctx.font = "bold 10px Outfit";
            ctx.fillText(`Schedule: ${t.reservation.time}`, x + 20 + padding, y - 60 + 38);
            ctx.restore();
        };

        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Fine Grid
            ctx.strokeStyle = "rgba(255, 255, 255, 0.015)";
            ctx.lineWidth = 1;
            for (let i = 0; i < canvas.width; i += 20) {
                ctx.beginPath(); ctx.moveTo(i, 0); ctx.lineTo(i, canvas.height); ctx.stroke();
            }

            // Zones
            ctx.fillStyle = "rgba(255, 255, 255, 0.05)";
            ctx.font = "bold 8px Outfit";
            ctx.fillText("SECTOR_A: MIXOLOGY", 120, 45);
            ctx.fillText("SECTOR_B: ATRIUM", 450, 45);
            ctx.fillText("SECTOR_C: TERRACE", 750, 120);

            TABLES.forEach(t => drawFurniture(t, ctx));

            if (hoveredTable && hoveredTable.status !== "available") {
                drawTooltip(hoveredTable, mousePos.x, mousePos.y);
            }
        };

        draw();
    }, [selectedTable, hoveredTable, mousePos]);

    const handleInteraction = (e: React.MouseEvent<HTMLCanvasElement>, type: 'click' | 'move') => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const rect = canvas.getBoundingClientRect();
        const x = (e.clientX - rect.left) * (canvas.width / rect.width);
        const y = (e.clientY - rect.top) * (canvas.height / rect.height);

        if (type === 'move') setMousePos({ x, y });

        const target = TABLES.find(t =>
            x >= t.x - 20 && x <= t.x + t.width + 20 && y >= t.y - 20 && y <= t.y + t.height + 20
        );

        if (type === 'click') {
            if (target && target.status === "available" && target.type !== "decor") {
                setSelectedTable(target);
                setBookingData({ name: "", email: "", phone: "", time: "" });
                setErrors({});
            }
        } else {
            setHoveredTable(target || null);
            canvas.style.cursor = target && target.status === 'available' && target.type !== 'decor' ? 'pointer' : 'default';
        }
    };

    return (
        <div className="min-h-screen bg-white dark:bg-black overflow-hidden font-sans">

            <Header />

            <main className="pt-24 px-6 max-w-full mx-auto h-[calc(100vh-100px)]">
                <div className="flex flex-col gap-6 h-full">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <h1 className="text-3xl md:text-4xl font-bold tracking-tighter uppercase italic text-white">Dine <span className="gradient-text">Matrix</span></h1>
                        <div className="flex flex-wrap gap-4 md:gap-6 text-[10px] font-bold uppercase tracking-widest opacity-60">
                            <span className="flex items-center gap-2 text-white"><div className="w-2.5 h-2.5 rounded-full bg-primary" /> Free Seat</span>
                            <span className="flex items-center gap-2 text-white"><div className="w-2.5 h-2.5 rounded-full bg-amber-500" /> Reserved</span>
                            <span className="flex items-center gap-2 text-white"><div className="w-2.5 h-2.5 rounded-full bg-zinc-700" /> Occupied</span>
                        </div>
                    </div>

                    <div className="w-full max-w-[1000px] aspect-[1000/650] relative bg-[#050505] rounded-3xl md:rounded-[3.5rem] border border-white/5 overflow-hidden shadow-[inset_0_0_150px_rgba(0,0,0,0.8)] group mx-auto">
                        <canvas
                            ref={canvasRef}
                            width={1000}
                            height={650}
                            onClick={(e) => handleInteraction(e, 'click')}
                            onMouseMove={(e) => handleInteraction(e, 'move')}
                            className="w-full h-full object-contain cursor-crosshair"
                        />

                        <div className="absolute top-8 right-8 text-[9px] text-zinc-800 font-mono text-right flex flex-col gap-1">
                            <span>LIT_SYSTEM_ON</span>
                            <span className="text-primary italic">AVAILABLE_NODES: {TABLES.filter(t => t.status === 'available' && t.type !== 'decor').length}</span>
                        </div>
                    </div>
                </div>
            </main>

            {/* FIXED CONFIGURATION MODAL (OUTSIDE CANVAS) */}
            {selectedTable && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 animate-in fade-in duration-300">
                    <div
                        className="absolute inset-0 bg-black/60 backdrop-blur-md"
                        onClick={() => setSelectedTable(null)}
                    />
                    <div className="glass border border-white/20 p-8 md:p-12 rounded-[2.5rem] md:rounded-[4rem] shadow-2xl w-full max-w-xl relative z-10 animate-in zoom-in slide-in-from-bottom-10 duration-500 overflow-hidden mx-4">
                        {/* Decorative Background Element */}
                        <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/20 rounded-full blur-[100px] pointer-events-none" />

                        <div className="relative flex flex-col gap-8">
                            <div className="flex justify-between items-start">
                                <div>
                                    <div className="w-16 h-1 bg-primary mb-6" />
                                    <h2 className="text-3xl md:text-5xl font-bold tracking-tighter leading-none mb-2 text-white">{selectedTable.name}</h2>
                                    <p className="text-[10px] font-bold text-primary uppercase tracking-[0.4em] opacity-80">Matrix Configuration Protocol</p>
                                </div>
                                <button
                                    onClick={() => setSelectedTable(null)}
                                    className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 hover:scale-110 transition-all text-xl"
                                >
                                    ✕
                                </button>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-6">
                                    <div className="bg-white/[0.02] p-6 rounded-3xl border border-white/5">
                                        <span className="text-[10px] uppercase font-bold opacity-30 block mb-2 text-white">Max Capacity</span>
                                        <span className="text-2xl font-bold tracking-tighter italic text-white">{selectedTable.capacity} Guests</span>
                                    </div>
                                    <div className="space-y-5">
                                        <div>
                                            <input
                                                type="text"
                                                placeholder="GUEST NAME"
                                                value={bookingData.name}
                                                onChange={(e) => {
                                                    setBookingData({ ...bookingData, name: e.target.value });
                                                    setErrors({ ...errors, name: "" });
                                                }}
                                                className={`w-full bg-white/5 border ${errors.name ? 'border-red-500/50 focus:border-red-500' : 'border-white/10 focus:border-primary'} rounded-2xl py-5 px-7 text-[10px] font-bold tracking-[0.2em] outline-none transition-all placeholder:opacity-20`}
                                            />
                                            {errors.name && <p className="text-[8px] text-red-500 font-bold tracking-widest mt-2 ml-4 animate-in fade-in slide-in-from-left-2">{errors.name}</p>}
                                        </div>
                                        <div>
                                            <input
                                                type="email"
                                                placeholder="SECURE EMAIL"
                                                value={bookingData.email}
                                                onChange={(e) => {
                                                    setBookingData({ ...bookingData, email: e.target.value });
                                                    setErrors({ ...errors, email: "" });
                                                }}
                                                className={`w-full bg-white/5 border ${errors.email ? 'border-red-500/50 focus:border-red-500' : 'border-white/10 focus:border-primary'} rounded-2xl py-5 px-7 text-[10px] font-bold tracking-[0.2em] outline-none transition-all placeholder:opacity-20`}
                                            />
                                            {errors.email && <p className="text-[8px] text-red-500 font-bold tracking-widest mt-2 ml-4 animate-in fade-in slide-in-from-left-2">{errors.email}</p>}
                                        </div>
                                        <div>
                                            <input
                                                type="tel"
                                                placeholder="RELAY PHONE"
                                                value={bookingData.phone}
                                                onChange={(e) => {
                                                    setBookingData({ ...bookingData, phone: e.target.value });
                                                    setErrors({ ...errors, phone: "" });
                                                }}
                                                className={`w-full bg-white/5 border ${errors.phone ? 'border-red-500/50 focus:border-red-500' : 'border-white/10 focus:border-primary'} rounded-2xl py-5 px-7 text-[10px] font-bold tracking-[0.2em] outline-none transition-all placeholder:opacity-20`}
                                            />
                                            {errors.phone && <p className="text-[8px] text-red-500 font-bold tracking-widest mt-2 ml-4 animate-in fade-in slide-in-from-left-2">{errors.phone}</p>}
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-6">
                                    <div className="flex justify-between items-center">
                                        <span className="text-[10px] uppercase font-bold opacity-30 block">Select Reservation Time</span>
                                        {errors.time && <span className="text-[7px] text-red-500 font-bold tracking-widest uppercase">{errors.time}</span>}
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        {["18:00", "19:30", "21:00", "22:30", "23:00", "23:30"].map(t => (
                                            <button
                                                key={t}
                                                onClick={() => {
                                                    setBookingData({ ...bookingData, time: t });
                                                    setErrors({ ...errors, time: "" });
                                                }}
                                                className={`py-5 rounded-3xl text-[9px] font-bold border tracking-[0.2em] transition-all relative overflow-hidden ${bookingData.time === t ? "bg-primary border-primary shadow-[0_15px_30px_rgba(249,115,22,0.3)] text-white" : "bg-white/5 border-white/5 hover:border-white/20 text-white/40"}`}
                                            >
                                                {t}
                                                {bookingData.time === t && <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent pointer-events-none" />}
                                            </button>
                                        ))}
                                    </div>
                                    <div className="bg-white/[0.02] p-6 rounded-3xl border border-white/5 mt-4 text-center">
                                        <p className="text-[8px] text-muted-foreground leading-relaxed italic opacity-40">
                                            &quot;Digital seating assignments are synchronized with our real-time spatial matrix. Please ensure all communication relays are valid for arrival verification.&quot;
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <button
                                onClick={() => {
                                    if (validateForm()) {
                                        setLastBookedTable(selectedTable);
                                        setShowConfirmation(true);
                                        setSelectedTable(null);
                                        setTimeout(() => {
                                            setShowConfirmation(false);
                                            setLastBookedTable(null);
                                        }, 4000);
                                    }
                                }}
                                className="w-full bg-primary text-white py-7 rounded-[2.5rem] font-bold text-sm shadow-[0_40px_80px_rgba(249,115,22,0.4)] hover:scale-[1.02] hover:-translate-y-1 active:scale-[0.98] transition-all uppercase tracking-[0.4em]"
                            >
                                Confirm Seating Protocol
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* FIXED CONFIRMATION NOTIFICATION (OUTSIDE CANVAS) */}
            {showConfirmation && (
                <div className="fixed top-12 left-1/2 -translate-x-1/2 z-[110] animate-in fade-in slide-in-from-top-10 duration-700">
                    <div className="bg-green-500 text-white px-10 py-5 rounded-[2.5rem] shadow-[0_30px_60px_rgba(34,197,94,0.4)] flex items-center gap-4 backdrop-blur-xl bg-green-500/90 border border-green-400/20">
                        <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-xl">✅</div>
                        <div className="flex flex-col">
                            <span className="text-xl font-bold tracking-tighter">Reservation Perfected</span>
                            <span className="text-[10px] font-bold uppercase tracking-widest opacity-80">Synchronized with Main Matrix</span>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
