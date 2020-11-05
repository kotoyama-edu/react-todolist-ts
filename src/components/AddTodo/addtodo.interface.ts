import { ITodoItem } from "stores/TodoItem";

export interface IAddTodoProps {
  todo: ITodoItem;
  onAdd: () => void;
  onChange: (value: string) => void;
}
