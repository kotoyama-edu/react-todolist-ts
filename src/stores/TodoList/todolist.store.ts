import { action, observable, computed, makeObservable } from "mobx";

import ITodoItem from "../types";
import { TodoItemStore } from "../TodoItem";
import { TCurrentView } from "./todolist.enum";
import { ITodoListStore } from "./todolist.interface";

export default class TodoListStore implements ITodoListStore {
  public currentView: TCurrentView = TCurrentView.all;
  public _todos: TodoItemStore[] = [];

  constructor() {
    makeObservable(this, {
      currentView: observable,
      _todos: observable,
      todos: computed,
      completedTodos: computed,
      activeTodos: computed,
      setTodos: action,
      addTodo: action,
      removeTodo: action,
    });
  }

  public get todos(): TodoItemStore[] {
    switch (this.currentView) {
      case TCurrentView.active:
        return this.activeTodos;
      case TCurrentView.completed:
        return this.completedTodos;
      default:
        return this._todos;
    }
  }

  public get completedTodos(): TodoItemStore[] {
    return this._todos.filter((todo) => todo.item.completed);
  }

  public get activeTodos(): TodoItemStore[] {
    return this._todos.filter((todo) => !todo.item.completed);
  }

  public setTodos = (todos: ITodoItem[]): void => {
    this._todos = todos.map((todo) => new TodoItemStore(todo));
  };

  public addTodo = (todo: ITodoItem): void => {
    this._todos.push(new TodoItemStore(todo));
  };

  public removeTodo = (id: string): boolean => {
    const index = this._todos.findIndex((todo) => todo.item.id === id);
    if (index === -1) return false;
    this._todos.splice(index, 1);
    return true;
  };
}
