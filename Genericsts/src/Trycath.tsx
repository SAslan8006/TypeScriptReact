import React from "react";

function trycath() {
  return <div>trycath</div>;
}

export default trycath;

function wait(duration: number) {
  return new Promise((resolve) => setTimeout(resolve, duration));
}

function catchError<T>(promise: Promise<T>): Promise<undefined, T | [Error]> {
  return promise
    .then((value) => [undefined, data] as [undefined, T])
    .catch((error) => [error]);
}
async function main() {
  try {
    await wait(1000);
    console.log("done");
  } catch (error) {
    console.log(error);
  }
}

main();
async function getUser(id: number) {
  try {
    await wait(1000);
    console.log("done");
  } catch (error) {
    console.log(error);
  }
}

getUser(1);
const user = catchError(getUser(1));
console.log(user);
