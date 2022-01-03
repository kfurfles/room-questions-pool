import { createStore, applyMiddleware, compose} from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import { persistStore } from 'redux-persist'

const sagaMiddleware = createSagaMiddleware()

import rootReducer from './rootReducer';

const enhancer = compose(
    applyMiddleware(sagaMiddleware),
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);

export default function configureStore() {
  const store = createStore(rootReducer, enhancer);
  return store;
}

export const store = configureStore()
export type IRootState = ReturnType<typeof rootReducer>;
export const persistor = persistStore(store);
