import React from "react";
import { Todo } from "../types/todo";

interface TodoItemProps {
  todo: Todo;
  onCompleteChange: (id: number, completed: boolean) => void;
}
export default function TodoItem({ todo }: TodoItemProps) {
  return (
    <div className="flex items-center gap-2 border rounded-md p-2 border-gray-400 bg-white hover:bg-slate-50">
      <input className="scale-125" type="checkbox" checked={todo.completed} />
      <span className={todo.completed ? "line-through text-gray-400" : ""}>
        {todo.title}{" "}
      </span>
    </div>
  );
}
