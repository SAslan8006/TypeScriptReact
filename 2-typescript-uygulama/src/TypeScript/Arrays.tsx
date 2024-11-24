import React from "react";

function Arrays() {
  return <div>Arrays</div>;
}

export default Arrays;

//TypeScript ile array içindeki elemanların tip tanımlamasını yaparken aşağıdaki gibi yapabiliriz.

let users: string[];
users = ["ayse", "ali", "veli"];
console.log(users);

let list: Array<number> = [1, 2, 3];
console.log(list);
