import React from "react";
import { observer, inject } from "mobx-react";

import { ITodoListProps } from "./todolist.interface";

const TodoList: React.FC<ITodoListProps> = inject("TodoListStore")(
  // TodoListStore,
  observer(({ ...props }) => {
    const { todoList } = props;
    const { todos, removeTodo, currentView } = todoList;

    return <p>Тест</p>;
  })
);

export default TodoList;
