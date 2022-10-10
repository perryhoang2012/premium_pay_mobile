import {compose} from 'redux';
import {call, put, takeEvery, takeLatest} from 'redux-saga/effects';
import {
  createAccountAPI,
  getListAccountOfWalletAPI,
  getListTokenAPI,
  getListTokenMetaDataAPI,
  loginAPI,
} from '~apis/user';
import {setActiveAccount, setactiveAccount} from '~redux/actions/ui';
import {
  saveListAccountOfToken,
  saveListAccountOfWallet,
  saveListToken,
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
    console.log(action.payload);
    yield put(saveListToken(res.data.token));
  } catch (e) {
    console.log(e);
  }
}

function* getListTokenMetaDataSaga(action) {
  try {
    yield call(
      getListTokenMetaDataAPI,
      action.payload.token,
      action.payload.param,
    );
  } catch (e) {}
}

function* createAccountSaga(action) {
  try {
    yield call(createAccountAPI, action.payload);
    yield call(getListAccountsOfWalletSaga, action);
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
  yield takeLatest(
    'REQUEST_GET_LIST_TOKEN_META_DATA',
    getListTokenMetaDataSaga,
  );

  yield takeLatest('CREATE_ACCOUNT', createAccountSaga);
}

export default userSaga;
