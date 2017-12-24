import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import AppNavigation from './src/Navigation';


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
