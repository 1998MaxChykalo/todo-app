import { isInProgress } from "./isInProgress";
import ITodo from "../../models/todo/ITodo";
import { TIME_DECREMENT } from "../../constants";

export const decrementTimeTillEnd = (todo: ITodo) => {
  return todo.timeTillEnd
    ? {
        ...todo,
        timeTillEnd:
          todo.timeTillEnd > TIME_DECREMENT
            ? todo.timeTillEnd - TIME_DECREMENT
            : 0
      }
    : todo;
};

export const decrementTimeTillEndIfInProgress = (todo: ITodo) =>
  isInProgress(todo) ? decrementTimeTillEnd(todo) : todo;
