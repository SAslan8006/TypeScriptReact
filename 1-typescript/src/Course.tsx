import React from "react";

function Course() {
  return <div>Course</div>;
}

export default Course;

const car: { brand: string; year: number } = { brand: "toyota", year: 2020 };
car.brand = "ford";
// car.color = 'blue';

const car1: { brand: string; year: number } = { brand: "audi", year: 2021 };
// let car2: { brand: string; year: number } = { brand: 'audi' };

console.log(car1);

let book = { title: "book", cost: 20 };
let pen = { title: "pen", cost: 5 };
let notebook = { title: "notebook" };

const items: { readonly title: string; cost?: number }[] = [
  book,
  pen,
  notebook,
];
//Readonly okunabilir için kullanılmaktadır.
//const ? ifadesi ise isteğe bağlı olması için kullanılmaktadır.
items[0].title = "new book"; // Error: Cannot assign to 'title' because it is a read-only property

console.log(items);
