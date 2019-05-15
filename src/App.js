import React, {Component} from 'react';
import './App.scss';
import FormBad from './FormBad';
import FormGood from './FormGood';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Form examples</h1>
        <hr/>
        <div className="form--bad">
          <h2>Bad example</h2>
          <FormBad/>
        </div>
        <hr/>
        <div className='form--good'>
          <h2>Good example</h2>
          <FormGood/>
        </div>
        <hr/>
      </div>
    );
  }
}

export default App;
