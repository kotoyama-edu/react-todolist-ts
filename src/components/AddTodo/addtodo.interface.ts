import ITodoItem from "stores/types";

export interface IAddTodoProps {
  todo: ITodoItem;
  onAdd: () => void;
  onChange: (value: string) => void;
}
