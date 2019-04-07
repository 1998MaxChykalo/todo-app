import { AppState } from './../store/index';
import { createSelector } from 'reselect';
import { ITodo, TodoStatus } from '../reducers/todoReducer';
import moment from 'moment';

export const getTodos = (state: AppState) =>
  state.todos.todos;
export const getActiveFilter = (state: AppState) =>
  state.todos.activeFilter;

export const getFilters = (state: AppState) =>
  state.todos.filters;

export const getSearchTerm = (state: AppState) =>
  state.todos.searchTerm;

export const getActiveTodos = createSelector(
  getTodos,
  getActiveFilter,
  (todos: ITodo[], activeFilter: TodoStatus) => {
    return todos
      .filter(
        todo =>
          todo.status
            ? todo.status === activeFilter
            || activeFilter === TodoStatus.All
            : false
      );
  }
);

export const formatTime = (time: number) => {
  return moment(time).format('HH:mm:ss');
}

export const getActiveTodosByTerm = createSelector(
  getActiveTodos,
  getSearchTerm,
  (todos: ITodo[], searchTerm: string) => {
    if (searchTerm.length)
      return todos.filter(
        (todo: ITodo) => todo.text.toLowerCase().match(searchTerm.toLowerCase())
      )
    else
      return todos;
  }
);