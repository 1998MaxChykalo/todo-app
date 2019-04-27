import { FetchTodos, TodoActionKeys } from "../actions/todo/types";

import { put, take, call } from "redux-saga/effects";

import { fetchTodosStarted, fetchTodosSuccess, fetchTodosFailure } from "../actions/todo/actions";
import ITodo from "../../models/todo/ITodo";
import TodoService from "../../api/TodoService";



export function* fetchTodos(action: FetchTodos) {
  yield put(fetchTodosStarted());
  try {
    const todos = TodoService.getTodos();
    yield put(fetchTodosSuccess(todos));
  } catch (error) {
    yield put(fetchTodosFailure(error && error.message))
  }
}

export function* watchFetchTodos() {
  while(true) {
    const action = yield take(TodoActionKeys.FETCH_TODOS);
    yield call(fetchTodos, action);
  }
}