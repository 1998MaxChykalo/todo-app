import { call, takeEvery, put, all, debounce } from 'redux-saga/effects';

import { TodoActionKeys, UpdateSearchTermAction, UpdateTodoAction } from './../actions/todo/types';
import { updateSearchTerm, updateTodo } from '../actions/todo/actions';

export function* todoSearch(action: UpdateSearchTermAction) {

  yield put(updateSearchTerm(action.payload));
  // debugger;
}

export function* watchTodoSearch(): IterableIterator<any> {
  yield debounce(500, TodoActionKeys.SEARCH_TERM_CHANGED, todoSearch);
}

export function* todoInProgress(action: UpdateTodoAction) {
  yield put(updateTodo(action.payload));
}

// export function* watchTodoInProgress() {
  // yield debounce(500, )
// }

export default function* rootSaga() {
  yield all([
    watchTodoSearch()
  ])
}