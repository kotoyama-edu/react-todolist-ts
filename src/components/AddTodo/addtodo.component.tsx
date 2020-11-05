import React, { ChangeEventHandler, FormEventHandler } from "react";
import { observer, inject } from "mobx-react";

import "./addtodo.styles.scss";

import { IAddTodoProps } from "./addtodo.interface";

import { notEmpty } from "helpers/validation/rules";

import { Input } from "common/components/Input";
import { Button } from "common/components/Button";

const AddTodo: React.FC<IAddTodoProps> = inject("AppStore")(
  observer((props: IAddTodoProps) => {
    const { todo, onAdd, onChange, setError } = props;
    const { name } = todo;

    const handleAddChange: ChangeEventHandler<HTMLInputElement> = (e) => {
      onChange(e.target.value);
    };

    const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
      e.preventDefault();
      setError("task", notEmpty(name));
      onAdd();
    };

    return (
      <form className="form" onSubmit={handleSubmit}>
        <Input
          name="task"
          value={name}
          placeholder="Название задачи"
          onChange={handleAddChange}
          // rules={[notEmpty(name)]}
          autoFocus
        />
        <Button type="submit">Добавить</Button>
      </form>
    );
  })
);

export default AddTodo;
