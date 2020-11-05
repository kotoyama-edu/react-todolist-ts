import React, { ChangeEventHandler } from "react";
import { observer, inject } from "mobx-react";

import "./todoitem.styles.scss";

import { ITodoItemProps } from "./todoitem.interface";

import { Input } from "common/components/Input";
import { Button } from "common/components/Button";

const TodoItem: React.FC<ITodoItemProps> = inject("TodoListStore")(
  observer(({ todo, onDelete }) => {
    const { name, completed } = todo.item;
    const { setCompleted } = todo;

    const handleCompletedChange: ChangeEventHandler<HTMLInputElement> = (
      e: React.ChangeEvent<HTMLInputElement>
    ) => {
      setCompleted(e.target.checked);
    };

    return (
      <li className="todo__item">
        <Input
          className="todo__item-checkbox"
          type="checkbox"
          checked={completed}
          onChange={handleCompletedChange}
        />
        <span>{name}</span>
        <Button onClick={() => onDelete(todo.item.id)}>Удалить</Button>
      </li>
    );
  })
);

export default TodoItem;
