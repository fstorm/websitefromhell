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

        <label>
          Select an option
          <input name='sex' list='sexes'/>
          <datalist id='sexes'>
            <option aria-setsize="3" aria-posinset="1">Option 1</option>
            <option aria-setsize="3" aria-posinset="2">Option 2</option>
            <option aria-setsize="3" aria-posinset="3">Option 3</option>
          </datalist>
        </label>
      </div>
    );
  }
}

export default App;
