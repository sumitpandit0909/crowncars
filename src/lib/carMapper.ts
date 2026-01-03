export interface SupabaseCar {
    brand_name: string;
    title: string;
    description: string | null;
    image_urls: string[]; // jsonb[]
    features: any; // jsonb
    price_per_day: number;
    seats: number;
    fuel_type: string;
    transmission: string;
    location: string | null;
    rating: number | null;
    is_available: boolean | null;
    created_at: string | null;
}

export interface UIRequestCar {
    name: string;
    model: string;
    images: string[];
    type: string;
    features: {
        fuel: string;
        transmission: string;
        seater: string;
        color: string; // Not in DB explicitly, default or extract?
        extra: string[];
        music_system?: boolean; // Not in DB
        fastag?: string; // Not in DB
    };
    price: string; // UI uses string
    offers: string; // Not in DB
    offer_description: string; // Not in DB
}

export function mapSupabaseCarToUI(car: SupabaseCar): UIRequestCar {
    // Safely cast features from JSONB
    const featuresJson = car.features as any || {};
    
    // Default values for fields not in DB or JSONB
    const extras = featuresJson.extra || []; // Expecting features to have extra array if possible, or we default empty
    const color = featuresJson.color || "Standard"; 
    
    // Logic to extract or format model from title if needed, or just use year
    // The previous JSON had "2022" as model. We might want to parse it from title if it exists like "Tata Tiago 2022"
    // For now, let's look for a year in the title, or default to current year.
    const yearMatch = car.title.match(/\b(19|20)\d{2}\b/);
    const modelYear = yearMatch ? yearMatch[0] : "";

    // Clean name by removing year if present to avoid duplication "Tata Tiago 2022 - 2022"
    const name = car.title.replace(/\b(19|20)\d{2}\b/, '').trim();

    return {
        name: name,
        model: modelYear,
        images: car.image_urls || [],
        type: car.description || "Car", // Using description as type for now? Or maybe valid types: hatchback, SUV etc. 
        // ideally type should be a column or in features. 
        // Let's assume description contains it or we default. 
        
        features: {
            fuel: car.fuel_type,
            transmission: car.transmission,
            seater: car.seats.toString(),
            color: color, 
            extra: extras,
            music_system: true, // Defaulting for UI consistency
            fastag: "active" // Defaulting
        },
        price: car.price_per_day.toString(),
        offers: "0%", // Default
        offer_description: "" // Default
    };
}
