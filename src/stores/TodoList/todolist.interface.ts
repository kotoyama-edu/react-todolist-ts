import ITodoItem from "../types";
import { TCurrentView } from "./todolist.enum";
import { TodoItemStore } from "../TodoItem";

export interface ITodoListStore {
  currentView: TCurrentView;
  _todos: TodoItemStore[];
  todos: TodoItemStore[];
  completedTodos: TodoItemStore[];
  activeTodos: TodoItemStore[];
  setTodos: (todos: ITodoItem[]) => void;
  addTodo: (todo: ITodoItem) => void;
  removeTodo: (id: string) => boolean;
}
