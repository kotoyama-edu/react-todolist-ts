import React from "react";
import { observer, inject } from "mobx-react";

import { ITodoListProps } from "./todolist.interface";
import { TodoItem } from "components/TodoItem";

const TodoList: React.FC<ITodoListProps> = inject("TodoListStore")(
  observer(({ todoList }) => {
    const { todos, removeTodo, currentView } = todoList;
    return (
      <div className="todos-wrapper">
        <ul>
          {todos.map((todo) => (
            <TodoItem key={todo.item.id} todo={todo} onDelete={removeTodo} />
          ))}
        </ul>
      </div>
    );
  })
);

export default TodoList;
