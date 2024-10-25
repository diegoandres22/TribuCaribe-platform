export interface Variante {
  id: number;
  nombre: string;
  imagen: string;
}

export interface VariantesProps {
  variantes: Variante[];
}
