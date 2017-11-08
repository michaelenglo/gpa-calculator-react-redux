import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from '../store';

const store = configureStore();

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Provider store={store}>
        <br />
      </Provider>
    );
  }
}

export default App;
