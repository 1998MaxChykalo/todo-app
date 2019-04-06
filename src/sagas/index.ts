import { call, takeEvery, put, all, debounce } from 'redux-saga/effects';

import { TodoActionKeys, UpdateSearchTermAction } from './../actions/todo/types';
import { updateSearchTerm } from '../actions/todo/actions';

export function* todoSearch(action: UpdateSearchTermAction) {

  yield put(updateSearchTerm(action.payload));
  // debugger;
}

export function* watchTodoSearch(): IterableIterator<any> {
  yield debounce(500, TodoActionKeys.SEARCH_TERM_CHANGED, todoSearch);
}

export default function* rootSaga() {
  yield all([
    watchTodoSearch()
  ])
}