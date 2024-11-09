export interface CardOfDealsProps {
  imageSrc: string;
  discount: string;
  brand: string;
  description: string;
  ImageBrand: string;
}
// Tipado para los datos de Lightning Deals
interface LightningDealItem {
  ID: number; 
  image: string;
  name: string;
  price: number;
  description: string;
  percent: number;
}


export interface LightningDealsProps {
  dealsData: LightningDealItem[];
}