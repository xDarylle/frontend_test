export type User = {
  id: number;
  firstName: string;
  lastName: string;
  maidenName: string;
  age: number,
  gender: string;
  email:string;
  phone: string;
  username: string;
  birthDate: string;
  image: string;
  bloodGroup: string;
  height: number;
  weight: number;
  eyeColor: string;
  hair: Hair;
  domain: string;
  address: Address;
  university: string;
  company: Company;
};

export type Address = {
  address: string;
  city: string;
  state: string;
  postalCode: string;
  coordinates: Coordinates;
};

export type Company = {
  name: string;
  department: string;
  title: string;
  address: Address;
};

export type Coordinates = {
  lat: string;
  lng: string;
};

export type Hair = {
  color: string;
  type: string;
}
