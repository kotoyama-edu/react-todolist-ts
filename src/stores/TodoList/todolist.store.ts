import { action, observable, computed, makeObservable } from "mobx";

import ITodoItem from "../types";
import { TodoItemStore } from "../TodoItem";
import { TCurrentView } from "./todolist.enum";
import { ITodoListStore } from "./todolist.interface";

import { httpClient } from "helpers/api/httpClient";
import { IHttpClientRequestParams } from "helpers/api/httpClient/httpClientRequestParams.interface";

export default class TodoListStore implements ITodoListStore {
  public currentView: TCurrentView = TCurrentView.all;
  public _todos: TodoItemStore[] = [];
  public isLoading: boolean = false;

  constructor() {
    makeObservable(this, {
      currentView: observable,
      _todos: observable,
      isLoading: observable,
      todos: computed,
      completedTodos: computed,
      activeTodos: computed,
      setTodos: action,
      addTodo: action,
      removeTodo: action,
      fetchTodos: action,
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

  public fetchTodos = async (): Promise<void> => {
    this.isLoading = true;
    await httpClient
      .get<void, ITodoItem[]>({
        url: "/todos",
      } as IHttpClientRequestParams<any>)
      .then((data) => {
        this.setTodos(data);
      })
      .finally(() => (this.isLoading = false));
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
