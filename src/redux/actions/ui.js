import {SET_ACTIVE_DRAWER} from '~constants/actionRedux';

export const setActiveDrawer = payload => ({
  type: 'SET_ACTIVE_DRAWER',
  payload: payload,
});

export const setActiveWallet = payload => ({
  type: 'SET_ACTIVE_WALLET',
  payload: payload,
});

export const setNetWorkActive = payload => ({
  type: 'SET_NETWORK_ACTIVE',
  payload: payload,
});
