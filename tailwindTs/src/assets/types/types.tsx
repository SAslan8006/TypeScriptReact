import { statistic, shoes, products } from "./../../constants";

export type Statistic = {
  value: string;
  label: string;
};

export const statistic1: Statistic[] = statistic;

export type Shoe = {
  thumbnail: string;
  bigShoe: string;
};

export const shoes1: Shoe[] = shoes;

export type ShoeCardProps = {
  imgURL: Shoe;
  changeBigShoeImage: (url: string) => void;
  bigShoeImg: string;
};

export type Product = {
  imgURL: string;
  name: string;
  price: number;
};

export const product1: Product[] = products;
