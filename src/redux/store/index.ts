
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { rootReducer } from '../reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootSaga from '../sagas';
import { ITodoState } from '../reducers/todo/ITodoState';

export interface AppState {
  todos: ITodoState
};

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(sagaMiddleware)
  )
)
sagaMiddleware.run(rootSaga)
