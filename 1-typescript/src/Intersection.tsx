import React from "react";

function Intersection() {
  return <div>Intersection</div>;
}

export default Intersection;

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
