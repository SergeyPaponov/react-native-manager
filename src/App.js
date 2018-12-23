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
      apiKey: "AIzaSyAKx91j59MYQAZDNFXsc-9tH_fFPLBT4b4",
      authDomain: "manager-f9161.firebaseapp.com",
      databaseURL: "https://manager-f9161.firebaseio.com",
      projectId: "manager-f9161",
      storageBucket: "manager-f9161.appspot.com",
      messagingSenderId: "239351781482"
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
