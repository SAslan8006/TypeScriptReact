import React from "react";

class Car {
  private _make: string;
  private _color: string;
  private _doors: number;

  constructor(make: string, color: string, doors = 4) {
    this._make = make;
    this._color = color;
    if (doors % 2 === 0) {
      this._doors = doors;
    } else {
      throw new Error("Doors must be an even number");
    }
  }
}

function sinifBildirme() {
  return <div>sinifBildirme</div>;
}

export default sinifBildirme;

let myCar3 = new Car("Galaxy Motors", "gray");
console.log(myCar3);

class ElectricCar extends Car {
  // Properties unique to ElectricCar
  // Properties
  private _range: number;
  // Constructor
  constructor(make: string, color: string, range: number, doors = 2) {
    super(make, color, doors);
    this._range = range;
  }
  // Accessors
  get range() {
    return this._range;
  }
  set range(range) {
    this._range = range;
  }
  // Methods
  charge() {
    console.log(" is charging.");
  }
}

let spark = new ElectricCar("Spark Motors", "silver", 124, 2);
let eCar = new ElectricCar("Electric Car Co.", "black", 263);
console.log(eCar.doors); // returns the default, 2
console.log(spark.charge()); // returns "Spark Motors is charging"
