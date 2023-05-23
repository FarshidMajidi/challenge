import http from "./httpServices";

export interface IProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: IRating;
}

interface IRating {
  rate: number;
  count: number;
}

export interface IUser {
  address: IAddress;
  id: number;
  email: string;
  username: string;
  password: string;
  name: IName;
  phone: string;
  __v: number;
}

interface IAddress {
  geolocation: IGeolocation;
  city: string;
  street: string;
  number: number;
  zipcode: string;
}

interface IGeolocation {
  lat: string;
  long: string;
}

interface IName {
  firstname: string;
  lastname: string;
}

export const getUsers = async () => {
  const res = await http.get<IUser[]>(`/users`);

  return res.data;
};

export const getProducts = async () => {
    const res = await http.get<IProduct[]>(`/products`);
  
    return res.data;
  };
