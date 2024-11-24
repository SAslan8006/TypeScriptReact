import React from "react";

function Fonksiyonlar() {
  return <div>Fonksiyonlar</div>;
}

export default Fonksiyonlar;

//TypeScript ile oluşturduğumuz fonksiyonların parametrelerinin tiplerini aşağıdaki gibi belirleyebiliriz. Ayrıca type ve interface sayfalarında diğer yöntemleri de kullanabiliriz.
//Aşağıdaki gibi fonksiyonumuzun parametre tiplerini belirtebiliriz.

const add = (num1: number, num2: number) => {
  return num1 + num2;
};
console.log(add(2, 3));

//Fonksiyonumuzun döndüreceği değer önemli olduğu taktirde, aşağıdaki gibi fonksiyon parantezlerinin sonuna :type ile fonksiyonumuzun dönüş değerini tanımlayabiliriz.

const add1 = (num1: number, num2: number): number => {
  return num1 + num2;
};
let sum1: number;
sum1 = add1(2, 3);
console.log(sum1);

//Fonksiyonumuz herhangi bir değer döndürmüyorsa, void ile değer dönmediğimizi belirtebiliriz.
const add2 = (num1: number, num2: number): void => {
  console.log(num1 + num2);
};
console.log(add2(2, 3));

const printConsole = (keyword: string): void => {
  console.log(keyword);
};
printConsole("Hello");

//Default parametreler
//Fonksiyonumuzun parametrelerinde default parametre kullanmak istersek aşağıdaki örnekteki gibi parametreIsmi: parametreTipi = defaultParametre şeklinde default değer atayabiliriz.
const add3 = (num1: number, num2: number = 4) => {
  return num1 + num2;
};
console.log(add3(2));

//Rest parametreler
//Rest operatörü ile parametre tanımladığımızda, rest öğelerin tiplerini array tip tanımlaması yaptığımız gibi yapabiliriz.
//Aşağıdaki örnekte fonksiyonumuzda rest operatörü kullandığımızda nasıl tip tanımlaması yaptığımızı görebilirsiniz.

function Greet(greeting: string, ...names: string[]) {
  return greeting + " " + names.join(", ") + "!";
}

console.log(Greet("Hello", "Steve", "Bill")); // returns "Hello Steve, Bill!"

console.log(Greet("Hello")); // returns "Hello !"
