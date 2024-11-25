import React from "react";

function Fonksiyonlar() {
  return <div>Fonksiyonlar</div>;
}

export default Fonksiyonlar;

function sayHi(name: string): void {
  console.log(`Hello there ${name.toUpperCase()}!!!`);
}

sayHi("john");
// sayHi(3)
// sayHi('peter', 'random');

function calculateDiscount(price: number): number {
  // price.toUpperCase();
  const hasDiscount: boolean = true;
  if (hasDiscount) {
    return price;
    // return 'Discount Applied';
  }
  return price * 0.9;
}

const finalPrice = calculateDiscount(400);
console.log(finalPrice);

// "any" example
function addThree(number: any | unknown) {
  const anotherNumber: number = 3;
  return number + anotherNumber;
}
const result = addThree(2);
const someValue: number = result;

console.log(someValue);
// run time error
// someValue.myMethod();
