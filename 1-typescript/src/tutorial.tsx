function tutorial() {
  return <div>tutorial</div>;
}

export default tutorial;

let tax: number | string = 10;
tax = 100; // Geçerli
tax = "$10"; // Geçerli

console.log(tax); // Use the value of tax

let loading: "pending" | "success" | "error" = "pending";
loading = "success"; // Geçerli
loading = "error"; // Geçerli

console.log(loading); // Son durumda: "error"

// let notSure: any = 4;
let notSure: unknown = 4;
notSure = "maybe a string instead";
notSure = false; // Geçerli

console.log(notSure);

const books: string[] = ["1984", "Brave New World", "Fahrenheit 451"];
const foundBook: string | undefined = books.find((book) => book === "1984");
// const foundBook: string | undefined = books.find((book) => book === "1984");
console.log(foundBook?.length);

console.log(books[0]); // 1984

let discounter: number | null = null;
discounter = 10;
console.log(discounter);

let prices: (string | number)[] = [1, 2, 3];

prices = ["$1", "$2", "$3", 2 * 2];

console.log(prices);

interface IceCream {
  flavor?: string;
  scoops: number;
}

const vanillaIceCream: IceCream = {
  scoops: 2,
};

console.log(vanillaIceCream);

function tooManyScoops(dessert: IceCream) {
  if (dessert.scoops >= 4) {
    return dessert.scoops + " is too many scoops!";
  } else {
    return "Your order will be ready soon!";
  }
}

console.log(tooManyScoops({ flavor: "vanilla", scoops: 5 }));

interface IceCreamArray {
  [index: number]: string;
}

let myIceCream1: IceCreamArray;
myIceCream1 = ["chocolate", "vanilla", "strawberry"];
let myStr: string = myIceCream1[0];
console.log(myStr);

//Anonim işlevler
function addNumbers(x: number, y: number): number {
  return x + y;
}
addNumbers(1, 2);

const sum = function (input: number[]): number {
  let total: number = 0;
  for (let i = 0; i < input.length; i++) {
    if (isNaN(input[i])) {
      continue;
    }
    total += Number(input[i]);
  }
  return total;
};

console.log(sum([1, 2, 3]));

function displayAlert(message: string | number) {
  alert("The message is " + message);
}

displayAlert("Hello");

function addNumbers(x: number, y: number): number {
  return x + y;
}

addNumbers(1, 2); // Returns 3
//addNumbers(1);    // Returns an error

let addAllNumbers = (
  firstNumber: number,
  ...restOfNumbers: number[]
): number => {
  let total: number = firstNumber;
  for (let counter = 0; counter < restOfNumbers.length; counter++) {
    if (isNaN(restOfNumbers[counter])) {
      continue;
    }
    total += Number(restOfNumbers[counter]);
  }
  return total;
};

addAllNumbers(1, 2, 3, 4, 5, 6, 7); // returns 28
addAllNumbers(2); // returns 2
addAllNumbers(2, 3, "three"); // flags error due to data type at design time, returns 5
