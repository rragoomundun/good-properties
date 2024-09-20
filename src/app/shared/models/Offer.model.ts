export interface Offer {
  id: number;
  type_of_good: string;
  transaction_type: string;
  square_meters: number;
  nb_rooms: number;
  nb_bedrooms: number;
  price: number;
  description: string;
  city_id: number;
  images: string[];
  features: {
    general: string[];
    indoor: string[];
    outdoor: string[];
  };
  contact: {
    email: string;
    telephone: string;
    whatsapp: string;
  };
}
