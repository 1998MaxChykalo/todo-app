import { CreateTodoModel } from './../../dto/create-todo.model';
import { TodoStatus, ITodo, ISortableTodoColumns } from './../../reducers/todoReducer';
import { TodoActionKeys } from './types';
import { UpdateTodoModel } from '../../dto/update-todo.model';

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