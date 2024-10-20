//Props para pasar productos al componente de ProductDetail
export interface productsProps {
  image: string;
  name: string;
  percent?: number;
  price: number;
  description: string;
}

//propr para tabla de características del producto
interface ProductFeature {
  name: string;
  role: string;
}
export interface ProductFeaturesProps {
  data: ProductFeature[];
}

// Props para selección de cantidad
type Price = {
  range: string;
  amount: string;
};
export interface PriceperquantityProps {
  prices: Price[];
}

//Props para sección ProductTitleAndImageSections
export interface ProductTitleAndImageSectionProps {
  title: string;
  brand: string;
  imageSrc: string;
  imageAlt: string;
  isFavorite: boolean;
}

//Corazón de favoritos
export interface HeartFavoritesProps {
  isFavorite: boolean;
  onClick?: () => void;
}

// StarsProps.ts
export interface StarsProps {
  rating: number; // Cantidad de estrellas a pintar
  maxStars?: number; // Número máximo de estrellas (opcional, por defecto 5)
}
