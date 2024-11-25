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

function calculatePrice(price: number, discount?: number): number {
  return price - (discount || 0);
}

const priceAfterDiscount: number = calculatePrice(100, 20);
console.log(priceAfterDiscount); // Output: 80

const priceWithoutDiscount: number = calculatePrice(300);
console.log(priceWithoutDiscount); // Output: 300
function calculateScoreWithPenalty(
  initialScore: number,
  penaltyPoints: number = 0
): number {
  return initialScore - penaltyPoints;
}

function calculateScoreWithoutPenalty(baseScore: number): number {
  return baseScore;
}

const scoreAfterPenalty: number = calculateScoreWithPenalty(100, 20);
console.log(scoreAfterPenalty); // Output: 80

const scoreWithoutPenalty: number = calculateScoreWithoutPenalty(300);
console.log(scoreWithoutPenalty); // Output: 300
function sum(message: string, ...numbers: number[]): string {
  // Sayıları ikiyle çarpıp yazdırmak
  const doubled = numbers.map((num) => num * 2);
  console.log("Doubled numbers:", doubled); // Output: [2, 4, 6, 8, 10]

  // Sayıları toplamak
  let total: number = numbers.reduce((previous, current) => {
    return previous + current;
  }, 0);

  return `${message} ${total}`; // "The total is: 15"
}

const result221 = sum("The total is:", 1, 2, 3, 4, 5);
console.log(result221); // Output: "The total is: 15"

function createStudent(student: { id: number; name: string }) {
  console.log(`Welcome to the course ${student.name.toUpperCase()}!!!`);
}

const newStudent = {
  id: 5,
  name: "anna",
  email: "anna@gmail.com",
};

createStudent(newStudent);
createStudent({ id: 1, name: "bob", email: "bob@gmail.com" });

function processData(
  input: string | number,
  config: { reverse: boolean } = { reverse: false }
): string | number {
  if (typeof input === "number") {
    return input * input;
  } else {
    return config.reverse
      ? input.toUpperCase().split("").reverse().join("")
      : input.toUpperCase();
  }
}

console.log(processData(10)); // Output: 100
console.log(processData("Hello")); // Output: HELLO
console.log(processData("Hello", { reverse: true })); // Output: OLLEH
