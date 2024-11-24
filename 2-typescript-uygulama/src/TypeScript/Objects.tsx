import React from "react";

function Objects() {
  return <div>Objects</div>;
}

export default Objects;

// Obje tanımlaması yaparken, aşağıda ki yöntem ile tek tek obje içindeki elemanların tiplerini yazarak tip tanımlaması yapabileceğimiz gibi, type ve Interface ile de tip tanımlaması yapılabilir.

const user: {
  name: string;
  age: number;
} = {
  name: "",
  age: 0,
};

user.name = "osman";
user.age = 14;

console.log(user);

const user2: { name: string; age: number } = {
  name: "osman",
  age: 14,
};
console.log(user2);
