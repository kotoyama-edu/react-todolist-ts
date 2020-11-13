import React, { ChangeEventHandler, FormEventHandler } from "react";

import "./addtodo.styles.scss";

import { IAddTodoProps } from "./addtodo.interface";

import { Input } from "components/inputs/Input";
import { Button } from "components/inputs/Button";

const AddTodo: React.FC<IAddTodoProps> = (props: IAddTodoProps) => {
  const { todo, onAdd, onChange, isValid } = props;
  const { name } = todo;

  const handleAddChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    onChange(e.target.value);
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    onAdd();
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <Input
        name="task"
        value={name}
        placeholder="Название задачи"
        onChange={handleAddChange}
        autoFocus
      />
      <Button type="submit" disabled={!isValid}>
        Добавить
      </Button>
    </form>
  );
};

export default AddTodo;
