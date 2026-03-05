import Footer from "@/components/footer";
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
    url: "/online-table"
  },
  {
    title: "Table Availability",
    description: "The system provides a visual map of the restaurant layout with available tables highlighted, allowing users to choose their preferred seating.",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&auto=format&fit=crop",
    icon: "🗺️",
    url: "/online-table"
  },
  {
    title: "Ordering System",
    description: "Once seated, customers can access the digital menu, place orders, and make special requests through the platform, enhancing efficiency.",
    image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=800&auto=format&fit=crop",
    icon: "📱",
    url: "/how-it-works"
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


      <main className="flex-1">
        {/* Hero Section */}

        <HeroSection />

        {/* Features Grid */}
        <section className="px-6 py-24 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {FEATURES.map((feature, idx) => (
              <div
                key={idx}
                className="group relative overflow-hidden rounded-3xl border border-white/10 glass p-8 card-hover"
              >
                <div className="flex flex-col sm:flex-row items-start justify-between gap-8 mb-12">
                  <div className="space-y-4 max-w-full sm:max-w-[60%]">
                    <span className="text-4xl">{feature.icon}</span>
                    <h3 className="text-2xl font-bold">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed italic">
                      &quot;{feature.description}&quot;
                    </p>
                  </div>
                  <div className="relative w-full sm:w-32 h-48 sm:h-32 rounded-2xl overflow-hidden sm:rotate-3 group-hover:rotate-0 transition-transform duration-500 shadow-2xl">
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

      <Footer />

    </div>
  );
}
