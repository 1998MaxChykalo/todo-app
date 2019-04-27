import { ITodoState } from "./ITodoState";
import ITodo from "../../../models/todo/ITodo";
import { TodoStatus } from "../../../models/todo/TodoStatus";

const getFilters = () => Object.values(TodoStatus).filter(value => typeof value === "number");

const initialState: ITodoState = {
  todos: [],
  filters: getFilters(),
  activeFilter: TodoStatus.All,
  searchTerm: "",
  error: '',
  loading: false,
};

export default initialState;