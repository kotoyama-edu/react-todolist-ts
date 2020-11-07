import { observable, action, makeObservable } from "mobx";

import ITodoItem from "./types";
import { TodoListStore } from "./TodoList";

export interface IAppStore {
  newTodo: ITodoItem;
  reset: () => void;
  changeTodo: (value: string) => void;
  addTodo: () => void;
}

export default class AppStore implements IAppStore {
  public todoList = new TodoListStore();
  public newTodo: ITodoItem = {
    id: "",
    name: "",
    completed: false,
  };

  constructor() {
    makeObservable(this, {
      newTodo: observable,
      reset: action,
      addTodo: action,
      changeTodo: action,
    });
  }

  public reset = (): void => {
    this.newTodo.name = "";
  };

  public changeTodo = (value: string): void => {
    this.newTodo.name = value;
  };

  public addTodo = (): void => {
    this.todoList.addTodo({
      id: Date.now().toString(),
      name: this.newTodo.name.trim(),
      completed: this.newTodo.completed,
    });
    this.reset();
  };
}
