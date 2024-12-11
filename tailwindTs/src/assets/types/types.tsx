import { statistic, shoes } from "./../../constants";

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
