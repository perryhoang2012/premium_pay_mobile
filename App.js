import React from 'react';
import AppNavigator from '~navigators/AppNavigator';
import {configureStore} from '~redux/rootStore';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import Toast from 'react-native-toast-message';
import ModalLoading from '~components/ModalLoading';

const App = () => {
  const {store, persistor} = configureStore();

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppNavigator />
        <Toast />
        <ModalLoading />
      </PersistGate>
    </Provider>
  );
};

export default App;
