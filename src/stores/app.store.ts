import { action, makeObservable } from "mobx";
import { TodoListStore } from "./TodoList";
import { ITodoItem } from "./TodoItem";

export default class AppStore {
  public todoList = new TodoListStore();

  constructor() {
    makeObservable(this, {
      addTodo: action,
    });
  }

  public addTodo = (value: string): void => {
    const newTodo: ITodoItem = {
      id: Date.now().toString(),
      name: value,
      completed: false,
    };
    this.todoList.addTodo(newTodo);
  };
}
