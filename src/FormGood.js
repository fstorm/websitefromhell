import React from 'react';
import './FormGood.scss';
import FormElement from "./components/FormElement";
import Input from "./components/Input";

const formGood = () => {
  return (
    <div className='form__elements-wrapper'>
      <FormElement className='form__element' labelText='First Name*'>
        <Input ariaLabel='First Name' type='text' name='' required={true}/>
      </FormElement>
      <label id='middle_name' aria-hidden="true">Middle name</label>
      <input aria-labelledby='middle_name'/>
      <FormElement className='form__element' labelText='Last Name*'>
        <Input ariaLabel='Last Name' type='text' name='' required={true}/>
      </FormElement>
      <FormElement className='form__element' labelText='Post Code*'>
        <Input ariaLabel='Post Code' type='text' name='' required={true}/>
      </FormElement>
      <label id="radio_label">Colour selector</label>
      <div className='radiobutton-group' role='radiogroup' aria-labelledby="radio_label">
        <label ><input id="radio--blue" type='radio' name='color-radio'/>Blue</label>


        <input aria-labelledby="radio--yellow" type='radio' name='color-radio'/>
        <label id='radio--yellow'>Yellow</label>
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
        <option value="Chocolate" aria-setsize="5" aria-posinset="1"/>
        <option value="Coconut" aria-setsize="5" aria-posinset="2"/>
        <option value="Mint" aria-setsize="5" aria-posinset="3"/>
        <option value="Strawberry" aria-setsize="5" aria-posinset="4"/>
        <option value="Vanilla" aria-setsize="5" aria-posinset="5"/>
      </datalist>

      <label>
        Select an option
        <div>
          <select>
            <option value="1" aria-setsize="3" aria-posinset="1">Option 1</option>
            <option value="2" aria-setsize="3" aria-posinset="2">Option 2</option>
            <option value="3" aria-setsize="3" aria-posinset="3">Option 3</option>
          </select>
        </div>
      </label>

    </div>
  )
};

export default formGood;