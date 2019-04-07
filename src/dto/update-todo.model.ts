import { TodoStatus } from './../reducers/todoReducer';
export interface UpdateTodoModel {
  id: number;
  status?: TodoStatus;
  timeTillEnd?: number;
}