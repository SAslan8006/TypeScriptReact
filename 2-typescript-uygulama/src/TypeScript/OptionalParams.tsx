import React from "react";

function OptionalParams() {
  return <div>OptionalParams</div>;
}

export default OptionalParams;

//Optional Params (Opsiyonel Parametreler)

//TypeScript ile oluşturduğumuz objelerde (type, interface) veya fonksiyonlarda parametreleri opsiyonel olduğunu belirtmek için parametreIsmı?: şeklinde ? ni kullanabiliriz.

//Aşağıda opsiyonel parametre kullanımı örneklerini inceleyebilirsiniz.
const fullName = (firstName: string, lastName?: string) => {
  console.log(firstName + lastName);
};

console.log(fullName("osman", "veli"));

type User = (name: string, surname?: string) => void;

const getFullName: User = (name, surname) => {
  console.log(`${name} ${surname}`);
};

console.log(getFullName("osman"));
