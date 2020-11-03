import React, { useEffect } from "react";
import { hot } from "react-hot-loader/root";
import { observer, inject } from "mobx-react";

import AppStore from "stores/app.store";

import { Button } from "common/components/Button";
import { TodoList } from "components/TodoList";

const App = inject("AppStore")(
  observer(() => {
    const appState = new AppStore();
    const { todoList } = appState;

    useEffect(() => {
      if (todoList) {
        todoList.setTodos([
          { id: Date.now().toString(), name: "123", completed: false },
        ]);
      }
    }, [todoList]);

    return (
      <div className="App">
        <Button size="large">Кнопка</Button>
        <TodoList todoList={todoList} />
      </div>
    );
  })
);

export default hot(App);
