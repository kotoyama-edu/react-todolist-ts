import React, { ChangeEventHandler, FormEventHandler } from "react";
import { observer } from "mobx-react";

import "./addtodo.styles.scss";

import { IAddTodoProps } from "./addtodo.interface";

import { Input } from "common/components/Input";
import { Button } from "common/components/Button";

const AddTodo: React.FC<IAddTodoProps> = observer((props: IAddTodoProps) => {
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
});

export default AddTodo;
