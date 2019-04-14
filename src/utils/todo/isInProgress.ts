import ITodo from "../../models/todo/ITodo";
import { TodoStatus } from "../../models/todo/TodoStatus";

export const isInProgress = (todo: ITodo) => todo.status === TodoStatus["In Progress"];
