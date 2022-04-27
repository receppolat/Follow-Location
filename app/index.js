import React, { Component } from 'react';
//redux
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import Navigation from './navigation';
import { store, persistor } from './redux/store';



export default class App extends Component {
  render() {
    if (!store) {
      return null;
    }

    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Navigation />
        </PersistGate>
      </Provider>
    );
  }
}
