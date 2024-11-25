import React, { useState } from "react";

function Fonksiyonlar() {
  const name: string = "John";
  const [firstName, setFirstName] = useState<string | null>("John");
  const toggleName = (): void => {
    setFirstName(firstName === "John" ? null : "John");
  };
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

const names: string[] = ["John", "Jane", "Jim", "Jill"];

function isNameInList(name: string): boolean {
  return names.includes(name);
}

const nameToCheck: string = "Jane";
if (isNameInList(nameToCheck)) {
  console.log(`${nameToCheck} is in the list.`);
} else {
  console.log(`${nameToCheck} is not in the list.`);
}
