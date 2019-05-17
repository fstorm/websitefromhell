import React from 'react';
import './FormBad.scss';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

let modalToOpen;
let modalOverlayBad;

const validate = () => {
  const firstName = document.querySelector(".first-name--bad");
  const lastName = document.querySelector(".last-name--bad");
  if (firstName.value.length === 0 || lastName.value.length === 0) {
    return 'Your name is empty!';
  } else if (firstName.value.length > 3 || lastName.value.length > 3) {
    return 'Your name is too long!';
  } else {
    return true;
  }
};

const openModal = (modalTitle) => {
  modalTitle === 'Error' ? modalToOpen = document.querySelector('.modal-error--bad') : modalToOpen = document.querySelector('.modal-complete--bad');
  modalOverlayBad = document.querySelector('.modal-overlay--bad');

  modalToOpen.style.display = 'block';
  modalOverlayBad.style.display = 'block';
};

const closeModal = () => {
  modalToOpen.style.display = 'none';
  modalOverlayBad.style.display = 'none';
};

const handleSubmitClick = () => {
  if (validate() === 'Your name is too long!') {
    openModal('Error', 'Your name is too long!');
  } else if (validate() === 'Your name is empty!') {
    openModal('Error', 'Your name is empty!');
  } else {
    openModal('Completed', 'Your request has been submitted!')
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

const escapeModal = (e) => {
  if (e.keyCode === 27) {
    e.preventDefault();
    closeModal();
  }
};

class formBad extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date()
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    document.querySelector('.modal-error--bad').addEventListener('keydown', escapeModal);
    document.querySelector('.modal-complete--bad').addEventListener('keydown', escapeModal);
    document.querySelector('.modal-overlay--bad').addEventListener('click', closeModal);
    document.querySelector('.submit-button--bad').addEventListener('keydown', handleSubmitKeyPress);
  }

  handleChange(date) {
    this.setState({
      startDate: date
    });
  };

  render() {
    return (
      <div className="form--bad">
        <div className="form__element-wrapper"><h1>Flower delivery form</h1></div>
        <div className="form__element-wrapper form__element-wrapper--bad">
          <div className="labels">
            <label>First Name*</label>
            <label>Last Name*</label>
            <label>Post Code</label>
          </div>
          <div className="inputs">
            <input className="first-name--bad"/>
            <input className="last-name--bad"/>
            <input className="post-code--bad"/>
          </div>
        </div>
        <div className="form__element-wrapper">
          <div className="colour-selector--bad">
            <label>Colour selector</label>
            <div className='radiobutton-group'>
              <input type='radio' name='color-radio'/>
              <label>Blue</label>
              <input type='radio' name='color-radio'/>
              <label>Yellow</label>
              <input type='radio' name='color-radio'/>
              <label>Red</label>
              <input type='radio' name='color-radio'/>
              <label>Green</label>
            </div>
          </div>
        </div>
        <div className="form__element-wrapper">
          <div className="date-picker--bad">
            <label>Delivery date</label>
            <DatePicker
              selected={this.state.startDate}
              onChange={this.handleChange}
              dateFormat="dd/MM/yyyy"
            />
          </div>
        </div>
        <div className="form__element-wrapper">
          <div className='checkbox-container'>
            <input type='checkbox'/>
            <label>I would like to receive a confirmation email!</label>
          </div>
        </div>
        <div className="form__element-wrapper form__element-wrapper--center">
          <div tabIndex='0' className='submit-button--bad' onClick={handleSubmitClick}>Submit</div>
        </div>
        <div className="modal-error--bad">
          <h1 className="modal-title--bad">Error</h1>
          <h2 className="modal-body--bad">Your name is empty!</h2>
          <button onClick={() => closeModal()}>Close</button>
        </div>
        <div className="modal-complete--bad">
          <h1 className="modal-title--bad">Completed</h1>
          <h2 className="modal-body--bad">Your request has been submitted!</h2>
          <button onClick={() => closeModal()}>Close</button>
        </div>
        <div className="modal-overlay--bad"/>
      </div>
    )
  }
}

export default formBad;
