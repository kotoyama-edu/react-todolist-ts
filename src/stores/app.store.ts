import { action, computed, makeObservable } from "mobx";
import { TodoListStore } from "./TodoList";
import { ITodoItem } from "./TodoItem";

export default class AppStore {
  public todoList = new TodoListStore();
  public formValue = "";

  constructor() {
    makeObservable(this, {
      addTodo: action,
      errors: computed,
    });
  }

  public get errors() {
    let error = {};

    // if (!this.formValue) {
    //   error["formValue"] = EMPTY_ERR;
    // }
    return error;
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
