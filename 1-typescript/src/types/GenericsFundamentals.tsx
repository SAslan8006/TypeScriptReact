import React from "react";

function GenericsFundamentals() {
  return <div>GenericsFundamentals</div>;
}

export default GenericsFundamentals;

// In TypeScript, you can declare an array using two syntaxes:

// let array1: string[] = ['Apple', 'Banana', 'Mango'];
// let array2: number[] = [1, 2, 3];
// let array3: boolean[] = [true, false, true];

let array1: Array<string> = ["Apple", "Banana", "Mango"];
let array2: Array<number> = [1, 2, 3];
let array3: Array<boolean> = [true, false, true];

//
function createString(arg: string): string {
  return arg;
}
function createNumber(arg: number): number {
  return arg;
}

// Define a generic function
function genericFunction<T>(arg: T): T {
  return arg;
}
//Generic Fonksiyon İyileştirme: Generic fonksiyonlar, varsayılan tiplerle daha esnek hale getirilebilir:

const someStringValue = genericFunction<string>("Hello World");
const someNumberValue = genericFunction<number>(2);

// Define a generic interface
interface GenericInterface<T> {
  value: T;
  getValue: () => T;
}

const genericString: GenericInterface<string> = {
  value: "Hello World",
  getValue() {
    return this.value;
  },
};

// A Promise in JavaScript (and thus TypeScript) is an object representing the eventual completion or failure of an asynchronous operation.
// Async function with Promise
async function someFunc(): Promise<string> {
  return "Hello World";
}

const result = someFunc();

console.log(result);
