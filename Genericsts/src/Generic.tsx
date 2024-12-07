import React from "react";

function Generic() {
  return <div>Generic</div>;
}

export default Generic;

function getFirstElement<Type>(arr: Type[]): Type {
  return arr[0];
}

const numbers = [1, 2, 3];

const firstElement = getFirstElement(numbers);
console.log(firstElement); // Output: 1
const strings = ["hello", "world"];

const firstString = getFirstElement<string>(strings);
console.log(firstString); // Output: "hello"

const a = [1, 2, 3];
a.map(() => {});

const map = new Map<string, number>();
map.set("a", 1);
console.log(map.get("a"));
