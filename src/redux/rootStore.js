import {createStore, applyMiddleware} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import createSagaMiddleware from 'redux-saga';
import {userReducer} from './reducers';
import logger from 'redux-logger';
import rootSaga from './saga/rootSaga';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const sagaMiddleware = createSagaMiddleware();

const persistedReducer = persistReducer(persistConfig, userReducer);

let store = createStore(
  persistedReducer,
  applyMiddleware(logger, sagaMiddleware),
);

let persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export const configureStore = () => {
  return {store, persistor};
};
