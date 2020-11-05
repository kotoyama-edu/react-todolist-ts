import React, { ChangeEvent, ChangeEventHandler } from "react";
import { observer, inject } from "mobx-react";

import "./addtodo.styles.scss";

import { IAddTodoProps } from "./addtodo.interface";

// import { notEmpty } from "helpers/validation/rules";

import { Input } from "common/components/Input";
// import { Button } from "common/components/Button";

const AddTodo: React.FC<IAddTodoProps> = inject("AppStore")(
  observer(({ todo, onAdd, onChange }) => {
    const handleAddChange: ChangeEventHandler<HTMLInputElement> = (
      e: ChangeEvent<HTMLInputElement>
    ) => {
      onChange(e.target.value);
    };

    return (
      <form>
        <Input value={todo.name} onChange={handleAddChange} autoFocus />
      </form>
    );
  })
);

export default AddTodo;
