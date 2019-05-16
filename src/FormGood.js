import React from 'react';
import './FormGood.scss';
import FormElement from "./components/FormElement";
import Input from "./components/Input";

const formGood = () => {

  const handleSubmitClick = () => {
    document.querySelector('.modal--good').style.display = 'block';
    document.querySelector('.modal-overlay--good').style.display = 'block';
    document.querySelector('.close-button--good').focus();
    document.querySelector('.modal--good').addEventListener('keydown', trapTabKey);
    document.querySelector('.modal-overlay--good').addEventListener('click', closeModal);
  };

  const handleCloseClick = () => {
    closeModal();
  };

  const closeModal = () => {
    document.querySelector('.modal--good').style.display = 'none';
    document.querySelector('.modal-overlay--good').style.display = 'none';
    document.querySelector('.submit-button--good').focus();

  };

  const trapTabKey = (e) => {
    // Check for TAB key press
    if (e.keyCode === 9) {
          e.preventDefault();
      }

    // ESCAPE
    if (e.keyCode === 27) {
      closeModal();
    }
  };

  return (
    <div className='form__elements-wrapper'>
      <FormElement className='form__element' labelText='First Name'>
        <Input type='text' required={true}/>
      </FormElement>
      <FormElement className='form__element' labelText='Last Name'>
        <Input ariaLabel='Last Name' type='text' required={true}/>
      </FormElement>
      <FormElement className='form__element' labelText='Post Code'>
        <Input ariaLabel='Post Code' type='text' required={false}/>
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
      <div className="form-element--wrapper">
        <button className="submit-button--good" aria-label="Submit" onClick={handleSubmitClick}>Submit</button>
      </div>
      <div className="modal--good" role="dialog" aria-labelledby="login">
        <h1 id="login">TEMPTITLE</h1>
        <div className="field">
          <p>TEMPBODY</p>
        </div>
        <button className="close-button--good" aria-label="Close modal" onClick={handleCloseClick}>Close</button>
      </div>
      <div className="modal-overlay--good"></div>
    </div>
  )
};

export default formGood;