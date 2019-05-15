import React from 'react';
import './FormGood.scss';
import FormElement from "./components/FormElement";
import Input from "./components/Input";

const formGood = () => {
  return (
    <div className='form__elements-wrapper'>
      <FormElement className='form__element' labelText='First Name'>
        <Input type='text' name='' required={true}/>
      </FormElement>
      <FormElement className='form__element' labelText='Last Name'>
        <Input ariaLabel='Last Name' type='text' name='' required={true}/>
      </FormElement>
      <FormElement className='form__element' labelText='Post Code'>
        <Input ariaLabel='Post Code' type='text' name='' required={false}/>
      </FormElement>
      <div className="form-element--wrapper">
        <label id="radio_label">Colour selector</label>
        <div className='radiobutton-group' role='radiogroup' aria-labelledby="radio_label">
          <label><input id="radio--blue" type='radio' name='color-radio'/>Blue</label>
          <label><input id="radio--yellow" type='radio' value="yellow" name='color-radio'/>Yellow</label>
          <label><input id="radio--red" type='radio' value='red' name='color-radio'/>Red</label>
          <label><input id="radio--green" type='radio' value='green' name='color-radio'/>Green</label>
        </div>
      </div>
      <div className="form-element--wrapper">
        <label for="dDate">Delivery date</label>
        <input type="date" id="dDate" className="date-picker"/>
      </div>
      <div className="form-element--wrapper">
        <div className='checkbox-wrapper'>
          <input id='checkbox-input' name='checkbox-send-confirmation' type='checkbox'/>
          <label for='checkbox-input'>I would like to receive a confirmation email!</label>
        </div>
      </div>
    </div>
  )
};

export default formGood;