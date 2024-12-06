import { useState } from "react";
import { dummyData } from "./data/todos";
import AddTodoForm from "./component/AddTodoForm";
import TodoList from "./component/TodoList";
import { Todo } from "./types/todo";

function App() {
  const [todos, setTodos] = useState<Todo[]>(dummyData);

  function setTodoCompleted(id: number, completed: boolean): void {
    setTodos((prevTodos: Todo[]) =>
      prevTodos.map((todo) => (todo.id === id ? { ...todo, completed } : todo))
    );
  }

  function addTodo(title: string): void {
    setTodos((prevTodos) => [
      {
        id: prevTodos.length + 1,
        title,
        completed: false,
      },
      ...prevTodos,
    ]);
  }

  function deleteTodo(id: number): void {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  }

  return (
    <main className="py-10 h-screen space-y-5 overflow-y-auto">
      <h1 className="font-bold text-3xl text-center">Your Todos</h1>
      <div className="max-w-lg mx-auto bg-slate-100 rounded-md p-5 space-y-6">
        <AddTodoForm onSubmit={addTodo} />
        <TodoList
          todos={todos}
          onCompletedChange={setTodoCompleted}
          onDelete={deleteTodo}
        />
      </div>
    </main>
  );
}

export default App;
