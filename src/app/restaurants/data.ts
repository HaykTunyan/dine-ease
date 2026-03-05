export const RESTAURANTS = [
    {
        id: "1",
        name: "L'Essence de Paris",
        description: "A sophisticated fusion of contemporary French culinary techniques and locally sourced organic ingredients. Experience an intimate atmosphere with a curated wine list and panoramic views of the city skyline. Our award-winning chef prepares each dish with meticulous attention to detail.",
        address: "124 Gastronomy Blvd, New York, NY",
        rating: 4.9,
        reviews: 1240,
        cuisine: "Modern French",
        phone: "+1 (555) 789-2345",
        email: "reservations@lessence.com",
        hours: [
            { day: "Mon - Thu", time: "12:00 PM - 10:00 PM" },
            { day: "Fri - Sat", time: "12:00 PM - 11:30 PM" },
            { day: "Sunday", time: "5:00 PM - 9:00 PM" }
        ],
        amenities: ["Valet Parking", "Outdoor Seating", "Wine Cellar", "Private Events"],
        images: [
            "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200",
            "https://images.unsplash.com/photo-1769812343628-5a2d12f297f7?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=800"
        ],
        menu: [
            {
                category: "Appetizers",
                items: [
                    { name: "Foie Gras Terrine", description: "With fig jam and toasted brioche.", price: "$28", image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80" },
                    { name: "Escargots de Bourgogne", description: "Wild Burgundy snails in garlic herb butter.", price: "$22", image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80" }
                ]
            },
            {
                category: "Main Course",
                items: [
                    { name: "Duck Confit", description: "Slow-cooked duck leg with puy lentils and orange reduction.", price: "$42", image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80" },
                    { name: "Ratatouille", description: "Classic Provence vegetable stew with vibrant herbs.", price: "$34", image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80" }
                ]
            }
        ]
    },
    {
        id: "2",
        name: "Zenith Grill",
        description: "Premium cuts and seasonal vegetables over an open flame in a high-rise setting.",
        address: "88 Skyline Ave, Los Angeles, CA",
        rating: 4.7,
        reviews: 856,
        cuisine: "Steakhouse",
        phone: "+1 (555) 123-4567",
        email: "hello@zenithgrill.com",
        hours: [{ day: "Daily", time: "11:00 AM - 11:00 PM" }],
        amenities: ["Rooftop Bar", "Live Music", "Valet"],
        images: [
            "https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=1200",
            "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=800",
            "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=800"
        ],
        menu: [
            {
                category: "From the Grill",
                items: [
                    { name: "Wagyu Ribeye", description: "Marble score 9+, charcoal grilled to perfection.", price: "$120", image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80" },
                    { name: "Black Angus Sirloin", description: "30-day dry-aged, served with bone marrow butter.", price: "$65", image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&q=80" }
                ]
            }
        ]
    },
    {
        id: "3",
        name: "Sakura Blossom",
        description: "Authentic sushi and tempura in a minimalist setting.",
        address: "15 Cherry Ln, San Francisco, CA",
        rating: 4.8,
        reviews: 2100,
        cuisine: "Japanese",
        phone: "+1 (555) 987-6543",
        email: "sushi@sakura.com",
        hours: [{ day: "Tue - Sun", time: "5:00 PM - 10:30 PM" }],
        amenities: ["Omakase Room", "Tea Lounge"],
        images: [
            "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1200",
            "https://images.unsplash.com/photo-1563805042-7684c019e1cb?q=80&w=800",
            "https://images.unsplash.com/photo-1676471932681-45fa972d848a?q=80&w=800&auto=format&fit=crop"
        ],
        menu: [
            {
                category: "Sushi & Sashimi",
                items: [
                    { name: "Omakase Selection", description: "12 pieces of premium chef-selected nigiri.", price: "$150", image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80" },
                    { name: "Bluefin Tuna Flight", description: "Otoro, Chutoro, and Akami pieces.", price: "$45", image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&q=80" }
                ]
            }
        ]
    },
    {
        id: "4",
        name: "Oasis Mediterranean",
        description: "Vibrant flavors of the Mediterranean coast.",
        address: "42 Azure Way, Miami, FL",
        rating: 4.6,
        reviews: 742,
        cuisine: "Mediterranean",
        phone: "+1 (555) 321-0987",
        email: "contact@oasis.com",
        hours: [{ day: "Daily", time: "10:00 AM - 10:00 PM" }],
        amenities: ["Seaside Patio", "Hookah Lounge"],
        images: [
            "https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=1200",
            "https://images.unsplash.com/photo-1771574205963-0c1d84ac7354?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=800"
        ],
        menu: [
            {
                category: "Small Plates",
                items: [
                    { name: "Octopus Carpaccio", description: "With lemon oil, capers, and fresh herbs.", price: "$24", image: "https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&q=80" },
                    { name: "Lamb Kofta", description: "Spiced ground lamb with tzatziki and pita.", price: "$18", image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80" }
                ]
            }
        ]
    },
    {
        id: "5",
        name: "Tuscan Garden",
        description: "Handcrafted pasta and estate-bottled wines.",
        address: "77 Olive Grove, Tuscany, IT",
        rating: 4.8,
        reviews: 1530,
        cuisine: "Italian",
        phone: "+39 055 123 456",
        email: "ciao@tuscan.it",
        hours: [{ day: "Mon - Sat", time: "12:00 PM - 11:00 PM" }],
        amenities: ["Vinery Tours", "Fresh Pasta Station"],
        images: [
            "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1200",
            "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=800",
            "https://images.unsplash.com/photo-1769812343628-5a2d12f297f7?q=80&w=800&auto=format&fit=crop"
        ],
        menu: [
            {
                category: "Primi Piatti",
                items: [
                    { name: "Truffle Pappardelle", description: "Fresh pasta with black truffle and parmigiano.", price: "$32", image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80" },
                    { name: "Osso Buco", description: "Braised veal shanks with gremolata and risotto.", price: "$48", image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80" }
                ]
            }
        ]
    },
    {
        id: "6",
        name: "Urban Spice",
        description: "Bold and inventive Indian street food reimagined.",
        address: "19 Saffron St, London, UK",
        rating: 4.5,
        reviews: 920,
        cuisine: "Modern Indian",
        phone: "+44 20 7946 0000",
        email: "spice@urban.uk",
        hours: [{ day: "Mon - Sat", time: "11:30 AM - 11:00 PM" }],
        amenities: ["Spices Museum", "Mocktail Bar"],
        images: [
            "https://images.unsplash.com/photo-1676471932681-45fa972d848a?q=80&w=1200&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=800",
            "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=800"
        ],
        menu: [
            {
                category: "Heritage Curry",
                items: [
                    { name: "Old Delhi Butter Chicken", description: "Smoked chicken in a rich tomato cream sauce.", price: "$26", image: "https://images.unsplash.com/photo-1676471932681-45fa972d848a?auto=format&fit=crop&q=80" },
                    { name: "Nilgiri Lamb Korma", description: "Slow-cooked lamb in a cilantro and coconut milk gravy.", price: "$30", image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80" }
                ]
            }
        ]
    },
    {
        id: "7",
        name: "Nordic Frost",
        description: "Minimalist Scandinavian cuisine with locally foraged ingredients.",
        address: "3 Fjord View, Oslo, NO",
        rating: 4.9,
        reviews: 450,
        cuisine: "Nordic",
        phone: "+47 22 12 34 56",
        email: "ice@nordic.no",
        hours: [{ day: "Wed - Sun", time: "6:00 PM - 12:00 AM" }],
        amenities: ["Heated Terrace", "Ice Sculpture Gallery"],
        images: [
            "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1200",
            "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800",
            "https://images.unsplash.com/photo-1769812343628-5a2d12f297f7?q=80&w=800&auto=format&fit=crop"
        ],
        menu: [
            {
                category: "The Cold Coast",
                items: [
                    { name: "Cured Arctic Char", description: "With dill oil, cucumber, and cultured cream.", price: "$28", image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80" },
                    { name: "Reindeer Tartare", description: "With pickled moss and lingonberry gel.", price: "$34", image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80" }
                ]
            }
        ]
    },
    {
        id: "8",
        name: "Blue Wave Seafood",
        description: "Freshly caught treasures from the deep sea.",
        address: "1 Cove Path, Sydney, AU",
        rating: 4.7,
        reviews: 680,
        cuisine: "Seafood",
        phone: "+61 2 9385 0000",
        email: "fish@bluewave.au",
        hours: [{ day: "Daily", time: "10:00 AM - 9:00 PM" }],
        amenities: ["Aquarium Tables", "Direct Beach Access"],
        images: [
            "https://images.unsplash.com/photo-1534080564583-6be75777b70a?q=80&w=1200",
            "https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=800",
            "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=800"
        ],
        menu: [
            {
                category: "Ocean's Bounty",
                items: [
                    { name: "Sydney Rock Oysters", description: "Half dozen with finger lime mignonette.", price: "$32", image: "https://images.unsplash.com/photo-1534080564583-6be75777b70a?auto=format&fit=crop&q=80" },
                    { name: "Grilled Moreton Bay Bugs", description: "With garlic butter and coastal herbs.", price: "$55", image: "https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&q=80" }
                ]
            }
        ]
    },
    {
        id: "9",
        name: "The Artisan Bakery",
        description: "Freshly baked sourdough and wood-fired artisanal pizzas.",
        address: "5 Baker's Row, Portland, OR",
        rating: 4.6,
        reviews: 1100,
        cuisine: "Artisan",
        phone: "+1 (555) 543-2109",
        email: "bake@artisan.com",
        hours: [{ day: "Tue - Sun", time: "7:00 AM - 8:00 PM" }],
        amenities: ["Baking Workshops", "WiFi"],
        images: [
            "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1200",
            "https://images.unsplash.com/photo-1771574205963-0c1d84ac7354?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1563805042-7684c019e1cb?q=80&w=800"
        ],
        menu: [
            {
                category: "Wood Fired Pizza",
                items: [
                    { name: "Heirloom Margherita", description: "San Marzano tomatoes, fior di latte, and cold-pressed oil.", price: "$22", image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80" },
                    { name: "Wild Mushroom & Taleggio", description: "Foraged greens and aged balsamic.", price: "$26", image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&q=80" }
                ]
            }
        ]
    },
    {
        id: "10",
        name: "Summit View",
        description: "Fine dining with a spectacular mountain panorama.",
        address: "High Peak Rd, Swiss Alps, CH",
        rating: 4.8,
        reviews: 320,
        cuisine: "Alpine",
        phone: "+41 33 123 45 67",
        email: "peak@summit.ch",
        hours: [{ day: "Daily", time: "11:00 AM - 10:00 PM" }],
        amenities: ["Telescope Access", "Private Chalet Dining"],
        images: [
            "https://images.unsplash.com/photo-1771574205963-0c1d84ac7354?q=80&w=1200&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=800",
            "https://images.unsplash.com/photo-1534080564583-6be75777b70a?q=80&w=800"
        ],
        menu: [
            {
                category: "Mountain Classics",
                items: [
                    { name: "Black Truffle Fondue", description: "With rustic bread and local mountain pickles.", price: "$45", image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80" },
                    { name: "Slow Braised Venison", description: "With juniper berry jus and hand-cut spätzle.", price: "$52", image: "https://images.unsplash.com/photo-1534080564583-6be75777b70a?auto=format&fit=crop&q=80" }
                ]
            }
        ]
    },
    {
        id: "11",
        name: "Gaucho's Fire",
        description: "Traditional Argentinian BBQ experience.",
        address: "15 Pampa Way, Buenos Aires, AR",
        rating: 4.7,
        reviews: 890,
        cuisine: "Argentinian",
        phone: "+54 11 1234 5678",
        email: "fuego@gauchos.ar",
        hours: [{ day: "Tue - Sun", time: "12:00 PM - 12:00 AM" }],
        amenities: ["Open Grill Theater", "Tango Shows"],
        images: [
            "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200",
            "https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=800",
            "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800"
        ],
        menu: [
            {
                category: "The Parrilla",
                items: [
                    { name: "Bife de Chorizo", description: "14oz grass-fed sirloin, grilled over quebracho wood.", price: "$45", image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80" },
                    { name: "Classic Empanadas", description: "Hand-folded with hand-cut beef and green olives.", price: "$12", image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&q=80" }
                ]
            }
        ]
    },
    {
        id: "12",
        name: "Mochi Moon",
        description: "Colorful desserts and premium matcha pairings.",
        address: "9 Neon Cir, Tokyo, JP",
        rating: 4.6,
        reviews: 540,
        cuisine: "Dessert Bar",
        phone: "+81 3 1234 5678",
        email: "dessert@mochimoon.jp",
        hours: [{ day: "Daily", time: "10:00 AM - 11:00 PM" }],
        amenities: ["Neon Photo Opps", "Matcha Ceremony"],
        images: [
            "https://images.unsplash.com/photo-1563805042-7684c019e1cb?q=80&w=1200",
            "https://images.unsplash.com/photo-1676471932681-45fa972d848a?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=800"
        ],
        menu: [
            {
                category: "Matcha & Mochi",
                items: [
                    { name: "Ceremonial Matcha Tart", description: "With white chocolate ganache and gold leaf.", price: "$18", image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&q=80" },
                    { name: "Artisanal Mochi Flight", description: "Seasonal flavors: Sakura, Yuzu, and Toasted Sesame.", price: "$22", image: "https://images.unsplash.com/photo-1676471932681-45fa972d848a?auto=format&fit=crop&q=80" }
                ]
            }
        ]
    }
];
