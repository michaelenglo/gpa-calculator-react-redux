import React, { Component } from 'react';

import ResultPanel from './ResultPanel';

class MainPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Transfer GPA Calculator</h1>
        <ResultPanel />
      </div>
    );
  }
}

export default MainPage;
