import todos from './../__data/Todos';
import {
  TodoActionKeys,
  TodoActionTypes
} from './../actions/todo/types';

export interface ITodo {
  id: number;
  text: string;
  isCompleted: boolean;
  status?: TodoFilter;
  createdAt?: Date;
  tags?: string[];
}

export enum TodoFilter {
  All, Active, Completed
};

export interface TodoState {
  todos: ITodo[];
  filters: TodoFilter[];
  activeFilter: TodoFilter;
}

const initialState: TodoState = {
  todos: <ITodo[]>JSON.parse(localStorage.getItem('todos') || '[]'),
  filters: [TodoFilter.All, TodoFilter.Active, TodoFilter.Completed],
  activeFilter: TodoFilter.All
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
            status: TodoFilter.Active,
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
          todo.status = TodoFilter.Active === todo.status ? TodoFilter.Completed : TodoFilter.Active;
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
    default:
      return state;
  }

}