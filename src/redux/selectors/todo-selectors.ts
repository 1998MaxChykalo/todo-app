import { AppState } from './../store/index';
import { createSelector } from 'reselect';
import moment from 'moment';
import { TodoStatus } from '../../models/todo/TodoStatus';
import ITodo from '../../models/todo/ITodo';
import { compose } from 'redux';

const toLower = (text: string) => text.toLowerCase();
const byStatus = (status: TodoStatus) => (todo: ITodo) => todo.status === status || status === TodoStatus.All;
const prop = <T>(key: keyof T) => (obj: T) => obj && obj[key] || obj;
const includes = (test: string) => (text: string) => text.includes(test);
const filter = <T>(predicate: any) => (arr: Array<T>) => arr.filter(predicate);
const byTerm = (term: string) => compose(
  includes(toLower(term)),
  toLower,
  prop<ITodo>('text')
);


export const getTodos = (state: AppState) =>
  state.todos.todos;
export const getActiveFilter = (state: AppState) =>
  state.todos.activeFilter;

export const getFilters = (state: AppState) =>
  state.todos.filters;

export const getSearchTerm = (state: AppState) =>
  state.todos.searchTerm;

export const getTodosByStatus = createSelector(
  getTodos,
  getActiveFilter,
  (todos, activeFilter) => todos.filter(byStatus(activeFilter))
);

export const formatTime = (time: number) => {
  return moment(time).utcOffset(0).format('HH:mm:ss');
}

export const getActiveTodosByTerm = createSelector(
  getTodosByStatus,
  getSearchTerm,
  (todos: ITodo[], term: string) => filter<ITodo>(byTerm(term))(todos)
);