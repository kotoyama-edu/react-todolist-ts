import React, { ChangeEventHandler } from "react";
import { observer, inject } from "mobx-react";

import "./todoitem.styles.scss";

import { ITodoItemProps } from "./todoitem.interface";

import { Input } from "components/inputs/Input";
import { Button } from "components/inputs/Button";

const TodoItem: React.FC<ITodoItemProps> = inject("TodoItemStore")(
  observer(({ todo, onDelete }) => {
    const { id, name, completed } = todo.item;
    const { setCompleted } = todo;

    const handleChangeCompleted: ChangeEventHandler<HTMLInputElement> = (e) => {
      setCompleted(e.target.checked);
    };

    return (
      <li className="todo__item">
        <div className="todo__item-info">
          <Input
            id={id}
            type="checkbox"
            checked={completed}
            label={name}
            onChange={handleChangeCompleted}
          />
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
