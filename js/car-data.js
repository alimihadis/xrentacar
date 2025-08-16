/* ============================================
   X CAR RENTAL - CARS DATA
   Static data for 20 cars
   ============================================ */

   const carsData = [
    // EKONOMIKE (6 makina)
    {
        id: 1,
        name: "Volkswagen Golf",
        category: "ekonomike",
        year: 2023,
        price: 25,
        seats: 5,
        transmission: "Manual",
        fuel: "Benzinë",
        luggage: 3,
        features: ["GPS", "Bluetooth", "A/C"],
        description: "Makina ideale për qytet dhe udhëtime të shkurtra",
        available: true
    },
    {
        id: 2,
        name: "Ford Fiesta",
        category: "ekonomike", 
        year: 2023,
        price: 22,
        seats: 5,
        transmission: "Manual",
        fuel: "Benzinë",
        luggage: 2,
        features: ["Bluetooth", "A/C"],
        description: "Kompakte dhe ekonomike, perfekte për fillestartët",
        available: true
    },
    {
        id: 3,
        name: "Opel Corsa",
        category: "ekonomike",
        year: 2022,
        price: 23,
        seats: 5,
        transmission: "Manual", 
        fuel: "Benzinë",
        luggage: 3,
        features: ["GPS", "A/C"],
        description: "Dizajn modern me teknologji të avancuar",
        available: true
    },
    {
        id: 4,
        name: "Renault Clio",
        category: "ekonomike",
        year: 2023,
        price: 24,
        seats: 5,
        transmission: "Automatik",
        fuel: "Benzinë",
        luggage: 3,
        features: ["GPS", "Bluetooth", "A/C"],
        description: "Komfort dhe stil në një paketë të përsosur",
        available: true
    },
    {
        id: 5,
        name: "Hyundai i20",
        category: "ekonomike",
        year: 2022,
        price: 21,
        seats: 5,
        transmission: "Manual",
        fuel: "Benzinë", 
        luggage: 2,
        features: ["Bluetooth", "A/C"],
        description: "Çmimi më i mirë në treg me cilësi të lartë",
        available: true
    },
    {
        id: 6,
        name: "Skoda Fabia",
        category: "ekonomike",
        year: 2023,
        price: 23,
        seats: 5,
        transmission: "Manual",
        fuel: "Benzinë",
        luggage: 3,
        features: ["GPS", "A/C"],
        description: "Hapësirë e madhe dhe konsum i ulët karburanti",
        available: true
    },

    // LUKSOZE (6 makina)
    {
        id: 7,
        name: "BMW X3",
        category: "luksoze",
        year: 2023,
        price: 65,
        seats: 5,
        transmission: "Automatik",
        fuel: "Benzinë",
        luggage: 5,
        features: ["GPS", "Bluetooth", "Leather", "Sunroof", "Premium Sound"],
        description: "SUV luksoz me performancë të jashtëzakonshme",
        available: true
    },
    {
        id: 8,
        name: "Audi A4",
        category: "luksoze",
        year: 2023,
        price: 60,
        seats: 5,
        transmission: "Automatik",
        fuel: "Benzinë",
        luggage: 4,
        features: ["GPS", "Bluetooth", "Leather", "Premium Sound"],
        description: "Elegancë dhe teknologji në nivel të lartë",
        available: true
    },
    {
        id: 9,
        name: "Mercedes C-Class",
        category: "luksoze", 
        year: 2023,
        price: 70,
        seats: 5,
        transmission: "Automatik",
        fuel: "Benzinë",
        luggage: 4,
        features: ["GPS", "Bluetooth", "Leather", "Sunroof", "Premium Sound"],
        description: "Makina më luksoze në flotën tonë",
        available: true
    },
    {
        id: 10,
        name: "BMW 3 Series",
        category: "luksoze",
        year: 2022,
        price: 58,
        seats: 5,
        transmission: "Automatik",
        fuel: "Benzinë",
        luggage: 4,
        features: ["GPS", "Bluetooth", "Leather", "Premium Sound"],
        description: "Sporty dhe elegant, perfekt për biznes",
        available: true
    },
    {
        id: 11,
        name: "Audi Q5",
        category: "luksoze",
        year: 2023,
        price: 75,
        seats: 5,
        transmission: "Automatik",
        fuel: "Diesel",
        luggage: 5,
        features: ["GPS", "Bluetooth", "Leather", "Sunroof", "Premium Sound"],
        description: "SUV premium me teknologji të fundit",
        available: true
    },
    {
        id: 12,
        name: "Mercedes GLA",
        category: "luksoze",
        year: 2023,
        price: 68,
        seats: 5,
        transmission: "Automatik",
        fuel: "Benzinë",
        luggage: 4,
        features: ["GPS", "Bluetooth", "Leather", "Premium Sound"],
        description: "Kompakte por luksoze, ideale për qytet",
        available: true
    },

    // SUV (4 makina)
    {
        id: 13,
        name: "Toyota RAV4",
        category: "suv",
        year: 2023,
        price: 45,
        seats: 5,
        transmission: "Automatik",
        fuel: "Hybrid",
        luggage: 5,
        features: ["GPS", "Bluetooth", "A/C", "4WD"],
        description: "Hibrid ekoligjiK me performancë të shkëlqyer",
        available: true
    },
    {
        id: 14,
        name: "Nissan Qashqai",
        category: "suv",
        year: 2022,
        price: 42,
        seats: 5,
        transmission: "Automatik",
        fuel: "Benzinë",
        luggage: 5,
        features: ["GPS", "Bluetooth", "A/C"],
        description: "SUV familjar me hapësirë të bollshme",
        available: true
    },
    {
        id: 15,
        name: "Ford Kuga",
        category: "suv",
        year: 2023,
        price: 43,
        seats: 5,
        transmission: "Automatik",
        fuel: "Diesel",
        luggage: 5,
        features: ["GPS", "Bluetooth", "A/C", "4WD"],
        description: "I përshtatshëm për terrene të vështira",
        available: true
    },
    {
        id: 16,
        name: "Hyundai Tucson",
        category: "suv",
        year: 2023,
        price: 44,
        seats: 5,
        transmission: "Automatik",
        fuel: "Hybrid",
        luggage: 5,
        features: ["GPS", "Bluetooth", "A/C", "4WD"],
        description: "Dizajn modern me teknologji hibride",
        available: true
    },

    // FAMILJARE (4 makina)
    {
        id: 17,
        name: "Volkswagen Passat",
        category: "familjare",
        year: 2022,
        price: 38,
        seats: 5,
        transmission: "Automatik",
        fuel: "Diesel",
        luggage: 5,
        features: ["GPS", "Bluetooth", "A/C", "Spacious"],
        description: "Hapësirë maksimale për familje të mëdha",
        available: true
    },
    {
        id: 18,
        name: "Ford Mondeo",
        category: "familjare",
        year: 2022,
        price: 36,
        seats: 5,
        transmission: "Automatik",
        fuel: "Benzinë",
        luggage: 5,
        features: ["GPS", "Bluetooth", "A/C"],
        description: "Komfort dhe siguri për udhëtime të gjata",
        available: true
    },
    {
        id: 19,
        name: "Toyota Avensis",
        category: "familjare",
        year: 2022,
        price: 37,
        seats: 5,
        transmission: "Manual",
        fuel: "Diesel",
        luggage: 5,
        features: ["GPS", "Bluetooth", "A/C"],
        description: "Besueshme dhe ekonomike për familje",
        available: true
    },
    {
        id: 20,
        name: "Skoda Octavia",
        category: "familjare",
        year: 2023,
        price: 39,
        seats: 5,
        transmission: "Automatik",
        fuel: "Benzinë",
        luggage: 5,
        features: ["GPS", "Bluetooth", "A/C", "Spacious"],
        description: "Bagazhi i madh dhe hapësirë familjare",
        available: true
    }
];

// Helper functions for car data
const CarDataHelpers = {
    // Get all cars
    getAllCars: () => carsData,
    
    // Get cars by category
    getCarsByCategory: (category) => {
        if (category === 'all') return carsData;
        return carsData.filter(car => car.category === category);
    },
    
    // Get car by ID
    getCarById: (id) => {
        return carsData.find(car => car.id === id);
    },
    
    // Get available cars only
    getAvailableCars: () => {
        return carsData.filter(car => car.available);
    },
    
    // Get cars by price range
    getCarsByPriceRange: (minPrice, maxPrice) => {
        return carsData.filter(car => car.price >= minPrice && car.price <= maxPrice);
    },
    
    // Get categories
    getCategories: () => {
        const categories = [...new Set(carsData.map(car => car.category))];
        return ['all', ...categories];
    },
    
    // Search cars by name
    searchCars: (searchTerm) => {
        const term = searchTerm.toLowerCase();
        return carsData.filter(car => 
            car.name.toLowerCase().includes(term) ||
            car.category.toLowerCase().includes(term)
        );
    }
};

// Make variables globally available for browser
window.carsData = carsData;
window.CarDataHelpers = CarDataHelpers;