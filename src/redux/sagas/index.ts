import { put, all, debounce, delay } from 'redux-saga/effects';
import { TIME_DECREMENT } from '../../constants';
import { updateSearchTerm, timeTillEndTick } from '../actions/todo/actions';
import { UpdateSearchTermAction, TodoActionKeys } from '../actions/todo/types';
import { watchFetchTodos } from './fetchTodos';

export function* searchTodo(action: UpdateSearchTermAction) {
  yield put(updateSearchTerm(action.payload));
}

export function* watchTodoSearch(): IterableIterator<any> {
  yield debounce(500, TodoActionKeys.SEARCH_TERM_CHANGED, searchTodo);
}

export function* watchTimeTillEndTick(): IterableIterator<any> {
  while(true) {
    yield delay(TIME_DECREMENT);
    yield put(timeTillEndTick());
  }
}

export default function* rootSaga() {
  yield all([
    watchTodoSearch(),
    watchTimeTillEndTick(),
    watchFetchTodos()
  ])
}