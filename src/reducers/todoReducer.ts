import todos from './../__data/Todos';
import {
  TodoActionKeys,
  TodoActionTypes
} from './../actions/todo/types';

export interface ITodo {
  id: number;
  text: string;
  isCompleted: boolean;
  status?: TodoStatus;
  createdAt?: Date;
  tags?: string[];
}

export enum TodoStatus {
  All, Active, Completed
};

export interface TodoState {
  todos: ITodo[];
  filters: TodoStatus[];
  activeFilter: TodoStatus;
  searchTerm: string;
}

const initialState: TodoState = {
  todos: <ITodo[]>JSON.parse(localStorage.getItem('todos') || '[]'),
  filters: [TodoStatus.All, TodoStatus.Active, TodoStatus.Completed],
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
          // TODO: remove, this is not pure function if we create randomized values/
          { 
            id: Math.random(),
            isCompleted: false,
            createdAt: new Date(Date.now()),
            status: TodoStatus.Active,
            ...action.payload
          }
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
        if (todo.id === action.payload)
          todo.status = TodoStatus.Active === todo.status ? TodoStatus.Completed : TodoStatus.Active;
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