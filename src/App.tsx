import React from "react";
import { hot } from "react-hot-loader/root";
import { observer, inject } from "mobx-react";
// import AppStore from "stores/app.store";

import { Button } from "common/components/Button";
// import { TodoList } from "components/TodoList";

const App = inject("AppStore")(
  observer(({ AppStore }: any) => {
    // const appState = new AppStore();
    const { todoList } = AppStore;

    return (
      <div className="App">
        <Button size="large">Кнопка</Button>
        {/* <TodoList todoList={todoList} /> */}
      </div>
    );
  })
);

export default hot(App);
