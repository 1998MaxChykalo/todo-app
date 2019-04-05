import { CreateTodoModel } from './../../dto/create-todo.model';
import { TodoFilter } from './../../reducers/todoReducer';

export enum TodoActionKeys {
  ADD_TODO = 'ADD_TODO',
  UPDATE_TODO = 'UPDATE_TODO',
  DELETE_TODO = 'DELETE_TODO',
  CHANGE_ACTIVE_FILTER = 'CHANGE_ACTIVE_FILTER',
}

interface AddTodoAction {
  readonly type: TodoActionKeys.ADD_TODO;
  readonly payload: CreateTodoModel;
}

interface DeleteTodoAction {
  readonly type: TodoActionKeys.DELETE_TODO;
  readonly payload: number;
}

interface UpdateTodoAction {
  readonly type: TodoActionKeys.UPDATE_TODO;
  readonly payload: number;
}

interface ChangeActiveFilterAction {
  readonly type: TodoActionKeys.CHANGE_ACTIVE_FILTER;
  readonly payload: TodoFilter;
}

export type TodoActionTypes = AddTodoAction | DeleteTodoAction | UpdateTodoAction | ChangeActiveFilterAction;