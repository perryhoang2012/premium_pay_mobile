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

export const requestGetListNetWork = payload => ({
  type: 'REQUEST_GET_LIST_NETWORK',
  payload: payload,
});

export const requestGetListTransactionsOfAccount = payload => ({
  type: 'REQUEST_GET_LIST_TRANSACTIONS_OF_ACCOUNT',
  payload: payload,
});

// export const requestGetListTokenMetaData = payload => ({
//   type: 'REQUEST_GET_LIST_TOKEN_META_DATA',
//   payload: payload,
// });

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

export const saveSettingApp = payload => ({
  type: 'SET_SETTING_APP',
  payload: payload,
});

export const cleanDataLocal = payload => ({
  type: 'CLEAR_DATA_LOCAL',
  payload: payload,
});

export const saveListNetWorks = payload => ({
  type: 'SET_LIST_NETWORK',
  payload: payload,
});

export const saveNetWork = payload => ({
  type: 'SET_NETWORK_ACTIVE',
  payload: payload,
});

export const saveListTransactionsOfAccount = payload => ({
  type: 'SET_LIST_TRANSACTION_OF_ACCOUNT',
  payload: payload,
});

export const setLoading = payload => ({
  type: 'SET_LOADING',
  payload: payload,
});
