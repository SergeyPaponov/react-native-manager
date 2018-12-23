import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import LoginForm from './components/LoginForm';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    // Initialize Firebase
    const config = {
      apiKey: "AIzaXXXXXXXXXXXXXXXXXXXXXX",
      authDomain: "manager-XXXXX.firebaseapp.com",
      databaseURL: "https://manager-XXXXX.firebaseio.com",
      projectId: "manager-XXXXX",
      storageBucket: "manager-XXXXX.appspot.com",
      messagingSenderId: "23XXXXXX1482"
    };
    firebase.initializeApp(config);
  }
  render(){
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
