import todos from './../__data/Todos';
import {
  TodoActionKeys,
  TodoActionTypes
} from './../actions/todo/types';
export interface ITodo {
  id: number;
  text: string;
  status?: TodoStatus;
  createdAt?: Date;
  tags?: string[];
  estimatedTime?: number;
  timeTillEnd?: number;
}

export enum TodoStatus {
  All, Active, Completed, 'In Progress', Paused
};

export interface TodoState {
  todos: ITodo[];
  filters: TodoStatus[];
  activeFilter: TodoStatus;
  searchTerm: string;
}

const initialState: TodoState = {
  todos: <ITodo[]>JSON.parse(localStorage.getItem('todos') || '[]'),
  filters: Object.values(TodoStatus).filter(value => typeof value === 'number'),
  activeFilter: TodoStatus.All,
  searchTerm: ''
};

export default (state: TodoState = initialState, action: TodoActionTypes): TodoState => {
  switch (action.type) {
    case TodoActionKeys.ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          { ...action.payload }
        ]
      }
    case TodoActionKeys.DELETE_TODO: {
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload)
      };
    }
    case TodoActionKeys.UPDATE_TODO: {
      const updatedTodos = state.todos.map(todo => {
        if (todo.id === action.payload.id)
          todo = { ...todo, ...action.payload };
        return todo;
      })
      return {
        ...state,
        todos: [...updatedTodos]
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
      }
    }
    default:
      return state;
  }

}