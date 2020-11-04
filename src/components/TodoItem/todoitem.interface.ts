import { TodoItemStore } from "stores/TodoItem";

export interface ITodoItemProps {
  todo: TodoItemStore;
  onDelete: (id: string) => void;
}
