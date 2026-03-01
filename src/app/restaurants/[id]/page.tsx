"use client";

import Image from "next/image";
import Link from "next/link";
import { RESTAURANTS } from "../data";

export default function RestaurantDetailPage({ params }: { params: { id: string } }) {
    // For demo purposes, we'll find by ID or fall back to the first one
    const restaurant = RESTAURANTS.find(r => r.id === params.id) || RESTAURANTS[0];

    return (
        <div className="min-h-screen bg-white dark:bg-black pb-20 overflow-x-hidden">
            {/* Navigation */}
            <nav className="fixed top-0 z-50 w-full glass border-b border-white/10 px-6 py-4 flex items-center justify-between">
                <Link href="/" className="text-2xl font-bold tracking-tighter">
                    Dine<span className="gradient-text">Ease</span>
                </Link>
                <div className="flex gap-8 text-sm font-medium opacity-80">
                    <Link href="/restaurants" className="text-primary font-bold hover:opacity-80 transition-opacity">Restaurants</Link>
                    <Link href="/order" className="hover:text-primary transition-colors">Order Table</Link>
                    <Link href="/about" className="hover:text-primary transition-colors">About</Link>
                    <Link href="/notifications" className="hover:text-primary transition-colors">Notifications</Link>
                    <Link href="/contact" className="hover:text-primary transition-colors">Contact</Link>
                </div>
                <button className="bg-primary text-white px-5 py-2 rounded-full text-sm font-semibold">My Account</button>
            </nav>

            {/* Hero Section */}
            <section className="relative h-[70vh] w-full overflow-hidden">
                <Image
                    src={restaurant.images[0]}
                    alt={restaurant.name}
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

                <div className="absolute bottom-0 left-0 w-full px-12 py-20 max-w-7xl mx-auto">
                    <div className="flex flex-col gap-6 animate-in fade-in slide-in-from-bottom-10 duration-1000">
                        <div className="flex gap-3">
                            <span className="bg-primary px-4 py-2 rounded-full text-xs font-bold text-white uppercase tracking-[0.2em]">
                                {restaurant.cuisine}
                            </span>
                            <span className="glass px-4 py-2 rounded-full text-xs font-bold text-white uppercase tracking-[0.2em] border border-white/10">
                                ★ {restaurant.rating} ({restaurant.reviews} reviews)
                            </span>
                        </div>
                        <h1 className="text-7xl md:text-9xl font-bold text-white tracking-tighter leading-none italic">
                            {restaurant.name}
                        </h1>
                        <p className="text-white/80 max-w-4xl flex items-center gap-3 text-lg font-medium">
                            <span className="text-2xl text-primary">📍</span> {restaurant.address}
                        </p>
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <main className="max-w-7xl mx-auto px-12 mt-24 grid grid-cols-1 lg:grid-cols-3 gap-24">

                {/* Main Details */}
                <div className="lg:col-span-2 space-y-24">
                    <section>
                        <div className="w-16 h-1 bg-primary mb-10" />
                        <h2 className="text-5xl font-bold tracking-tighter mb-10 underline underline-offset-[20px] decoration-white/5">Our Philosophy</h2>
                        <p className="text-muted-foreground leading-relaxed text-3xl font-light opacity-80 italic">
                            &quot;{restaurant.description}&quot;
                        </p>
                    </section>

                    <section className="space-y-12">
                        <div className="flex justify-between items-end">
                            <h2 className="text-5xl font-bold tracking-tighter">Space & Artistry</h2>
                            <span className="text-[10px] font-bold uppercase tracking-[0.5em] opacity-40">Gallery 01 / 02</span>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                            <div className="relative h-[500px] rounded-[4rem] overflow-hidden shadow-2xl border border-white/5 group">
                                <Image
                                    src={restaurant.images[1]}
                                    alt="Interior View"
                                    fill
                                    className="object-cover transform group-hover:scale-110 transition-transform duration-1000 grayscale group-hover:grayscale-0"
                                />
                                <div className="absolute inset-x-8 bottom-8 glass p-4 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity">
                                    <span className="text-xs font-bold uppercase tracking-widest">Main Atrium Experience</span>
                                </div>
                            </div>
                            <div className="relative h-[500px] rounded-[4rem] overflow-hidden shadow-2xl border border-white/5 group">
                                <Image
                                    src={restaurant.images[2]}
                                    alt="Culinary Creation"
                                    fill
                                    className="object-cover transform group-hover:scale-110 transition-transform duration-1000 grayscale group-hover:grayscale-0"
                                />
                                <div className="absolute inset-x-8 bottom-8 glass p-4 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity">
                                    <span className="text-xs font-bold uppercase tracking-widest">Signature Dish Presentation</span>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-5xl font-bold tracking-tighter mb-12">Exceptional Amenities</h2>
                        <div className="flex flex-wrap gap-5">
                            {restaurant.amenities.map(amenity => (
                                <span key={amenity} className="px-10 py-5 rounded-[2rem] border border-white/10 bg-white/[0.03] text-sm font-bold tracking-widest uppercase opacity-60 hover:opacity-100 hover:border-primary hover:text-primary hover:bg-primary/5 transition-all duration-300">
                                    {amenity}
                                </span>
                            ))}
                        </div>
                    </section>
                </div>

                {/* Luxury Sidebar */}
                <aside className="space-y-12">
                    <div className="glass p-12 rounded-[4rem] border border-white/10 sticky top-32 shadow-[0_50px_100px_rgba(0,0,0,0.5)] overflow-hidden">
                        {/* Decorative Gradient Blob */}
                        <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/20 rounded-full blur-[80px]" />

                        <div className="mb-14 relative">
                            <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-primary block mb-3">Concierge 24/7</span>
                            <h3 className="text-4xl font-bold tracking-tighter">Elite Provisions</h3>
                        </div>

                        <div className="space-y-12 relative">
                            <div>
                                <h4 className="text-[10px] font-bold tracking-[0.3em] uppercase opacity-40 mb-5 border-b border-white/5 pb-2">Status: Active</h4>
                                <div className="space-y-4">
                                    {restaurant.hours.map(item => (
                                        <div key={item.day} className="flex justify-between text-sm items-center">
                                            <span className="opacity-50 font-medium">{item.day}</span>
                                            <span className="font-bold tracking-tighter">{item.time}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h4 className="text-[10px] font-bold tracking-[0.3em] uppercase opacity-40 mb-5 border-b border-white/5 pb-2">Encrypted Contact</h4>
                                <div className="space-y-4 text-sm">
                                    <p className="flex justify-between items-center group cursor-pointer">
                                        <span className="opacity-50">Secure Voice:</span>
                                        <span className="font-bold underline decoration-primary/30 group-hover:decoration-primary transition-all">{restaurant.phone}</span>
                                    </p>
                                    <p className="flex justify-between items-center group cursor-pointer">
                                        <span className="opacity-50">E-Relay:</span>
                                        <span className="font-bold group-hover:text-primary transition-colors truncate ml-4">{restaurant.email}</span>
                                    </p>
                                </div>
                            </div>

                            <div className="pt-6 space-y-4">
                                <Link
                                    href="/order"
                                    className="block w-full bg-primary text-white py-8 rounded-[2.5rem] font-bold text-xl shadow-[0_30px_60px_rgba(249,115,22,0.3)] hover:scale-[1.05] hover:-translate-y-1 active:scale-[0.98] transition-all text-center uppercase tracking-widest"
                                >
                                    Book Experience
                                </Link>

                                <button className="w-full border border-white/10 py-6 rounded-[2rem] text-[10px] font-bold uppercase tracking-[0.4em] hover:bg-white/5 transition-all opacity-30 hover:opacity-100">
                                    Digital Portfolio
                                </button>
                            </div>
                        </div>
                    </div>
                </aside>

            </main>
        </div>
    );
}
