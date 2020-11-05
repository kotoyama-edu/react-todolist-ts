import { observable, action, makeObservable } from "mobx";
import { TodoListStore } from "./TodoList";
import { ITodoItem } from "./TodoItem";

export default class AppStore {
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
      name: this.newTodo.name,
      completed: this.newTodo.completed,
    });
    this.reset();
  };
}
