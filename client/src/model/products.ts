import data from "C:\Users\Dat Guy\Desktop\Web-programming\client\src\data\products";

export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

export function getProducts(): Product[] {
  return data.products;
}