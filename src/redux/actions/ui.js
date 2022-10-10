import {SET_ACTIVE_DRAWER} from '~constants/actionRedux';

export const setActiveDrawer = payload => ({
  type: 'SET_ACTIVE_DRAWER',
  payload: payload,
});

export const setActiveAccount = payload => ({
  type: 'SET_ACTIVE_ACCOUNT',
  payload: payload,
});

export const setNetWorkActive = payload => ({
  type: 'SET_NETWORK_ACTIVE',
  payload: payload,
});
