import { useState } from "react";

type Person = {
  name: string;
  email: string;
};
function Component() {
  const [text, setText] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setEmail(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    // const formData = new FormData(e.target as HTMLFormElement);
    const data = Object.fromEntries(formData);
    const text: string = formData.get("text") as string;
    const email: string = formData.get("email") as string;
    const person: Person = {
      name: data.text as string,
      email: data.email as string,
    };

    console.log(person);
  };

  return (
    <div>
      <h2>Events Exampla</h2>
      <form onSubmit={handleSubmit} className="form">
        <input
          className="form-input"
          type="text"
          name="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <input
          className="form-input"
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
        />
        <button type="submit" className="btn">
          submit
        </button>
      </form>
    </div>
  );
}
export default Component;
