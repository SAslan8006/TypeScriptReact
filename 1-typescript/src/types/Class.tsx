import React from "react";

function Class() {
  return <div>Class</div>;
}

export default Class;

class Book {
  title: string;
  author: string;
  checkedOut: boolean = false;
  constructor(title: string, author: string) {
    this.title = title;
    this.author = author;
  }
}

const deepWork = new Book("deep work ", "cal newport");

const deepWork1 = new Book("deep work ", "cal newport");
deepWork1.checkedOut = true;
// deepWork1.checkedOut = 'something else';

console.log(deepWork);

class Book1 {
  readonly title: string;
  author: string;
  checkedOut: boolean = false;
  constructor(title: string, author: string) {
    this.title = title;
    this.author = author;
  }
}

const deepWork1A = new Book1("deep work ", "cal newport");
console.log(deepWork1A);
// deepWork1A.title = "something else";

class Book2 {
  public readonly title: string;
  public author: string;
  private checkedOut: boolean = false;
  constructor(title: string, author: string) {
    this.title = title;
    this.author = author;
  }
  public checkOut() {
    this.checkedOut = this.toggleCheckedOutStatus();
  }
  public isCheckedOut() {
    return this.checkedOut;
  }
  private toggleCheckedOutStatus() {
    return !this.checkedOut;
  }
}

const deepWork2A = new Book2("Deep Work", "Cal Newport");
deepWork2A.checkOut();
console.log(deepWork2A.isCheckedOut()); // true
// deepWork.toggleCheckedOutStatus(); // Error: Property 'toggleCheckedOutStatus' is private and only accessible within class 'Book'.

class Book3 {
  private checkedOut: boolean = false;
  constructor(public readonly title: string, public author: string) {}
}

class Book4 {
  private checkedOut: boolean = false;
  constructor(public readonly title: string, public author: string) {}
  get info() {
    return `${this.title} by ${this.author}`;
  }

  private set checkOut(checkedOut: boolean) {
    this.checkedOut = checkedOut;
  }
  get checkOut() {
    return this.checkedOut;
  }
  public get someInfo() {
    this.checkOut = true;
    return `${this.title} by ${this.author}`;
  }
}

const deepWork4a = new Book4("deep work", "cal newport");
console.log(deepWork4a.info);
// deepWork.checkOut = true;
console.log(deepWork4a.someInfo);
console.log(deepWork4a.checkOut);

interface IPerson {
  name: string;
  age: number;
  greet(): void;
}

class Person implements IPerson {
  constructor(public name: string, public age: number) {}

  greet() {
    console.log(
      `Hello, my name is ${this.name} and I'm ${this.age} years old.`
    );
  }
}

const hipster = new Person("shakeAndBake", 100);
hipster.greet();
