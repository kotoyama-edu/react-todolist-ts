import { action, observable, makeObservable } from "mobx";

import { ITodoItem } from "./";

export default class TodoItemStore {
  public readonly item: ITodoItem;
  public isEditMode: boolean = false;

  constructor(item: ITodoItem) {
    makeObservable(this, {
      item: observable,
      isEditMode: observable,
      setIsEditMode: action,
      editName: action,
      setCompleted: action,
    });
    this.item = item;
  }

  public setIsEditMode = (mode: boolean = true): void => {
    this.isEditMode = mode;
  };

  public editName = (name: string): void => {
    this.item.name = name;
  };

  public setCompleted = (completed: boolean): void => {
    this.item.completed = completed;
  };
}
