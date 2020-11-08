import ITodoItem from "stores/types";

export interface IAddTodoProps {
  todo: ITodoItem;
  isValid?: boolean;
  onAdd: () => void;
  onChange: (value: string) => void;
}
