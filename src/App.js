import React, {Component} from 'react';
import './App.scss';
import FormBad from './FormBad';
import FormGood from './FormGood';
import {Route, Redirect, Switch} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className='app'>
        <Switch>
          <Redirect exact from='/' to='/bad'/>
          <Route path='/good' component={FormGood}/>
          <Route path='/bad' component={FormBad}/>
        </Switch>
      </div>
    );
  }
}

export default App;
