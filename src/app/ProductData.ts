export interface ProductData {
  id: number;
  brandName: string;
  name: string;
  articles: [
    {
      id: number;
      shortDescription: string;
      price: number;
      unit: string;
      pricePerUnitText: string;
      image: string;
    }
  ];
}
