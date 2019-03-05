export interface IEvent {
  id: number;
  name: string;
  date: string;
  time: string;
  price: number;
  imageUrl: string;
  location?: ILocation;
  onlineUrl?: string;
}

interface ILocation {
  address: string;
  city: string;
  country: string;
}
