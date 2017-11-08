import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from '../store';

import MainPage from './MainPage';

import styles from '../styles.css';

const store = configureStore();

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Provider store={store}>
        <MainPage />
      </Provider>
    );
  }
}

export default App;
