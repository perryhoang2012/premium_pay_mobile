import service from '~utils/axiosService';

const URL_LOGIN = '/accounts/login';
const URL_GEN_MNEMONIC = '/accounts/gen';
const URL_CREATE_WALLET = '/accounts/new';
const URL_GET_WALLET = 'accounts/list';
const URL_GET_TOKEN = 'accounts/tokens';
const URL_CREATE_WALLET_TOKEN = 'accounts/tokens/new';
const URL_TRANSACTIONS = 'accounts/transactions';

export function loginAPI(data) {
  return service({
    url: URL_LOGIN,
    method: 'post',
    data,
  });
}

export function genMnemonicAPI(data) {
  return service({
    url: URL_GEN_MNEMONIC,
    method: 'post',
    data,
  });
}

export function createAccountAPI(token) {
  return service({
    url: URL_CREATE_WALLET,
    method: 'post',
    token,
  });
}

export function getListAccountOfWalletAPI(token) {
  return service({
    url: URL_GET_WALLET,
    method: 'get',
    token,
  });
}

export function getListTokenAPI(token, data) {
  console.log(token);
  return service({
    url: URL_GET_TOKEN,
    method: 'post',
    token,
    data,
  });
}

export function getListTokenMetaDataAPI(token, params) {
  return service({
    url: `${URL_GET_TOKEN}/${params}`,
    method: 'get',
    token,
  });
}

export function createWalletTokenAPI(data) {
  return service({
    url: URL_CREATE_WALLET_TOKEN,
    method: 'post',
    data,
  });
}

export function getTokenMetadataAPI(address) {
  return service({
    url: `${URL_GET_TOKEN}` + `/${address}`,
    method: 'post',
  });
}

export function sendTokenAPI(data) {
  return service({
    url: URL_TRANSACTIONS,
    method: 'post',
    data,
  });
}
