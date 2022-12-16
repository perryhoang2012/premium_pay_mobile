import service from '~utils/axiosService';

const URL_LOGIN = '/accounts/login';
const URL_GEN_MNEMONIC = '/accounts/gen';
const URL_CREATE_WALLET = '/accounts/new';
const URL_GET_WALLET = 'accounts/list';
const URL_GET_TOKEN = 'accounts/tokens';
const URL_CREATE_WALLET_TOKEN = 'accounts/tokens/new';
const URL_TRANSACTIONS = 'accounts/transactions';
const URL_NETWORKS = 'accounts/networks';
const URL_TRANSACTIONS_ESTIMATE = 'accounts/transactions/estimate';

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
  return service({
    url: URL_GET_TOKEN,
    method: 'post',
    token,
    data,
  });
}

// export function getListTokenMetaDataAPI(token, params) {
//   return service({
//     url: `${URL_GET_TOKEN}` + `/${params}`,
//     method: 'get',
//     token,
//   });
// }

export function createWalletTokenAPI(data) {
  return service({
    url: URL_CREATE_WALLET_TOKEN,
    method: 'post',
    data,
  });
}

export function getTokenMetadataAPI(token, params) {
  return service({
    url: `${URL_GET_TOKEN}` + `/${params.chainId}` + `/${params.address}`,
    method: 'get',
    token,
  });
}

export function sendTokenAPI(token, data) {
  return service({
    url: URL_TRANSACTIONS,
    method: 'post',
    data,
    token,
  });
}

export function getListTransactionsOfAccountAPI(token, params) {
  return service({
    url: URL_TRANSACTIONS,
    method: 'get',
    token,
    params,
  });
}

export function getListNetWorksAPI(token) {
  return service({
    url: URL_NETWORKS,
    method: 'get',
    token,
  });
}
export function estimateGasToSendTokenAPI(token, data) {
  return service({
    url: URL_TRANSACTIONS_ESTIMATE,
    method: 'post',
    token,
    data,
  });
}
