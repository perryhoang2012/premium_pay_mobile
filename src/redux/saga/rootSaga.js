import {fork, all} from 'redux-saga/effects';

import userSaga from './userSaga';
import storeSaga from './storeSage';

export default function* rootSaga() {
  yield all([fork(userSaga)]);
  yield all([fork(storeSaga)]);
}
