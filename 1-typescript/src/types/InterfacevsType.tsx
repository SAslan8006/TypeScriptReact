import React from "react";

function InterfacevsType() {
  return <div>InterfacevsType</div>;
}

export default InterfacevsType;

//Interface vs Type Alias
function getEmpolee(): Person | DogOwner | Manager {
  const random = Math.random();
  if (random < 0.5) {
    return {
      name: "John",
    };
  } else if (random < 0.8) {
    return {
      name: "John",
      age: 30,
    };
  } else {
    return {
      name: "John",
      age: 30,
      dogName: "Fido",
    };
  }
}
type Person = {
  name: string;
  age: number;
};

interface DogOwner extends Person {
  dogName: string;
}

interface Manager extends Person {
  managePeople(): void;
  delegateTasks(): void;
}

const employee: Person | DogOwner | Manager = getEmployee();
console.log(employee);

function getEmployee(): Person | DogOwner | Manager {
  const random = Math.random();

  if (random < 0.33) {
    return {
      name: "john",
    };
  } else if (random < 0.66) {
    return {
      name: "sarah",
      dogName: "Rex",
    };
  } else {
    return {
      name: "bob",
      managePeople: () => console.log("Managing people..."),
      delegateTasks: () => console.log("Delegating tasks..."),
    };
  }
}
const john: Person = { name: "John", age: 30 };
// function isManager(obj: Person | DogOwner | Manager): boolean {
//   return 'managePeople' in obj;
// }

function isManager(obj: Person | DogOwner | Manager): obj is Manager {
  return "managePeople" in obj;
}

if (isManager(employee)) {
  employee.delegateTasks();
}

console.log(john);

interface Personb {
  name: string;
  age: number;
}

const johnb: Personb = { name: "John", age: 30 };

console.log(johnb);

// Type alias for a primitive type
type Score = number;
type NumberOrString = number | string;
// Type alias for literal types
type Direction = "up" | "down" | "left" | "right";

// Using the type aliases
let gameScore: Score = 100;
let move: Direction = "up";
