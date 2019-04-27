import { fetchTodosSuccess, fetchTodosFailure, fetchTodosStarted } from './../../actions/todo/actions';
import { TodoActionKeys } from "../../actions/todo/types";
import todoReducer from "./todoReducer";
import initialState from "./initialState";
import ITodo from "../../../models/todo/ITodo";
import { TodoStatus } from "../../../models/todo/TodoStatus";

const id = () => {
  let counter = 0;
  return () => counter++;
}
const todoId = id();
const mockTodos = (): ITodo[] => [
  {
    id: todoId(),
    text: 'Todo 1',
    status: TodoStatus.Active,
    estimatedTime: 2000,
    createdAt: new Date(Date.now())
  },
  {
    id: todoId(),
    text: 'Todo 2',
    status: TodoStatus.Active,
    estimatedTime: 2000,
    createdAt: new Date(Date.now())
  },
  {
    id: todoId(),
    text: 'Todo 3',
    status: TodoStatus.Active,
    estimatedTime: 2000,
    createdAt: new Date(Date.now())
  },
  {
    id: todoId(),
    text: 'Todo 4',
    status: TodoStatus.Active,
    estimatedTime: 2000,
    createdAt: new Date(Date.now())
  },
  {
    id: todoId(),
    text: 'Todo 5',
    status: TodoStatus.Active,
    estimatedTime: 2000,
    createdAt: new Date(Date.now())
  },
];

describe("Todo Reducer", () => {
  it('Should return default state', () => {
    const newState = todoReducer(undefined, { type: TodoActionKeys.UNKNOWN});
    expect(newState).toEqual(initialState);
  });
  
  it('Should return fetched todos', () => {
    const mockedTodos = mockTodos();
    const newState = todoReducer(undefined, fetchTodosSuccess(mockedTodos));
    expect(newState.todos).toEqual(mockedTodos);
  });
  
  it('Should return error', () => {
    const errorMessage = 'Fetch failed';
    const newState = todoReducer(undefined, fetchTodosFailure(errorMessage));
    expect(newState.error).toEqual(errorMessage);
  });

  it('Should return loading true', () => {
    const newState = todoReducer(undefined, fetchTodosStarted());
    expect(newState.loading).toEqual(true);
  });
});