import {
  statistic,
  shoes,
  services,
  products,
  reviews,
  footerLinks,
  socialMedia,
} from "../constants";

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

export type ButtonProps = {
  label: string;
  iconURL?: string; // Eğer URL ise tür string olmalı
  backgroundColor?: string;
  textColor?: string;
  borderColor?: string;
  fullWidth?: boolean;
};

export type ServiceProps = {
  imgURL: string;
  label: string;
  subtext: string;
};

export const services1: ServiceProps[] = services;

export type Review = {
  imgURL: string;
  customerName: string;
  rating: number;
  feedback: string;
};

export const reviews1: Review[] = reviews;

export type ReviewCardProps = Review;

export type link = {
  name: string;
  link: string;
};

export type footerLinks = {
  title: string;
  links: link[];
};

export const footerLinks1: footerLinks[] = footerLinks;

export type socialMedias = {
  src: string;
  alt: string;
};

export const socialMedia1: socialMedias[] = socialMedia;
