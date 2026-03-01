import Header from "@/components/header";
import HeroSection from "@/components/hero-section";
import Image from "next/image";
import Link from "next/link";
// import { useRouter } from "next/navigation";


const FEATURES = [
  {
    title: "Online Table Reservation",
    description: "Users can browse restaurants, view available tables in real-time, and reserve a table for their desired date and time.",
    image: "https://images.unsplash.com/photo-1769812343628-5a2d12f297f7?q=80&w=1200&auto=format&fit=crop",
    icon: "📅",
    url: "/order"
  },
  {
    title: "Table Availability",
    description: "The system provides a visual map of the restaurant layout with available tables highlighted, allowing users to choose their preferred seating.",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&auto=format&fit=crop",
    icon: "🗺️",
    url: "/order"
  },
  {
    title: "Ordering System",
    description: "Once seated, customers can access the digital menu, place orders, and make special requests through the platform, enhancing efficiency.",
    image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=800&auto=format&fit=crop",
    icon: "📱",
    url: "/order"
  },
  {
    title: "Notifications",
    description: "Users receive real-time updates on their reservation status, table availability, and order preparation, ensuring a smooth dining experience.",
    image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=800&auto=format&fit=crop",
    icon: "🔔",
    url: "/notifications"
  }
];

export default function Home() {

  /**
   * Home Component
   * 
   * @returns JSX.Element
   * 
   */




  // const router = useRouter();


  // const handleBookTable = () => {
  //   router.push("/order");
  // };


  // const handleExploreMenu = () => {
  //   router.push("/restaurants");
  // };



  return (
    <div className="flex min-h-screen flex-col bg-white dark:bg-black overflow-hidden">
      {/* Navigation */}
      <Header />

      {/* <nav className="fixed top-0 z-50 w-full glass border-b border-white/10 px-6 py-4 flex items-center justify-between">
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
      </nav> */}

      <main className="flex-1">
        {/* Hero Section */}
        {/* <section className="relative pt-40 pb-20 px-6 flex flex-col items-center text-center overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] hero-gradient pointer-events-none" />

          <div className="animate-float">
            <span className="px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-xs font-semibold text-primary mb-6 inline-block">
              Next Generation Dining
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight max-w-4xl mb-6 leading-[1.1]">
            Elevate Your Dining <br />
            Experience with <span className="gradient-text">Intelligence</span>
          </h1>

          <p className="text-lg text-muted-foreground max-w-2xl mb-10 leading-relaxed">
            From real-time table maps to seamless digital ordering, Dine Ease connects you
            with your favorite restaurants in a way that feels like magic.
          </p>

          <div className="flex gap-4">
            <button className="bg-primary text-white px-8 py-4 rounded-full font-bold shadow-xl shadow-primary/20 hover:scale-105 transition-transform"
              onClick={handleBookTable}
            >
              Book a Table
            </button>
            <button className="px-8 py-4 rounded-full font-bold border border-foreground/10 hover:bg-foreground/5 transition-colors"
              onClick={handleExploreMenu}
            >
              Explore Menu
            </button>
          </div>
        </section> */}

        <HeroSection />

        {/* Features Grid */}
        <section className="px-6 py-24 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {FEATURES.map((feature, idx) => (
              <div
                key={idx}
                className="group relative overflow-hidden rounded-3xl border border-white/10 glass p-8 card-hover"
              >
                <div className="flex items-start justify-between mb-12">
                  <div className="space-y-4 max-w-[60%]">
                    <span className="text-4xl">{feature.icon}</span>
                    <h3 className="text-2xl font-bold">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed italic">
                      &quot;{feature.description}&quot;
                    </p>
                  </div>
                  <div className="relative w-32 h-32 rounded-2xl overflow-hidden rotate-3 group-hover:rotate-0 transition-transform duration-500 shadow-2xl">
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                <div className="flex items-center gap-2 text-sm font-semibold text-primary group-hover:gap-4 transition-all pointer-events-none">
                  <Link href={feature.url} className="pointer-events-auto">
                    Learn more <span>→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12 px-6 text-center text-sm text-muted-foreground">
        <p>© 2026 Dine Ease. Redefining modern hospitality.</p>
      </footer>
    </div>
  );
}
