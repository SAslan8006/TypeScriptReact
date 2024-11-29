// import Component from "./starter/01-return";
// import Props from "./starter/02-props";
// import State from "./starter/03-state";
// import Events from "./starter/04-events";
import Challenge from "./starter/05-challenge";

function App() {
  return (
    <main>
      {/* <Component /> */}
      {/* <Props id={1} name={"ahmet"}> Ahmet </Props> */}
      {/* <State /> */}
      {/* <Events /> */}
      <Challenge type="basic" name="ahmet" />
      <Challenge type="advanced" name="ahmet" email="a@b.com" />
      <Challenge type="basic" name="ahmet" email="a@b.com" />
      {/* <h2>React & Typescript</h2> */}
    </main>
  );
}

export default App;