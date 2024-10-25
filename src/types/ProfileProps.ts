type LocationType = {
  country: string;
  state: string;
  locality: string;
  postalCode: string | number;
  heigh: string | number;
  detail: string;
};

export interface ProfileProps {
  name: string;
  userName: string;
  email: string;
  dni: string | number | null;
  phone: string | number | null;
  location: LocationType | null;
}
