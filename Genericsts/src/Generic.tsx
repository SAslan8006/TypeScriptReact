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

const map = new Map<string, number>([["a", 1]]);
map.set("a", 1);
console.log(map.get("a"));
console.log(map.values(1));

const map2 = new Map<string, Map<string, number>>();

type ApiResponse<T> = {
  data: T;
  status: number;
  message: string;
};

type User = {
  id: number;
  name: string;
  isActive: boolean;
};

type UserResponse = ApiResponse<User>;

const response: UserResponse = {
  data: {
    id: 1,
    name: "Ahmet",
    isActive: true,
  },
  status: 200,
  message: "success",
};
console.log(response);
type BlogResponse = ApiResponse<{ title: string }>;

const blogResponse: BlogResponse = {
  data: {
    title: "My Blog",
  },
  status: 200,
  message: "success",
};
console.log(blogResponse);

type ApiResponse12<Data extends object> = {
  data: Data;
  isError: boolean;
};
const response2: ApiResponse12<{ name: string }> = {
  data: { name: "John" },
  isError: false,
};

console.log(response2);
