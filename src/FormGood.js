import React, {useEffect, useState} from 'react';
import './FormGood.scss';

const formGood = () => {

  const validationMessages = {
    firstNameEmpty: 'Error: Your first name can not be empty',
    lastNameEmpty: 'Error: Your last name can not be empty',
    firstNameEmptyAudio: 'Error: Your first name can not be empty',
    lastNameEmptyAudio: 'Error: Your last name can not be empty',
    firstNameInvalidCharactersVisual: 'Error: Your first name can not contain !, ? or ;',
    lastNameInvalidCharactersVisual: 'Error: Your last name can not contain !, ? or ;',
    firstNameInvalidCharactersAudio: 'Error: Your first name can not contain explanation point, question mark or semi colon',
    lastNameInvalidCharactersAudio: 'Error: Your last name can not contain explanation point, question mark or semi colon',
  };

  const regex = /[(?!;)]/g;

  const [firstNameErrorMessageAudio, setFirstNameErrorMessageAudio] = useState('');
  const [lastNameErrorMessageAudio, setLastNameErrorMessageAudio] = useState('');

  useEffect(() => {
    document.title = 'Flower delivery form';
    document.querySelector('.submit-button--good').addEventListener('keydown', handleSubmitKeyPress);
    document.querySelector('.modal--good').addEventListener('keydown', trapTabKey);
    document.querySelector('.modal-overlay--good').addEventListener('click', closeModal);
  });

  const handleSubmitClick = () => {
    if (validateFirstName() && validateLastName()) {
      document.querySelector('.modal--good').style.display = 'block';
      document.querySelector('.modal-overlay--good').style.display = 'block';
      document.querySelector('.close-button--good').focus();
    }
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

  const handleSubmitKeyPress = (e) => {
    // check for space bar or enter press
    if (e.keyCode === 32) {
      handleSubmitClick();
    }
    if (e.keyCode === 13) {
      e.preventDefault();
      handleSubmitClick();
    }
  };

  const validateFirstName = () => {
    let firstNameInput = document.getElementById('first-name-field');

    const invalidCharactersFound = firstNameInput.value.match(regex) || [];

    if (firstNameInput.value === '') {
      setFirstNameErrorMessageAudio(validationMessages.firstNameEmptyAudio);
      firstNameInput.focus();
      return false;
    } else if (invalidCharactersFound.length !== 0) {
      setFirstNameErrorMessageAudio(validationMessages.firstNameInvalidCharactersAudio);
      firstNameInput.focus();
      return false;
    }
    else {
      setFirstNameErrorMessageAudio('');
      return true;
    }
  };

  const validateLastName = () => {
    let lastNameInput = document.getElementById('last-name-field');

    const invalidCharactersFound = lastNameInput.value.match(regex) || [];

    if (lastNameInput.value === '') {
      setLastNameErrorMessageAudio(validationMessages.lastNameEmptyAudio);
      lastNameInput.focus();
      return false;
    } else if (invalidCharactersFound.length !== 0) {
      setLastNameErrorMessageAudio(validationMessages.lastNameInvalidCharactersAudio);
      lastNameInput.focus();
      return false;
    }
    else {
      setLastNameErrorMessageAudio('');
      return true;
    }
  };

  return (
    <div className="form--good">
      <div className="form__element-wrapper"><h1>Flower delivery form</h1></div>

      <div className="form__element-wrapper form__element-wrapper--good"
           id="form-element__first-name"><label>First Name<span
        aria-hidden="true">*</span><input
        className="form__input-field" id='first-name-field' type='text' aria-required="true"
        aria-labelledby="form-element__first-name"/></label>
        <span
          className='form__input-field--error'  aria-live='assertive' aria-relevant="text">{firstNameErrorMessageAudio}</span></div>

      <div className="form__element-wrapper form__element-wrapper--good"
           id="form-element__last-name"><label>Last Name<span
        aria-hidden="true">*</span><input
        className="form__input-field" id='last-name-field' type='text' aria-required="true"
        aria-labelledby="form-element__last-name"/></label>
        <span
          className='form__input-field--error' aria-live='assertive' aria-relevant="text">{lastNameErrorMessageAudio}</span></div>

      <div className="form__element-wrapper"><label>Post Code &nbsp;<input className="form__input-field" type='text'
                                                                           aria-required="false"/></label></div>
      <div className="form__element-wrapper">
        <label id="radio_label" aria-label='Select your preferred flower colour'>Flower colour selector</label>
        <div className='radio-button-group' role='radiogroup' aria-labelledby="radio_label">
          <label><input id="radio-button--blue" type='radio' name='color-radio'/>Blue</label>
          <label><input id="radio-button--yellow" type='radio' value="yellow" name='color-radio'/>Yellow</label>
          <label><input id="radio-button--red" type='radio' value='red' name='color-radio'/>Red</label>
          <label><input id="radio-button--green" type='radio' value='green' name='color-radio'/>Green</label>
        </div>
      </div>
      <div className="form__element-wrapper">
        <label for="dDate">Delivery date</label>
        <input type="date" id="dDate" className="date-picker"/>
      </div>
      <div className="form__element-wrapper">
        <div className='checkbox-wrapper'>
          <input id='checkbox-input' name='checkbox-send-confirmation' type='checkbox'/>
          <label for='checkbox-input'>I would not like to receive a confirmation email!</label>
        </div>
      </div>
      <div className="form__element-wrapper form__element-wrapper--center">
        <div tabIndex='0' role='button' className='submit-button--good' aria-label="Submit information"
             onClick={handleSubmitClick}>Submit
        </div>
      </div>
      <div className="modal--good" role="dialog" aria-labelledby="modal-title" aria-describedby="modal-body">
        <h1 id="modal-title">Success</h1>
        <div className="modal-body">
          <p>Your form has been submitted!</p>
        </div>
        <button className="close-button--good" aria-label="Close modal" onClick={handleCloseClick}>Close</button>
      </div>
      <div className="modal-overlay--good"/>
    </div>
  )
};

export default formGood;
