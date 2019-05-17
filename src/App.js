import React, {Component} from 'react';
import './App.scss';
import FormBad from './FormBad';
import FormGood from './FormGood';
import {Route} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className='app'>
        <Route path='/good' component={FormGood}/>
        <Route path='/bad' component={FormBad}/>
      </div>
    );
  }
}

export default App;
