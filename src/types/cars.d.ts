interface Car {
  id: string;
  name: string;
  model: string;
  price: number;
  features: {
    seater: number;
    transmission: string;
    fuel: string;
    color: string;
  };
  images: string[];
  offers: string;
  offer_description: string;
}
