import React from 'react';
import './FormGood.scss';
import FormElement from "./components/FormElement";
import Input from "./components/Input";

const formGood = () => {
  return (
    <div className='form__elements-wrapper'>
      <FormElement className='form__element' labelText='First Name' ariaHidden={true}>
        <Input ariaLabel='First Name' type='text' name='' required={true}/>
      </FormElement>
      <label for='middle_name' aria-hidden="true">Middle name</label>
      <input id='middle_name'/>
      <FormElement className='form__element' labelText='Last Name'>
        <Input ariaLabel='Last Name' type='text' name='' required={true}/>
      </FormElement>
      <FormElement className='form__element' labelText='Post Code'>
        <Input ariaLabel='Post Code' type='text' name='' required={true}/>
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
      <label for="ice-cream-choice">Choose a flavor:</label>
      <input list="ice-cream-flavors" id="ice-cream-choice" name="ice-cream-choice"/>
      <datalist id="ice-cream-flavors">
        <option value="Chocolate"/>
        <option value="Coconut"/>
        <option value="Mint"/>
        <option value="Strawberry"/>
        <option value="Vanilla"/>
      </datalist>
    </div>
  )
};

export default formGood;