import Image from "next/image";
import Link from "next/link";
import { RESTAURANTS } from "./data";
import Header from "@/components/header";

export default function RestaurantsListPage() {

    /**
     * 
     * RestaurantsListPage
     * 
     * This page is a list of all restaurants.
     * It displays the restaurant's information, images, and other details.
     * 
     * 
     */


    return (
        <div className="min-h-screen bg-white dark:bg-black pb-20 overflow-x-hidden">
            {/* Navigation (Consistent) */}

            <Header />

            <main className="pt-32 max-w-7xl mx-auto px-6">
                <div className="flex flex-col gap-4 mb-16">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
                        Find Your <span className="gradient-text">Destination</span>
                    </h1>
                    <p className="text-lg md:text-xl text-muted-foreground opacity-60 max-w-2xl">
                        Discover 12+ handpicked premium restaurants for your next unforgettable dining experience.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {RESTAURANTS.map((restaurant) => (
                        <Link
                            href={`/restaurants/${restaurant.id}`}
                            key={restaurant.id}
                            className="group block"
                        >
                            <div className="relative h-[450px] rounded-[3rem] overflow-hidden border border-white/5 bg-[#0a0a0a] transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary/10">
                                <Image
                                    src={restaurant.images[0]}
                                    alt={restaurant.name}
                                    fill
                                    className="object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                                <div className="absolute bottom-0 left-0 w-full p-8 flex flex-col gap-3 transform group-hover:translate-y-[-10px] transition-transform duration-500">
                                    <div className="flex justify-between items-center">
                                        <span className="bg-primary/20 backdrop-blur-md border border-primary/20 text-primary px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">
                                            {restaurant.cuisine}
                                        </span>
                                        <div className="flex items-center gap-1">
                                            <span className="text-white text-xs font-bold opacity-80">★ {restaurant.rating}</span>
                                            <span className="text-[10px] opacity-40 text-white uppercase font-bold tracking-widest">({restaurant.reviews})</span>
                                        </div>
                                    </div>
                                    <h3 className="text-3xl font-bold text-white tracking-tighter">
                                        {restaurant.name}
                                    </h3>
                                    <p className="text-white/60 text-sm line-clamp-2 italic">
                                        {restaurant.description}
                                    </p>
                                    <div className="pt-4 border-t border-white/10 mt-2 flex justify-between items-center">
                                        <span className="text-[10px] font-bold uppercase tracking-widest text-white/40 max-w-[150px] truncate">
                                            {restaurant.address}
                                        </span>
                                        <span className="text-primary text-xs font-bold group-hover:translate-x-2 transition-transform">
                                            Explore →
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </main>
        </div>
    );
}
