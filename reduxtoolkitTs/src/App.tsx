import { Button } from "./components/ui/button";

function App(): JSX.Element {
  return (
    <div className="max-w-screen-2xl mx-auto">
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <div>
        <Button>Click me</Button>
      </div>
    </div>
  );
}

export default App;
