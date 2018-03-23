import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import myReducer from './reducers';
import rootSaga from './sagas';

export default function configureStore() {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    myReducer,
    applyMiddleware( sagaMiddleware )
  )
  sagaMiddleware.run(rootSaga);
  return store;
}
