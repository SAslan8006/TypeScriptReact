import React from "react";

function Generics() {
  return <div>Generics</div>;
}

export default Generics;

// Generics

//Dinamik ve yeniden kullanılabilir kod yazmak söz konusu olduğunda **Kendini Tekrar Etme \(DRY\)** ilkesine uymak önemlidir. **Generic**, **TypeScript** de bunu yapmamızı sağlar.

//<type1,type2...typeN>` içerisine yapacağımız tip tanımlamaları ile generic tip tanımlamaları yapabiliriz.

//Örneklerle açıklamaya çalışalım.

function displayUser2<T, U>(name: T, id: U) {
  console.log(`${name} ${id}`);
}

displayUser2<string, string>("John", "1");

//Fonksiyonumuzun isminin hemen yanında `<T,U>` şeklinde bir generic görüyoruz. **T** name tipini, **U** ise id  tipini belirtmektedir. id tipini **number** yapmak istediğimizde tek yapmamız gereken fonksiyonumuzu çağırdığımız yerdeki generic tipini değiştirmektir.

function displayUser<T, U>(name: T, id: U) {
  console.log(`${name} ${id}`);
}

displayUser<string, number>("John", 1);
