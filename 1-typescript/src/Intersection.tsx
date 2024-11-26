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
