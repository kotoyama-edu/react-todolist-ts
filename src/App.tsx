import React, { useEffect } from "react";
import { hot } from "react-hot-loader/root";
import { observer, inject } from "mobx-react";

import { TodoList } from "components/TodoList";
import { AddTodo } from "components/AddTodo";

import ITodoItem from "stores/types";

import AppStore from "stores/app.store";

const App = inject("AppStore")(
  observer(() => {
    const appState = new AppStore();
    const { newTodo, todoList, addTodo, changeTodo } = appState;
    const { setTodos } = todoList;

    const initialTodos: ITodoItem[] = [
      {
        id: "1",
        name: "Learn react, typescript, mobx",
        completed: false,
      },
      {
        id: "2",
        name: "Learn javascript, css, sass",
        completed: true,
      },
    ];

    useEffect(() => {
      setTodos(initialTodos);
    }, [setTodos]);

    return (
      <div className="wrapper">
        <div className="wrapper-content">
          <div className="container">
            <TodoList todoList={todoList} />
            <AddTodo todo={newTodo} onAdd={addTodo} onChange={changeTodo} />
          </div>
        </div>
      </div>
    );
  })
);

export default hot(App);
