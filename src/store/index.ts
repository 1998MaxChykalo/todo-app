import { TodoState } from './../reducers/todoReducer';
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { rootReducer } from '../reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootSaga from '../sagas';

export interface AppState {
  todos: TodoState
};
// ...
// import { rootSaga } from './sagas'

const sagaMiddleware = createSagaMiddleware()
export const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(sagaMiddleware)
  )
)
sagaMiddleware.run(rootSaga)

const action = (type: string) => store.dispatch({type})