function tutorial() {
  return <div>tutorial</div>;
}

export default tutorial;

let tax: number | string = 10;
tax = 100; // Geçerli
tax = "$10"; // Geçerli

console.log(tax); // Use the value of tax

let loading: "pending" | "success" | "error" = "pending";
loading = "success"; // Geçerli
loading = "error"; // Geçerli

console.log(loading); // Son durumda: "error"
