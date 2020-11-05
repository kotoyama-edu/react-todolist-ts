import { observable, action, computed, makeObservable, toJS } from "mobx";

import { TodoListStore } from "./TodoList";
import { ITodoItem } from "./TodoItem";
import {
  IValidationResult,
  TValidationResult,
} from "helpers/validation/result";

export default class AppStore {
  public todoList = new TodoListStore();
  public _errors: IValidationResult[] = [];
  // public isSubmitted: boolean = false;
  public newTodo: ITodoItem = {
    id: "",
    name: "",
    completed: false,
  };

  constructor() {
    makeObservable(this, {
      newTodo: observable,
      // isSubmitted: observable,
      _errors: observable,
      errors: computed,
      setError: action,
      reset: action,
      addTodo: action,
      changeTodo: action,
    });
  }

  public get errors(): IValidationResult[] {
    return this._errors.filter(
      (error) => error.type !== TValidationResult.valid
    );
  }

  public setError = (name: string, error: IValidationResult): void => {
    if (!this._errors.includes(error)) {
      this._errors.push({
        field: name,
        ...error,
      });
    }
  };

  public reset = (): void => {
    this.newTodo.name = "";
    // this.isSubmitted = false;
  };

  public changeTodo = (value: string): void => {
    this.newTodo.name = value;
  };

  public addTodo = (): void => {
    if (!this.errors.length) {
      this.todoList.addTodo({
        id: Date.now().toString(),
        name: this.newTodo.name.trim(),
        completed: this.newTodo.completed,
      });
      console.log("success");
      this.reset();
    }
  };
}
