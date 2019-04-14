import { UpdateTodoModel } from './../../dto/update-todo.model';
import { CreateTodoModel } from './../../dto/create-todo.model';
import { TodoStatus, ITodo, ISortableTodoColumns } from './../../reducers/todoReducer';

export enum TodoActionKeys {
  ADD_TODO = 'ADD_TODO',
  UPDATE_TODO = 'UPDATE_TODO',
  DELETE_TODO = 'DELETE_TODO',
  CHANGE_ACTIVE_FILTER = 'CHANGE_ACTIVE_FILTER',
  UPDATE_SEARCH_TERM = 'UPDATE_SEARCH_TERM',
  SEARCH_TERM_CHANGED = 'SEARCH_TERM_CHANGED',
  SORT_TODOS = 'SORT_TODOS',
  TIME_TILL_END_TICK = 'TIME_TILL_END_TICK',
};

export interface AddTodoAction {
  readonly type: TodoActionKeys.ADD_TODO;
  readonly payload: ITodo;
}

export interface DeleteTodoAction {
  readonly type: TodoActionKeys.DELETE_TODO;
  readonly payload: number;
}

export interface UpdateTodoAction {
  readonly type: TodoActionKeys.UPDATE_TODO;
  readonly payload: UpdateTodoModel;
}

export interface ChangeActiveFilterAction {
  readonly type: TodoActionKeys.CHANGE_ACTIVE_FILTER;
  readonly payload: TodoStatus;
}

export interface UpdateSearchTermAction {
  readonly type: TodoActionKeys.UPDATE_SEARCH_TERM;
  readonly payload: string;
}

export interface SortTodosAction {
  readonly type: TodoActionKeys.SORT_TODOS;
  readonly payload: keyof ISortableTodoColumns;
}

export interface TimeTillEndTickAction {
  readonly type: TodoActionKeys.TIME_TILL_END_TICK;
}

export type TodoActionTypes = AddTodoAction
  | DeleteTodoAction
  | UpdateTodoAction
  | ChangeActiveFilterAction
  | UpdateSearchTermAction
  | SortTodosAction
  | TimeTillEndTickAction;