import { action, observable, makeObservable } from "mobx";

import { ITodoItem } from "./";

export default class TodoItemStore {
  public readonly value: ITodoItem;
  public isEditMode: boolean = false;

  constructor(value: ITodoItem) {
    makeObservable(this, {
      value: observable,
      isEditMode: observable,
      setIsEditMode: action,
      editName: action,
      editCompleted: action,
    });
    this.value = value;
  }

  public setIsEditMode = (value: boolean = true): void => {
    this.isEditMode = value;
  };

  public editName = (name: string): void => {
    this.value.name = name;
  };

  public editCompleted = (completed: boolean): void => {
    this.value.completed = completed;
  };
}
