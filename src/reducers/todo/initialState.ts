import { ITodoState } from "./ITodoState";
import ITodo from "../../models/todo/ITodo";
import { TodoStatus } from "../../models/todo/TodoStatus";

const initialState: ITodoState = {
  todos: <ITodo[]>JSON.parse(localStorage.getItem("todos") || "[]"),
  filters: Object.values(TodoStatus).filter(value => typeof value === "number"),
  activeFilter: TodoStatus.All,
  searchTerm: ""
};

export default initialState;