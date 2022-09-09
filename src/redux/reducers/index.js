import {SET_ACTIVE_DRAWER} from '~constants/actionRedux';

var initialState = {
  activeDrawer: 0,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_ACTIVE_DRAWER': {
      return {...state, activeDrawer: action.payload};
    }
    default:
      return state;
  }
};
