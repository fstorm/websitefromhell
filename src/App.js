import React, { Component } from 'react';
import './App.scss';
import BadForm from './BadForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Create an account</h1>
        <BadForm />
        <button onClick={(() => {alert('Submitting...');})}>Submit</button>
      </div>
    );
  }
}

export default App;
