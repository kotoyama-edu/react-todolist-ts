import React from "react";
import { observer, inject } from "mobx-react";

import { ITodoItemProps } from "./todoitem.interface";

import { Input } from "common/components/Input";
import { Button } from "common/components/Button";

const TodoItem: React.FC<ITodoItemProps> = inject("TodoListStore")(
  observer(({ todo, onDelete }) => {
    const { name, completed } = todo.item;
    return (
      <li>
        <Input
          // className={classes.chackbox}
          type="checkbox"
          checked={completed}
          // onChange={this.handleCompletedChange}
        />
        <div>{name}</div>
        <Button onClick={() => onDelete(todo.item.id)}>Удалить</Button>
      </li>
    );
  })
);

export default TodoItem;
