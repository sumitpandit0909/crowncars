function mapSupabaseCarToUI(car) {
  const featuresJson = car.features || {};
  const extras = featuresJson.extra || [];
  const color = featuresJson.color || "Standard";
  const yearMatch = car.title.match(/\b(19|20)\d{2}\b/);
  const modelYear = yearMatch ? yearMatch[0] : "";
  const name = car.title.replace(/\b(19|20)\d{2}\b/, "").trim();
  return {
    name,
    model: modelYear,
    images: car.image_urls || [],
    type: car.description || "Car",
    // Using description as type for now? Or maybe valid types: hatchback, SUV etc. 
    // ideally type should be a column or in features. 
    // Let's assume description contains it or we default. 
    features: {
      fuel: car.fuel_type,
      transmission: car.transmission,
      seater: car.seats.toString(),
      color,
      extra: extras,
      music_system: true,
      // Defaulting for UI consistency
      fastag: "active"
      // Defaulting
    },
    price: car.price_per_day.toString(),
    offers: "0%",
    // Default
    offer_description: ""
    // Default
  };
}

export { mapSupabaseCarToUI as m };
