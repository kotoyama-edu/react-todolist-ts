import { action, observable, makeObservable } from "mobx";

import ITodoItem from "../types";
import { ITodoItemStore } from "./todoitem.interface";

export default class TodoItemStore implements ITodoItemStore {
  public readonly item: ITodoItem;
  public isEditMode: boolean = false;

  constructor(item: ITodoItem) {
    makeObservable(this, {
      item: observable,
      isEditMode: observable,
      setEditMode: action,
      editName: action,
      setCompleted: action,
    });
    this.item = item;
  }

  public setEditMode = (mode: boolean = true): void => {
    this.isEditMode = mode;
  };

  public editName = (name: string): void => {
    this.item.name = name;
  };

  public setCompleted = (completed: boolean): void => {
    this.item.completed = completed;
  };
}
