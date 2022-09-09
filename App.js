import React from 'react';
import AppNavigator from '~navigators/AppNavigator';
import {configureStore} from '~redux/rootStore';
import {Provider} from 'react-redux';

const App = () => {
  const {store} = configureStore();

  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
};

export default App;
