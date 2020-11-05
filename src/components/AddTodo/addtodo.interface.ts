import { ITodoItem } from "stores/TodoItem";
import { IValidationResult } from "helpers/validation/result";

export interface IAddTodoProps {
  todo: ITodoItem;
  errors?: IValidationResult[];
  isSubmitted?: boolean;
  onAdd: () => void;
  onChange: (value: string) => void;
  setError: (name: string, error: IValidationResult) => void;
}
