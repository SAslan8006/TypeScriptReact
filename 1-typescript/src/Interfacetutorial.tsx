interface Vehicle {
  make: string;
  color: string;
  doors: number;
  accelerate(speed: number): string;
  brake(): string;
  turn(direction: "left" | "right"): string;
}

class Car implements Vehicle {
  make: string;
  color: string;
  doors: number;
  constructor(make: string, color: string, doors: number) {
    this.make = make;
    this.color = color;
    this.doors = doors;
  }
  accelerate(speed: number): string {
    return `accelerating to ${speed}mph`;
  }
  brake(): string {
    return "braking";
  }
  turn(direction: "left" | "right"): string {
    return `turning ${direction}`;
  }
}

console.log(new Car("Tesla", "black", 4));
console.log(new Car("Tesla", "black", 5));
console.log(new Car("Tesla", "black", 4).turn("right"));
console.log(new Car("Tesla", "black", 4).accelerate(100));
import React from "react";

function interfacetutorial() {
  return <div>interfacetutorial</div>;
}

export default interfacetutorial;
