export interface MenuItem {
  id: string;
  name: string;
  description?: string;
  price: number;
  category: string;
  image?: string;
  featured?: boolean;
}

export interface LocationInfo {
  id: string;
  name: string;
  address: string;
  phone: string;
  schedule: string;
  mapUrl?: string;
}
