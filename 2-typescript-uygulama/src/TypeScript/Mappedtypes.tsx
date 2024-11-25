import React from "react";

function Mappedtypes() {
  return <div>Mappedtypes</div>;
}

export default Mappedtypes;

//Mapped Types konusunu öğrenmeden önce Generics, keyof, readonly ve optional params konuları hakkında bilgi sahibi olmak gerekir. {% endhint %}

//Diyelim ki elimizde aşağıdaki gibi bir tip objesi var
interface Artist {
  id?: number;
  name?: string;
  bio?: string;
  birthDate?: string;
  country?: string;
}

type Properties = "a" | "b" | "c";
//Şeklinde bir union tip tanımlamamız olsun. Yeni bir tip tanımlamak istiyorum, key leri Properties objesinde ki keyler olsun, tip değerleri de number olmasını istiyorum. Bunu yapmak için Mapped type özelliğini kullanabilirim.

type NewType = {
  [key in Properties]: number;
};

//NewType tipinin karşılığı aşağıdaki gibidir.

type NewType1 = {
  a: number;
  b: number;
  c: number;
};

//Gelelim işleri biraz daha karıştırmaya. Sayfanın en başında aşağıdaki interface i oluşturmuştuk. Mapped Type özelliğini kullanarak optional parametre özelliğini interface içerisindeki tüm elemanlardan kaldırmak istiyorum.

interface Artist {
  id?: number;
  name?: string;
  bio?: string;
  birthDate?: string;
  country?: string;
}

//Öncelikle mapped type özelliğini kullanabileceğim bir generic type oluşturuyorum ve burada mapped type özelliğini kullanıyorum. Ardından oluşturduğum generic tip e , generic olarak Artist tip ini vererek yeni bir tip oluşturuyorum. Gelin adım adım nasıl çalıştığını anlatalım.
type MyPartialType<T> = {
  [P in keyof T]-?: T[P];
};

type MappedArtistForEdit = MyPartialType<Artist>;
