import { TodoState } from './../reducers/todoReducer';
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { rootReducer } from '../reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

export interface AppState {
  todos: TodoState
};
// ...
// import { helloSaga } from './sagas'

const sagaMiddleware = createSagaMiddleware()
export const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(sagaMiddleware)
  )
)
// sagaMiddleware.run(helloSaga)

const action = (type: string) => store.dispatch({type})