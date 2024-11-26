import React from "react";

function Tuples() {
  return <div>Tuples</div>;
}

export default Tuples;

const person: [string, number] = ["john", 25];
console.log(person[0]); // Outputs: john
console.log(person[1]); // Outputs: 25

let john: [string, number?] = ["john"];

function getPerson(): [string, number] {
  return ["john", 25];
}

const randomPerson = getPerson();
console.log(randomPerson[0]); // Outputs: john
console.log(randomPerson[1]);

// let susan: [string, number] = ['susan', 25];
// susan[0] = 'bob';
// susan.push('some random value');

const susan: readonly [string, number] = ["susan", 25];
// susan[0] = 'bob';
// susan.push('some random value');
console.log(susan);

enum ServerResponseStatus {
  Success = 200,
  Error = "Error",
}

interface ServerResponse3 {
  result: ServerResponseStatus;
  data: string[];
}

function getServerResponse(): ServerResponse3 {
  return {
    result: ServerResponseStatus.Success,
    data: ["first item", "second item"],
  };
}

const response: ServerResponse3 = getServerResponse();
console.log(response);

enum ServerResponseStatus2 {
  Success = "Success",
  Error = "Error",
}

Object.values(ServerResponseStatus2).forEach((value) => {
  console.log(value);
});

enum ServerResponseStatus3 {
  Success = 200,
  Error = 500,
}

Object.values(ServerResponseStatus3).forEach((value) => {
  if (typeof value === "number") {
    console.log(value);
  }
});

enum NumericEnum {
  Member = 1,
}

enum StringEnum {
  Member = "Value",
}

let numericEnumValue: NumericEnum = 1; // This is allowed
console.log(numericEnumValue); // 1

let stringEnumValue: StringEnum = "Value"; // This is not allowed

enum ServerResponseStatus4 {
  Success = "Success",
  Error = "Error",
}

function getServerResponse2(): ServerResponse3 {
  return {
    // result: ServerResponseStatus4.Success,
    // this will not fly with string enum but ok with number
    result: "Success",
    data: ["first item", "second item"],
  };
}
