import { observable, action, computed, makeObservable } from "mobx";

import ITodoItem from "./types";
import { TodoListStore } from "./TodoList";

import { combineRules } from "helpers/validation";
import { notEmpty } from "helpers/validation/rules";
import { IValidationResult } from "helpers/validation/result";

export interface IAppStore {
  newTodo: ITodoItem;
  isSumbitted: boolean;
  validation: IValidationResult;
  isValid: boolean;
  reset: () => void;
  changeTodo: (value: string) => void;
  addTodo: () => void;
}

class AppStore implements IAppStore {
  public todoList = new TodoListStore();
  public isSumbitted: boolean = false;
  public newTodo: ITodoItem = {
    id: "",
    name: "",
    completed: false,
  };

  constructor() {
    makeObservable(this, {
      newTodo: observable,
      validation: computed,
      isValid: computed,
      reset: action,
      addTodo: action,
      changeTodo: action,
    });
  }

  public get validation(): IValidationResult {
    const rules = [notEmpty];
    return combineRules(...rules).call(rules, this.newTodo.name);
  }

  public get isValid(): boolean {
    return this.validation.type === "VALID";
  }

  public reset = (): void => {
    this.newTodo.name = "";
    this.isSumbitted = false;
  };

  public changeTodo = (value: string): void => {
    this.newTodo.name = value;
  };

  public addTodo = (): void => {
    this.isSumbitted = true;
    if (this.isValid) {
      this.todoList.addTodo({
        id: Date.now().toString(),
        name: this.newTodo.name.trim(),
        completed: this.newTodo.completed,
      });
      this.reset();
    }
  };
}

export default new AppStore();
