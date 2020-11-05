import React, { useEffect } from "react";
import { hot } from "react-hot-loader/root";
import { observer, inject } from "mobx-react";

import AppStore from "stores/app.store";

import { TodoList } from "components/TodoList";
// import { AddTodo } from "components/AddTodo";

const App = inject("AppStore")(
  observer(() => {
    const appState = new AppStore();
    const { todoList, addTodo } = appState;
    const { setTodos } = todoList;

    useEffect(() => {
      setTodos([{ id: Date.now().toString(), name: "123", completed: false }]);
    }, [setTodos]);

    return (
      <div className="wrapper">
        <div className="wrapper-content">
          <div className="container">
            {/* <AddTodo onAdd={addTodo} /> */}
            <TodoList todoList={todoList} />
          </div>
        </div>
      </div>
    );
  })
);

export default hot(App);
