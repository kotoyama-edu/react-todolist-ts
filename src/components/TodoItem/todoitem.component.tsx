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

    const handleCompletedChange: ChangeEventHandler<HTMLInputElement> = (e) => {
      setCompleted(e.target.checked);
    };

    return (
      <li className="todo__item">
        <div className="todo__item-info">
          <Input
            type="checkbox"
            checked={completed}
            onChange={handleCompletedChange}
          />
          <span>{name}</span>
        </div>
        <div className="todo__item-actions">
          <Button
            size="small"
            theme="transparent"
            onClick={() => onDelete(todo.item.id)}
          >
            Удалить
          </Button>
        </div>
      </li>
    );
  })
);

export default TodoItem;
