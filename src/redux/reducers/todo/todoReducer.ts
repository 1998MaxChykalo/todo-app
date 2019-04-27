import { ITodoState } from "./ITodoState";
import initialState from "./initialState";
import ITodo from "../../../models/todo/ITodo";
import { decrementTimeTillEndIfInProgress } from "../../../utils/todo/decrementTimeTillEnd";
import ISortableTodoColumns from "../../../models/todo/ISortableTodoColumns";
import { TodoActionTypes, TodoActionKeys } from "../../actions/todo/types";

const compareBy = (column: keyof ISortableTodoColumns) =>
  (a: ITodo, b: ITodo) =>
    a[column] > b[column]
      ? 1 : a[column] < b[column]
        ? -1 : 0;

export default (
  state: ITodoState = initialState,
  action: TodoActionTypes
): ITodoState => {
  switch (action.type) {
    case TodoActionKeys.FETCH_TODOS_STARTED:
      return {
        ...state,
        loading: true
      }
    case TodoActionKeys.FETCH_TODOS_SUCCESS:
      return {
        ...state,
        todos: [...action.payload]
      };
    case TodoActionKeys.FETCH_TODOS_FAILURE:
      return {
        ...state,
        error: action.payload
      };
    case TodoActionKeys.ADD_TODO:
      return {
        ...state,
        todos: state.todos.concat(action.payload)
      };
    case TodoActionKeys.DELETE_TODO: {
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload)
      };
    }
    case TodoActionKeys.UPDATE_TODO: {
      const updatedTodos = state.todos.map(todo =>
        todo.id === action.payload.id ? { ...todo, ...action.payload } : todo
      );
      return {
        ...state,
        todos: updatedTodos,
      };
    }
    case TodoActionKeys.CHANGE_ACTIVE_FILTER: {
      return {
        ...state,
        activeFilter: action.payload
      };
    }
    case TodoActionKeys.UPDATE_SEARCH_TERM: {
      return {
        ...state,
        searchTerm: action.payload
      };
    }
    case TodoActionKeys.SORT_TODOS: {
      return {
        ...state,
        todos: [...state.todos].sort(compareBy(action.payload))
      };
    }
    case TodoActionKeys.TIME_TILL_END_TICK: {
      // console.log(state.todos.map(decrementTimeTillEndIfInProgress).map(todo => todo.timeTillEnd));
      // console.log(state.todos.map(decrementTimeTillEndIfInProgress).map(todo => todo.estimatedTime));
      return {
        ...state,
        todos: state.todos.map(decrementTimeTillEndIfInProgress)
      };
    }
    default:
      return state;
  }
};
