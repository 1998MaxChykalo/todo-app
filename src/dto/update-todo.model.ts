import { TodoStatus } from "../models/todo/TodoStatus";

export interface UpdateTodoModel {
  id: number;
  status?: TodoStatus;
  timeTillEnd?: number;
}