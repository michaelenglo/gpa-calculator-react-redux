import React, { Component } from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Card} from 'material-ui/Card';

class ResultPanel extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <MuiThemeProvider>
        <Card style={{ padding: '20px' }}>
          <h2>
            Your GPA from the last 30 Credit(s):
          </h2>

          <div className="text-center gpa-label">3.04</div>
          <div className="text-center max-gpa-label">/4.33</div>

          <h3>Taken from your last 0 semesters</h3>

          <h4>Total number of semesters: 0</h4>
          <h4>Total number of semesters: 0</h4>
        </Card>
      </MuiThemeProvider>
    );
  }
}

export default ResultPanel;
