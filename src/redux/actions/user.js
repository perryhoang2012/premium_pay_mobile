export const requestLogin = payload => ({
  type: 'REQUEST_LOGIN',
  payload: payload,
});

export const requestGetListAccountOfWallet = payload => ({
  type: 'REQUEST_GET_LIST_ACCOUNT_OF_WALLET',
  payload: payload,
});

export const createAccountOfWallet = payload => ({
  type: 'CREATE_ACCOUNT',
  payload: payload,
});

export const requestGetListTokenOfWallet = payload => ({
  type: 'REQUEST_GET_LIST_TOKEN_OF_WALLET',
  payload: payload,
});

export const requestGetListTokenMetaData = payload => ({
  type: 'REQUEST_GET_LIST_TOKEN_META_DATA',
  payload: payload,
});

export const saveListToken = payload => ({
  type: 'LIST_TOKEN_OF_WALLET',
  payload: payload,
});

export const saveToken = payload => ({
  type: 'TOKEN',
  payload: payload,
});

export const saveListAccountOfWallet = payload => ({
  type: 'LIST_ACCOUNT_OF_WALLET',
  payload: payload,
});

export const saveListTokenOfWallet = payload => ({
  type: 'LIST_TOKEN_OF_WALLET',
  payload: payload,
});

export const cleanDataLocal = payload => ({
  type: 'CLEAR_DATA_LOCAL',
  payload: payload,
});
