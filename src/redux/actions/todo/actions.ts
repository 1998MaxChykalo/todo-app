import { TodoActionKeys, FetchTodosSuccessAction, FetchTodosFailureAction, FetchTodosStartedAction } from './types';
import { UpdateTodoModel } from '../../../dto/update-todo.model';
import ISortableTodoColumns from '../../../models/todo/ISortableTodoColumns';
import { CreateTodoModel } from '../../../dto/create-todo.model';
import { TodoStatus } from '../../../models/todo/TodoStatus';
import ITodo from '../../../models/todo/ITodo';

export const fetchTodos = () => ({
  type: TodoActionKeys.FETCH_TODOS
});

export const fetchTodosStarted = () => <FetchTodosStartedAction>({
  type: TodoActionKeys.FETCH_TODOS_STARTED
});

export const fetchTodosSuccess = (todos: ITodo[]) => <FetchTodosSuccessAction>({
  type: TodoActionKeys.FETCH_TODOS_SUCCESS,
  payload: todos
});

export const fetchTodosFailure = (errorMessage: string) => <FetchTodosFailureAction>({
  type: TodoActionKeys.FETCH_TODOS_FAILURE,
  payload: errorMessage
});


export const updateTodo = (todo: UpdateTodoModel) => ({
  type: TodoActionKeys.UPDATE_TODO,
  payload: todo
});

export const deleteTodo = (id: number) => ({
  type: TodoActionKeys.DELETE_TODO,
  payload: id
});

export const sortTodos = (column: keyof ISortableTodoColumns) => ({
  type: TodoActionKeys.SORT_TODOS,
  payload: column
});

export const addTodo = (values: CreateTodoModel) => ({
  type: TodoActionKeys.ADD_TODO,
  payload: {
    id: Math.random(),
    createdAt: new Date(Date.now()),
    status: TodoStatus.Active,
    timeTillEnd: values.estimatedTime,
    ...values,
  }
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

export const timeTillEndTick = () => ({
  type: TodoActionKeys.TIME_TILL_END_TICK
})