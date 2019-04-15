import React, {Component} from 'react';
import './App.scss';
import FormBad from './FormBad';
import FormElement from "./components-good/FormElement";
import Input from './components-good/Input';

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
          <div className='form__elements-wrapper'>
            <FormElement className='form__element' labelText='First Name' ariaHidden={true}>
              <Input ariaLabel='First Name' type='text' name=''/>
            </FormElement>
            <label for='middle_name' aria-hidden="true">Middle name</label>
            <input id='middle_name'/>
            <FormElement className='form__element' labelText='Last Name'>
              <Input ariaLabel='Last Name' type='text' name=''/>
            </FormElement>
            <FormElement className='form__element' labelText='Post Code'>
              <Input ariaLabel='Post Code' type='text' name=''/>
            </FormElement>
            <label id="radio_label">Colour selector</label>
              <div className='radiobutton-group' role='radiogroup' aria-labelledby="radio_label">
                <input id="radio--blue" type='radio' value='blue' name='color-radio'/>
                <label for='radio--blue'>Blue</label>
                <input id="radio--yellow" type='radio' value='yellow' name='color-radio'/>
                <label for='radio--yellow'>Yellow</label>
                <input id="radio--red" type='radio' value='red' name='color-radio'/>
                <label for='radio--red'>Red</label>
                <input id="radio--green" type='radio' value='green' name='color-radio'/>
                <label for='radio--green'>Green</label>
              </div>
            <div className='checkbox-wrapper'>
              <input id='checkbox-input' name='checkbox-send-confirmation' type='checkbox'/>
              <label for='checkbox-input'>I would like to receive a confirmation email!</label>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
