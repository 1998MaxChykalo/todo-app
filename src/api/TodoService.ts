import ITodo from "../models/todo/ITodo";

const getTodosFromStorage = () => <ITodo[]>JSON.parse(localStorage.getItem("todos") || "[]");

export default class TodoService {
  static getTodos = (url?: string) => getTodosFromStorage()
}