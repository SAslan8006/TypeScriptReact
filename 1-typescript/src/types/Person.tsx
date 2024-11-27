import React, { useContext, useState } from "react";
import { UserContext } from "./UserContextProvider";

type Person = {
  name: string;
  age: number;
  isMarried: boolean;
  country: Countries;
};
export enum Countries {
  Brazil = "Brazil",
  USA = "USA",
  India = "India",
  Turkiye = "Turkiye",
}
function Person(props: Person) {
  const [personBio, setPersonBio] = useState<string | null>(null);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPersonBio(event.target.value);
  };
  const handleSummit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(personBio);
  };
  const { user, addUser, updateUser, deleteUser } = useContext(UserContext);
  return (
    <div>
      <h1>Person</h1>
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
      <p>This person {props.isMarried ? "is" : "is not"} married</p>
      <input type="text" onChange={handleChange} />
      <p>{personBio}</p>
      <p>{props.country}</p>
    </div>
  );
}

export default Person;
