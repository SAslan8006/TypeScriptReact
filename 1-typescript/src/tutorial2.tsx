interface Message {
  text: string;
  from: string;
  time: string;
}

// displayMessage({ text: "Hello", from: "John", time: "10:00" });

// export default function displayMessage(message: Message) {
//   console.log(message.text);
//   console.log(message.from);
//   console.log(message.time);
// }

interface Message {
  text: string;
  sender: string;
}

export default function displayMessage1({ text, sender }: Message) {
  console.log(`Message from ${sender}: ${text}`);
}

displayMessage1({ sender: "Christopher", text: "hello, world" });

let addThreeNumbers = (x: number, y: number, z?: number): number => {
  if (z === undefined) {
    return x + y;
  } else {
    return x + y + z;
  }
};

console.log(addThreeNumbers(1, 2));
console.log(addThreeNumbers(1, 2, 3));
