import React from "react";
import { observer, inject } from "mobx-react";

import { ITodoListProps } from "./todolist.interface";

const TodoList: React.FC<ITodoListProps> = inject("TodoListStore")(
  observer(({ todoList }) => {
    const { todos, removeTodo, currentView } = todoList;
    return <p>Тест</p>;
  })
);

export default TodoList;
