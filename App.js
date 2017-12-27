import React, { Component } from 'react';
import { Provider } from 'react-redux';
import firebase from 'firebase';

import store from './src/config/store';
import AppNavigation from './src/navigation';


class App extends Component {

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyAandJABqieT3fXk2palvAgbYz5B8y9EsM',
      authDomain: 'practiciaappsubu.firebaseapp.com',
      databaseURL: 'https://practiciaappsubu.firebaseio.com',
      projectId: 'practiciaappsubu',
      storageBucket: 'practiciaappsubu.appspot.com',
      messagingSenderId: '753143230840'
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        console.log('logged In');
      } else {
        console.log('not looged in');
      }
    });
  }

  render() {
    return (
      <Provider store={store}>
        <AppNavigation />
      </Provider>
    );
  }
}

export default App;
