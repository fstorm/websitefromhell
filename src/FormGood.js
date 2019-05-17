import React from 'react';
import './FormGood.scss';

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
    <div className="form--good">
      <div className="form__element-wrapper"><label className="form__element">First Name<span aria-hidden="true">*</span><input type='text' aria-required="true"/></label></div>
      <div className="form__element-wrapper"><label className="form__element">Last Name<span aria-hidden="true">*</span><input type='text' aria-required="true"/></label></div>
      <div className="form__element-wrapper"><label className="form__element">Post Code<input type='text' aria-required="false"/></label></div>
      <div className="form__element-wrapper">
        <label id="radio_label">Colour selector</label>
        <div className='radio-button-group' role='radiogroup' aria-labelledby="radio_label">
          <label><input id="radio-button--blue" type='radio' name='color-radio'/>Blue</label>
          <label><input id="radio-button--yellow" type='radio' value="yellow" name='color-radio'/>Yellow</label>
          <label><input id="radio-button--red" type='radio' value='red' name='color-radio'/>Red</label>
          <label><input id="radio-button--green" type='radio' value='green' name='color-radio'/>Green</label>
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
        <button className="submit-button--good" aria-label="Submit information" onClick={handleSubmitClick}>Submit</button>
      </div>
      <div className="modal--good" role="dialog" aria-labelledby="modal-title" aria-describedby="modal-body">
        <h1 id="modal-title">Success</h1>
        <div className="modal-body">
          <p>Your application has been received!</p>
        </div>
        <button className="close-button--good" aria-label="Close modal" onClick={handleCloseClick}>Close</button>
      </div>
      <div className="modal-overlay--good"></div>
    </div>
  )
};

export default formGood;
