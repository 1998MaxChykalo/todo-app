import { isInProgress } from './isInProgress';
import { ITodo } from "../../reducers/todoReducer";

export const decrementTimeTillEnd = (todo: ITodo) => {
  if (todo.timeTillEnd && isInProgress(todo)) {
    return {...todo, timeTillEnd: todo.timeTillEnd > todo.estimatedTime + 1000 ? todo.timeTillEnd - 1000 : 0 };
  }
  return todo;
}

export const decrementTimeTillEndIfInProgress = (todo: ITodo) => {
  return isInProgress(todo) ? decrementTimeTillEnd(todo) : todo;
}