import "./App.css";
import Tutorial from "./tutorial";
import Counter from "./counter";

function App() {
  return (
    <>
      <Tutorial />
      <Counter />
    </>
  );
}

export default App;

export interface User {
  name: string;
  id: number;
}

export type Theme = "light" | "dark";

export interface UserAdmin extends User {
  role: "admin";
}

export const user: User = {
  name: "susan",
  id: 1,
};

export const userAdmin: UserAdmin = {
  name: "susan",
  id: 1,
  role: "admin",
};

console.log(user, userAdmin);

const awesomeName: string = "shakeAndBake";
const awesomeName2: number = 1; // awesomeName = 20;

console.log(awesomeName, awesomeName2);
