import { CreateTodoModel } from './../../dto/create-todo.model';
import { TodoStatus } from './../../reducers/todoReducer';
import { TodoActionKeys } from './types';

export const updateTodo = (id: number) => ({
  type: TodoActionKeys.UPDATE_TODO,
  payload: id
});

export const deleteTodo = (id: number) => ({
  type: TodoActionKeys.DELETE_TODO,
  payload: id
});

export const addTodo = (values: CreateTodoModel) => ({
  type: TodoActionKeys.ADD_TODO,
  payload: values
});

export const changeActiveFilter = (newActiveFilter: TodoStatus) => ({
  type: TodoActionKeys.CHANGE_ACTIVE_FILTER,
  payload: newActiveFilter
});

export const updateSearchTerm = (newSearchTerm: string) => ({
  type: TodoActionKeys.UPDATE_SEARCH_TERM,
  payload: newSearchTerm
});

export const searchTermChange = (newTerm: string) => ({
  type: TodoActionKeys.SEARCH_TERM_CHANGED,
  payload: newTerm
});