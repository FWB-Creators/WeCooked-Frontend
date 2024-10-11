export interface Course {
  title: string;
  cuisine: string;
  price: {
    value: number;
    formatted: string;
  };
  rating: number;
  chef: string;
  imageSrc: string;
}