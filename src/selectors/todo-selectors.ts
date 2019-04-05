import { AppState } from './../store/index';
import { createSelector } from 'reselect';
import { ITodo, TodoFilter } from '../reducers/todoReducer';

export const getTodos = (state: AppState) =>
  state.todos.todos;
export const getActiveFilter = (state: AppState) =>
  state.todos.activeFilter;

export const getFilters = (state: AppState) =>
  state.todos.filters;

export const getActiveTodos = createSelector(
  getTodos,
  getActiveFilter,
  (todos: ITodo[], activeFilter: TodoFilter) => {
    return todos
      .filter(
        todo => 
          todo.status
            ? todo.status === activeFilter 
              || activeFilter === TodoFilter.All
            : false
    );
  }
)