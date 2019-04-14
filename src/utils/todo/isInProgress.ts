import { ITodo, TodoStatus } from "../../reducers/todoReducer";

export const isInProgress = (todo: ITodo) => todo.status === TodoStatus["In Progress"];
