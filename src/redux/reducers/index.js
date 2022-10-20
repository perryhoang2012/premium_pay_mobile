import {SET_ACTIVE_DRAWER} from '~constants/actionRedux';

var initialState = {
  activeDrawer: 1,
  activeAccount: {},
  netWorkActive: 'FACscan',
  token: '',
  listAccounts: [],
  listToken: [],
  settingApp: {
    allow_open_external_links: false,
    allow_wallet_to_run_in_background: false,
    dark_mode: false,
    notification_wallet_update: false,
    notification_transaction_update: false,
    ask_for_password_on_every_send: false,
    enable_biometrics: false,
  },
  listNetWorks: [],
  listTransactions: [],
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_ACTIVE_DRAWER': {
      return {...state, activeDrawer: action.payload};
    }
    case 'SET_ACTIVE_ACCOUNT': {
      return {...state, activeAccount: action.payload};
    }
    case 'SET_NETWORK_ACTIVE': {
      return {...state, netWorkActive: action.payload};
    }
    case 'TOKEN': {
      return {...state, token: action.payload};
    }
    case 'LIST_ACCOUNT_OF_WALLET': {
      return {...state, listAccounts: action.payload};
    }

    case 'LIST_TOKEN_OF_WALLET': {
      return {...state, listToken: action.payload};
    }

    case 'SET_SETTING_APP': {
      return {...state, settingApp: action.payload};
    }

    case 'SET_LIST_NETWORK': {
      return {...state, listNetWorks: action.payload};
    }

    case 'SET_LIST_TRANSACTION_OF_ACCOUNT': {
      return {...state, listTransactions: action.payload};
    }

    case 'CLEAR_DATA_LOCAL': {
      return {
        activeDrawer: 1,
        activeAccount: 0,
        netWorkActive: 'FACscan',
        token: '',
      };
    }
    default:
      return state;
  }
};
