import React from "react";

function Type() {
  return <div>Type</div>;
}

export default Type;

// Type type sözde öğesi ile tip objeleri oluşturabiliriz.

// Aşağıda iki örnekte type sözde öğesinin objelerde kullanımı gösterilmiştir.

type User = {
  name: string;
  age: number;
};

let user: User;

user = { name: "osman", age: 5 };

type Color = {
  name: "red";
  hex: string;
  contrast: "%40" | "%50";
};

let user1: User & { color: Color };

user1 = {
  name: "ayse",
  age: 5,
  color: {
    name: "red",
    hex: "123123",
    contrast: "%40",
  },
};

console.log(user1);

type Topla = (num1: number, num2: number) => number;

const topla: Topla = (num1, num2): number => {
  return num1 + num2;
};

console.log(topla(1, 2));
type FullName = {
  name: string;
  surname: string;
};

const getFullName = (params: FullName): void => {
  console.log(params.name + " " + params.surname);
};

getFullName({ name: "osman", surname: "veli" });
