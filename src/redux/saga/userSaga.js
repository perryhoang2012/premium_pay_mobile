import {functions} from 'lodash';
import {compose} from 'redux';
import {call, put, takeEvery, takeLatest} from 'redux-saga/effects';
import {
  createAccountAPI,
  getListAccountOfWalletAPI,
  getListNetWorksAPI,
  getListTokenAPI,
  getListTokenMetaDataAPI,
  getListTransactionsOfAccountAPI,
  loginAPI,
} from '~apis/user';
import {setActiveAccount, setactiveAccount} from '~redux/actions/ui';
import {
  saveListAccountOfToken,
  saveListAccountOfWallet,
  saveListNetWorks,
  saveListToken,
  saveListTransactionsOfAccount,
  saveNetWork,
  saveToken,
} from '~redux/actions/user';

function* loginSaga(action) {
  try {
    const res = yield call(loginAPI, action.payload);
    yield put(saveToken(res.data.token));
  } catch (e) {}
}

function* getListAccountsOfWalletSaga(action) {
  try {
    const res = yield call(getListAccountOfWalletAPI, action.payload);
    yield put(saveListAccountOfWallet(res.data.accounts));
    yield put(setActiveAccount(res.data.accounts[0]));
  } catch (e) {}
}

function* getListTokenOfWalletSaga(action) {
  try {
    const res = yield call(
      getListTokenAPI,
      action.payload.token,
      action.payload.body,
    );
    yield put(saveListToken(res.data.token));
  } catch (e) {}
}

// function* getListTokenMetaDataSaga(action) {
//   try {
//     yield call(
//       getListTokenMetaDataAPI,
//       action.payload.token,
//       action.payload.param,
//     );
//   } catch (e) {}
// }

function* getListNetWorksSaga(action) {
  try {
    const res = yield call(getListNetWorksAPI, action.payload.token);
    yield put(saveListNetWorks(res.data?.networks));
    yield put(saveNetWork(res.data?.networks?.[0]));
  } catch (e) {}
}

function* createAccountSaga(action) {
  try {
    yield call(createAccountAPI, action.payload);
    yield call(getListAccountsOfWalletSaga, action);
  } catch (e) {}
}

function* getListTransactionsOfAccountSaga(action) {
  try {
    const params = action.payload.params;
    const res = yield call(
      getListTransactionsOfAccountAPI,
      action.payload.token,
      params,
    );
    yield put(saveListTransactionsOfAccount(res.data));
  } catch (e) {}
}

function* userSaga() {
  yield takeLatest('REQUEST_LOGIN', loginSaga);
  yield takeLatest(
    'REQUEST_GET_LIST_ACCOUNT_OF_WALLET',
    getListAccountsOfWalletSaga,
  );
  yield takeLatest(
    'REQUEST_GET_LIST_TOKEN_OF_WALLET',
    getListTokenOfWalletSaga,
  );
  // yield takeLatest(
  //   'REQUEST_GET_LIST_TOKEN_META_DATA',
  //   getListTokenMetaDataSaga,
  // );

  yield takeLatest('CREATE_ACCOUNT', createAccountSaga);

  yield takeLatest('REQUEST_GET_LIST_NETWORK', getListNetWorksSaga);

  yield takeLatest(
    'REQUEST_GET_LIST_TRANSACTIONS_OF_ACCOUNT',
    getListTransactionsOfAccountSaga,
  );
}

export default userSaga;
