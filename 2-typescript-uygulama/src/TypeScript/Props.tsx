import React from "react";

function Props() {
  return <div>Props</div>;
}

export default Props;

//React projelerimizde propların tiplerini tanımlamak için farklı yöntemler vardır. Örneğin aşağıdaki gibi propların tipini direk tip objesiyle tanımlayabiliriz.
type PropTypes = {
  children?: JSX.Element;
  name?: "ahmet" | "fatih";
  surname?: string;
  key?: string;
};

const Character = (props: PropTypes) => {
  const { name, surname, children } = props;
  return (
    <div>
      <h1>{`${name} ${surname}`}</h1>
      {children}
    </div>
  );
};

//Bu tanımlamanın en büyük handikapı children ve key için de tip tanımlaması yapmamız gerekmektedir.

//Alternatif olarak ve sıklıkla aşağıdaki kullanım ile tip tanımlaması yapılmaktadır. React.FC yerine FC veya FunctionComponent tanımlamaları da yapılabilir.

const Character1: React.FC<PropTypes> = (props) => {
  const { name, surname, children } = props;
  return (
    <div>
      <h1>{`${name} ${surname}`}</h1>
      {children}
    </div>
  );
};

console.log(Character1({ name: "ahmet", surname: "fatih" }));
