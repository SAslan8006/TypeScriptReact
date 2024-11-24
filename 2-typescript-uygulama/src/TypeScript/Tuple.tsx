import React from "react";

function Tuple() {
  return <div>Tuple</div>;
}

export default Tuple;

//Tuple, türleri bilinen ancak aynı olması gerekmeyen sabit sayıda öğeye sahip bir diziyi ifade etmemize olanak tanır.

let users: [string, number, boolean];
users = ["ayse", 5, true];
console.log(users);
