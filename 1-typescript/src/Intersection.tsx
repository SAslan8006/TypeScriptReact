import React from "react";

function Intersection() {
  return <div>Intersection</div>;
}

export default Intersection;

type Employee = { id: number; name: string; department: string };
type Manager = { id: number; name: string; employees: Employee[] };

const alice: Employee = { id: 1, name: "Alice", department: "Sales" };
const steve: Employee = { id: 1, name: "Steve", department: "HR" };

const bob: Manager = { id: 1, name: "Bob", employees: [alice, steve] };

type Staff = Employee | Manager;
const staff: Staff = bob; // Error: Type 'Manager' is not assignable to type '
printStaffDetails(staff);
function printStaffDetails(staff: Staff): void {
  if ("employees" in staff) {
    console.log("Yönetici: " + staff.name);
  }
}

console.log(bob);
// Tür Tanımlamaları
type Book = { id: number; name: string; price: number };
type DiscountedBook = Book & { discount: number };

// Kitap Nesneleri
const bookA: Book = {
  id: 2,
  name: "How to Cook a Dragon",
  price: 15,
};

const bookB: Book = {
  id: 3,
  name: "The Secret Life of Unicorns",
  price: 18,
};

const discountedBook: DiscountedBook = {
  id: 4,
  name: "Gnomes vs. Goblins: The Ultimate Guide",
  price: 25,
  discount: 0.15,
};

// Çıktılar
console.log(bookA);
console.log(bookB);
console.log(discountedBook);

const propName = "age";

type Animal = {
  [propName]: number;
};

let tiger: Animal = { [propName]: 5 };

interface Book1 {
  readonly isbn: number;
  title: string;
  author: string;
  genre?: string;
}

const deepWork: Book1 = {
  isbn: 9781455586691,
  title: "Deep Work",
  author: "Cal Newport",
  genre: "Self-help",
};

deepWork.title = "New Title"; // allowed
// deepWork.isbn = 654321; // not allowed

interface Book3 {
  readonly isbn: number;
  title: string;
  author: string;
  genre?: string;
  // method
  printAuthor(): void;
  printTitle(message: string): string;
}
const deepWork2: Book3 = {
  isbn: 9781455586691,
  title: "Deep Work",
  author: "Cal Newport",
  genre: "Self-help",
  printAuthor() {
    console.log(this.author);
  },
  printTitle(message) {
    return `${this.title} ${message}`;
  },
};
deepWork2.printAuthor();
const result = deepWork2.printTitle("is an awesome book");
console.log(result);

interface Bookc {
  readonly isbn: number;
  title: string;
  author: string;
  genre?: string;
  // method
  printAuthor(): void;
  printTitle(message: string): string;
}

const deepWorkc: Bookc = {
  isbn: 9781455586691,
  title: "Deep Work",
  author: "Cal Newport",
  genre: "Self-help",
  printAuthor() {
    console.log(this.author);
  },
  printTitle(message) {
    return `${this.title} ${message}`;
  },
};
deepWorkc.printAuthor();
const resultc = deepWorkc.printTitle("is an awesome book");
console.log(resultc);

interface Bookd {
  readonly isbn: number;
  title: string;
  author: string;
  genre?: string;
  // method
  printAuthor(): void;
  printTitle(message: string): string;
  printSomething: (someValue: number) => number;
}

const deepWorkd: Bookd = {
  isbn: 9781455586691,
  title: "Deep Work",
  author: "Cal Newport",
  genre: "Self-help",
  printAuthor() {
    console.log(this.author);
  },
  printTitle(message) {
    return `${this.title} ${message}`;
  },
  // first option
  // printSomething: function (someValue) {
  //   return someValue;
  // },
  // second option
  printSomething: (someValue) => {
    // "this" gotcha
    console.log(deepWorkd.author);
    return someValue;
  },
  // third option
  // printSomething(someValue) {
  //   return someValue;
  // },
  // alternative
  // printAuthor: () => {
  //   console.log(deepWork.author);
  // },
};
console.log(deepWorkd.printSomething(34));

deepWorkd.printAuthor();
const resultd = deepWorkd.printTitle("is an awesome book");
console.log(resultd);

interface Computer {
  readonly id: number; // cannot be changed once initialized
  brand: string;
  ram: number;
  upgradeRam(increase: number): number;
  storage?: number; // optional property
}

const laptop: Computer = {
  id: 1,
  brand: "random brand",
  ram: 8, // in GB
  upgradeRam(amount: number) {
    this.ram += amount;
    return this.ram;
  },
};

laptop.storage = 256; // assigning value to optional property

console.log(laptop.upgradeRam(4)); // upgrades RAM by 4GB
console.log(laptop);

interface Person {
  name: string;
  getDetails(): string;
}

interface DogOwner {
  dogName: string;
  getDogDetails(): string;
}

// Merging (reopening) an interface in TypeScript is a process where you declare an interface with the same name more than once, and TypeScript will merge their members.

// Merging the interface
interface Persond {
  age: number;
  name: string;
  getDetails(): string;
}

// Usage
const persond: Persond = {
  name: "John",
  age: 30,
  getDetails() {
    return `Name: ${this.name}, Age: ${this.age}`;
  },
};

// Extending an interface in TypeScript is a way to create a new interface that inherits the properties and methods of an existing interface. You use the extends keyword to do this. When you extend an interface, the new interface will have all the members of the base interface, plus any new members that you add.

// Extending the interface
interface Employeed extends Persond {
  employeeId: number;
  delegateTasks(): string;
}

const employee: Employeed = {
  name: "jane",
  age: 28,
  employeeId: 123,
  getDetails() {
    return `Name: ${this.name}, Age: ${this.age}, Employee ID: ${this.employeeId}`;
  },
  delegateTasks() {
    return "Delegate tasks to team members";
  },
};

// Interface multiple inheritance
interface Managerd extends Persond, DogOwner {
  managePeople(): void;
}

const manager: Managerd = {
  name: "Bob",
  age: 35,
  dogName: "Rex",
  getDetails() {
    return `Name: ${this.name}, Age: ${this.age}`;
  },
  getDogDetails() {
    return `Dog Name: ${this.dogName}`;
  },
  managePeople() {
    console.log("Managing people...");
  },
};

console.log(manager);

// function isManager(obj: Person | DogOwner | Manager): boolean {
//   return 'managePeople' in obj;
// }

function isManager(obj: Person | DogOwner | Manager): obj is Manager {
  return "managePeople" in obj;
}

if (isManager(employee)) {
  employee.delegateTasks();
}
