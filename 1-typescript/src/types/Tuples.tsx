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

const numericEnumValue: NumericEnum = 1; // This is allowed
console.log(numericEnumValue); // 1

const stringEnumValue: StringEnum = "Value"; // This is not allowed

enum ServerResponseStatus4 {
  Success = "Success",
  Error = "Error",
}

// Define an enum named UserRole
enum UserRole {
  Admin,
  Manager,
  Employee,
}

// Define a type alias named User
type User = {
  id: number;
  name: string;
  role: UserRole;
  contact: [string, string]; // Tuple: [email, phone]
};

// Define a function named createUser
function createUser(user: User): User {
  return user;
}

// Call the createUser function
const user: User = createUser({
  id: 1,
  name: "John Doe",
  role: UserRole.Admin,
  contact: ["john.doe@example.com", "123-456-7890"],
});

console.log(user);

let someValue: any = "This is a string";

// Using type assertion to treat 'someValue' as a string
let strLength: number = (someValue as string).length;

type Bird = {
  name: string;
};

// Assume we have a JSON string from an API or local file
let birdString = '{"name": "Eagle"}';
let dogString = '{"breed": "Poodle"}';

//

// Parse the JSON string into an object
let birdObject = JSON.parse(birdString);
let dogObject = JSON.parse(dogString);

// We're sure that the jsonObject is actually a Bird
let bird = birdObject as Bird;
let dog = dogObject as Bird;

console.log(bird.name);
console.log(dog.name);

enum Status {
  Pending = "pending",
  Declined = "declined",
}

type Usera = {
  name: string;
  status: Status;
};
// save Status.Pending in the DB as a string
// retrieve string from the DB
const statusValue = "pending";

const userada: Usera = { name: "john", status: statusValue as Status };
console.log(userada);
