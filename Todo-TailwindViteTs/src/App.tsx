import { useState } from "react";
import TodoItem from "./component/TodoItem";
import { dummyData } from "./data/todos";

function App() {
  const [todos, setTodos] = useState(dummyData);

  function setTodoCompleted(id: number, completed: boolean) {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => (todo.id === id ? { ...todo, completed } : todo))
    );
  }
  return (
    <main className="py-10 bg-red-50 h-screen space-y-5">
      <h1 className="text-3xl font-bold text-center"> Your Todos</h1>
      <div className="max-w-3xl mx-auto bg-slate-100 rounded-md p-4">
        <div className="space-y-2">
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onCompletedChange={setTodoCompleted}
              onDelete={() => {}}
            />
          ))}
        </div>
      </div>
    </main>
  );
}

export default App;
