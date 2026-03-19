"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header>
            <nav className="fixed top-0 z-50 w-full glass border-b border-white/10 px-6 py-4 flex items-center justify-between">
                <Link href="/" className="text-2xl font-bold tracking-tighter cursor-pointer relative z-[60]">
                    Dine<span className="gradient-text">Ease</span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex gap-8 text-sm font-medium opacity-80">
                    <Link href="/restaurants" className="hover:text-primary transition-colors">Restaurants</Link>
                    {/* <Link href="/how-it-works" className="hover:text-primary transition-colors">How it Works</Link> */}
                    {/* <Link href="/online-table" className="hover:text-primary transition-colors">Online Table</Link> */}
                    <Link href="/notifications" className="hover:text-primary transition-colors">Notifications</Link>
                    <Link href="/about" className="hover:text-primary transition-colors">About</Link>
                    <Link href="/contact" className="hover:text-primary transition-colors">Contact</Link>
                </div>

                <div className="flex items-center gap-4">
                    {/* <button className="hidden md:block bg-primary text-white px-5 py-2 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity">
                        My Account
                    </button> */}

                    {/* Mobile Menu Toggle */}
                    <button
                        className="md:hidden flex flex-col gap-1.5 relative z-[60] p-2 "
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <span className={`w-6 h-0.5 bg-foreground bg-amber-50 transition-transform duration-300 ${isMenuOpen ? "rotate-45 translate-y-2" : ""}`} />
                        <span className={`w-6 h-0.5 bg-foreground bg-amber-50 transition-opacity duration-300 ${isMenuOpen ? "opacity-0" : ""}`} />
                        <span className={`w-6 h-0.5 bg-foreground bg-amber-50 transition-transform duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
                    </button>
                </div>

                {/* Mobile Menu Overlay */}
                <div className={`fixed inset-0 bg-background/95 backdrop-blur-xl z-50 md:hidden transition-all duration-500 ${isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
                    <div className="flex flex-col items-center justify-center h-full gap-8 text-2xl font-bold tracking-tight">
                        <Link href="/restaurants" onClick={() => setIsMenuOpen(false)} className="hover:text-primary transition-colors">Restaurants</Link>
                        {/* <Link href="/how-it-works" onClick={() => setIsMenuOpen(false)} className="hover:text-primary transition-colors">How it Works</Link> */}
                        {/* <Link href="/online-table" onClick={() => setIsMenuOpen(false)} className="hover:text-primary transition-colors">Online Table</Link> */}
                        <Link href="/notifications" onClick={() => setIsMenuOpen(false)} className="hover:text-primary transition-colors">Notifications</Link>
                        <Link href="/about" onClick={() => setIsMenuOpen(false)} className="hover:text-primary transition-colors">About</Link>
                        <Link href="/contact" onClick={() => setIsMenuOpen(false)} className="hover:text-primary transition-colors">Contact</Link>
                        {/* <button className="bg-primary text-white px-8 py-4 rounded-full text-lg mt-4">
                            My Account
                        </button> */}
                    </div>
                </div>
            </nav>
        </header>
    );
}
