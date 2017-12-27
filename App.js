import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './src/config/store';
import AppNavigation from './src/navigation';


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppNavigation />
      </Provider>
    );
  }
}

export default App;
