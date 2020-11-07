import ITodoItem from "../types";

export interface ITodoItemStore {
  item: ITodoItem;
  isEditMode: boolean;
  setEditMode: (mode: boolean) => void;
  editName: (name: string) => void;
  setCompleted: (completed: boolean) => void;
}
