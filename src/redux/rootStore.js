import {createStore, applyMiddleware} from 'redux';

import {userReducer} from './reducers';
import logger from 'redux-logger';

let store = createStore(userReducer, applyMiddleware(logger));

export const configureStore = () => {
  return {store};
};
