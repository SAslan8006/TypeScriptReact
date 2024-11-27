import React from "react";

function GenelTürler() {
  return <div>GenelTürler</div>;
}

export default GenelTürler;

function getArray<T>(items: T[]): T[] {
  return new Array<T>().concat(items);
}
let numberArray = getArray<number>([5, 10, 15, 20]);
numberArray.push(25); // OK
numberArray.push("This is not a number"); // Generates a compile time type check error
console.log(numberArray);

let stringArray = getArray<string>(["Cats", "Dogs", "Birds"]);
stringArray.push("Rabbits"); // OK
stringArray.push(30); // Generates a compile time type check error
console.log(stringArray);

type ValidTypes = string | number;
function identity<T extends ValidTypes, U>(value: T, message: U) {
  // Return type is inferred
  let result: ValidTypes = "";
  let typeValue: string = typeof value;

  if (typeof value === "number") {
    // Is it a number?
    result = value + value; // OK
  } else if (typeof value === "string") {
    // Is it a string?
    result = value + value; // OK
  }

  console.log(
    `The message is ${message} and the function returns a ${typeValue} value of ${result}`
  );

  return result;
}

let numberValue = identity<number, string>(100, "Hello");
let stringValue = identity<string, string>("100", "Hello");

console.log(numberValue); // Returns 200
console.log(stringValue); // Returns 100100

class Car {
  make: string = "Generic Car";
  doors: number = 4;
}
class ElectricCar extends Car {
  make = "Electric Car";
  doors = 4;
}
class Truck extends Car {
  make = "Truck";
  doors = 2;
}
function accelerate<T extends Car>(car: T): T {
  console.log(`All ${car.doors} doors are closed.`);
  console.log(`The ${car.make} is now accelerating!`);
  return car;
}

let myElectricCar = new ElectricCar();
accelerate<ElectricCar>(myElectricCar);
let myTruck = new Truck();
accelerate<Truck>(myTruck);
