function AnyUnknownType() {
  return <div>AnyUnknownType</div>;
}
export default AnyUnknownType;

// `any` kullanımı (güvensiz)
let age: any;

age = "32";
console.log(age.toUpperCase()); // Çalışır, hata vermez.
age = 32;
// Aşağıdaki satır çalışma zamanı hatasına neden olur.
// console.log(age.toUpperCase()); // HATA: `toUpperCase` bir sayı üzerinde kullanılamaz.

// `unknown` kullanımı (güvenli)
const age2: unknown = 32;

// Tür kontrolü ile güvenli işlem
if (typeof age2 === "string") {
  console.log(age2.toLowerCase()); // Çalışır.
}

if (typeof age2 === "number") {
  console.log(age2.toExponential()); // Çalışır.
}
