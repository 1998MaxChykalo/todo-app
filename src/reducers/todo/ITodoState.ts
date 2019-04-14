import ITodo from "../../models/todo/ITodo";
import { TodoStatus } from "../../models/todo/TodoStatus";

export interface ITodoState {
  todos: ITodo[];
  filters: TodoStatus[];
  activeFilter: TodoStatus;
  searchTerm: string;
}