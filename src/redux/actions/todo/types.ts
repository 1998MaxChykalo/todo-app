import ITodo from "../../../models/todo/ITodo";
import { UpdateTodoModel } from "../../../dto/update-todo.model";
import { TodoStatus } from "../../../models/todo/TodoStatus";
import ISortableTodoColumns from "../../../models/todo/ISortableTodoColumns";

export enum TodoActionKeys {
  FETCH_TODOS = 'FETCH_TODOS',
  FETCH_TODOS_STARTED = 'FETCH_TODOS_STARTED',
  FETCH_TODOS_SUCCESS = 'FETCH_TODOS_SUCCESS',
  FETCH_TODOS_FAILURE = 'FETCH_TODOS_FAILURE',
  ADD_TODO = 'ADD_TODO',
  UPDATE_TODO = 'UPDATE_TODO',
  DELETE_TODO = 'DELETE_TODO',
  CHANGE_ACTIVE_FILTER = 'CHANGE_ACTIVE_FILTER',
  UPDATE_SEARCH_TERM = 'UPDATE_SEARCH_TERM',
  SEARCH_TERM_CHANGED = 'SEARCH_TERM_CHANGED',
  SORT_TODOS = 'SORT_TODOS',
  TIME_TILL_END_TICK = 'TIME_TILL_END_TICK',
  UNKNOWN = 'UNKNOWN'
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

export interface UnknownAction {
  readonly type: TodoActionKeys.UNKNOWN;
}

export interface FetchTodosStartedAction {
  readonly type: TodoActionKeys.FETCH_TODOS_STARTED
}

export interface FetchTodos {
  readonly type: TodoActionKeys.FETCH_TODOS
}

export interface FetchTodosSuccessAction {
  readonly type: TodoActionKeys.FETCH_TODOS_SUCCESS,
  readonly payload: ITodo[]
}

export interface FetchTodosFailureAction {
  readonly type: TodoActionKeys.FETCH_TODOS_FAILURE,
  readonly payload: string
}

export type TodoActionTypes = FetchTodos
  | FetchTodosStartedAction
  | FetchTodosSuccessAction
  | FetchTodosFailureAction
  | AddTodoAction
  | DeleteTodoAction
  | UpdateTodoAction
  | ChangeActiveFilterAction
  | UpdateSearchTermAction
  | SortTodosAction
  | TimeTillEndTickAction
  | UnknownAction;