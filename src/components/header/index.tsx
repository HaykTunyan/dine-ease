
import Link from "next/link";


export default function Header() {

    /**
     * 
     *  Header 
     */


    return (
        <header>
            <nav className="fixed top-0 z-50 w-full glass border-b border-white/10 px-6 py-4 flex items-center justify-between">
                <div className="text-2xl font-bold tracking-tighter">
                    Dine<span className="gradient-text">Ease</span>
                </div>
                <div className="flex gap-8 text-sm font-medium opacity-80">
                    <a href="/restaurants" className="hover:text-primary transition-colors">Restaurants</a>
                    <a href="/order" className="hover:text-primary transition-colors">Order Table</a>
                    <a href="/about" className="hover:text-primary transition-colors">About</a>
                    <a href="/contact" className="hover:text-primary transition-colors">Contact</a>
                </div>
                <button className="bg-primary text-white px-5 py-2 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity">
                    Get Started
                </button>
            </nav>
        </header>
    );
}
