import React, { Component } from 'react';
import './App.css';
import BadForm from './BadForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Create an account</h1>
        <BadForm />
      </div>
    );
  }
}

export default App;
