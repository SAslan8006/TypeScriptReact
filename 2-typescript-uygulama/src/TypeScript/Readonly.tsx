import React from "react";

function Readonly() {
  return <div>Readonly</div>;
}

export default Readonly;

//Class, type veya interfacelerde bir özelliği sadece okunabilir yapmak için readonly kullanabiliriz.

class Employee {
  readonly empCode: number;
  empName: string;

  constructor(code: number, name: string) {
    this.empCode = code;
    this.empName = name;
  }
}
let emp = new Employee(10, "John");
emp.empCode = 20; //Compiler Error
emp.empName = "Bill";

console.log(emp);

interface IEmployee {
  readonly empCode: number;
  empName: string;
}

let empObj1: IEmployee = {
  empCode: 1,
  empName: "Steve",
};

empObj1.empCode = 100; // Compiler Error: Cannot change readonly 'empCode'

console.log(empObj1);

//Readonly<> kullanarak bir obje içerisindeki tüm elemanları readonly olarak tanımlayabiliriz.

interface IEmployee {
  empCode: number;
  empName: string;
}

let emp1: Readonly<IEmployee> = {
  empCode: 1,
  empName: "Steve",
};

emp1.empCode = 300; // Compiler Error: Cannot change readonly 'empCode'
emp1.empName = "fffBill"; // Compiler Error: Cannot change readonly 'empName'

let emp2: IEmployee = {
  empCode: 23,
  empName: "Steve",
};

emp2.empCode = 1200; // OK
emp2.empName = "Bill"; // OK

console.log(emp1);
console.log(emp2);
