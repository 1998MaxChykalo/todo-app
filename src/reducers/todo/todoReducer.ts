import { ITodoState } from "./ITodoState";
import initialState from "./initialState";
import ITodo from "../../models/todo/ITodo";
import { TodoActionTypes, TodoActionKeys } from "../../actions/todo/types";
import { decrementTimeTillEndIfInProgress } from "../../utils/todo/decrementTimeTillEnd";

export default (
  state: ITodoState = initialState,
  action: TodoActionTypes
): ITodoState => {
  switch (action.type) {
    case TodoActionKeys.ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, { ...action.payload }]
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
        todos: [...state.todos].sort((a: ITodo, b: ITodo) =>
          a[action.payload] > b[action.payload] ? 1 : -1
        )
      };
    }
    case TodoActionKeys.TIME_TILL_END_TICK: {
      console.log(state.todos.map(decrementTimeTillEndIfInProgress).map(todo => todo.timeTillEnd));
      console.log(state.todos.map(decrementTimeTillEndIfInProgress).map(todo => todo.estimatedTime));
      return {
        ...state,
        todos: state.todos.map(decrementTimeTillEndIfInProgress)
      };
    }
    default:
      return state;
  }
};
