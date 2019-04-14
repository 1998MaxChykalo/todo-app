import { timeTillEndTick } from './../actions/todo/actions';
import { put, all, debounce, delay } from 'redux-saga/effects';

import { TodoActionKeys, UpdateSearchTermAction, UpdateTodoAction, TimeTillEndTickAction } from './../actions/todo/types';
import { updateSearchTerm, updateTodo } from '../actions/todo/actions';

export function* todoSearch(action: UpdateSearchTermAction) {
  yield put(updateSearchTerm(action.payload));
}

export function* watchTodoSearch(): IterableIterator<any> {
  yield debounce(500, TodoActionKeys.SEARCH_TERM_CHANGED, todoSearch);
}


export function* watchTimeTillEndTick(): IterableIterator<any> {
  while(true) {
    yield delay(1000, timeTillEndTick());
  }
}

export default function* rootSaga() {
  yield all([
    watchTodoSearch(),
    watchTimeTillEndTick(),
  ])
}