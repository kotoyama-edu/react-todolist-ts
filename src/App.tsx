import React, { useEffect } from "react";
import { hot } from "react-hot-loader/root";
import { observer, inject } from "mobx-react";

import { TodoList } from "components/TodoList";
import { AddTodo } from "components/AddTodo";

import AppStore from "stores/app.store";

const App = inject("AppStore")(
  observer(() => {
    const { newTodo, todoList, addTodo, changeTodo, isValid } = AppStore;
    const { setTodos } = todoList;

    useEffect(() => {
      setTodos([
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
      ]);
    }, [setTodos]);

    return (
      <div className="wrapper">
        <div className="wrapper-content">
          <div className="container">
            <TodoList todoList={todoList} />
            <AddTodo
              todo={newTodo}
              onAdd={addTodo}
              onChange={changeTodo}
              isValid={isValid}
            />
          </div>
        </div>
      </div>
    );
  })
);

export default hot(App);
