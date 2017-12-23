import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

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
        console.log('onAuthStateChanged');
        console.log(user);
        console.log('onAuthStateChanged end');
      } else {
        console.log('not looged in');
      }
    });
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
        <Provider store={store}>
          <Router />
        </Provider>
    );
  }
}


export default App;
