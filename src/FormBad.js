import React from 'react';
import './FormBad.scss';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

let modalBad;
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

const openModal = (modalTitle, modalBody) => {
  modalBad = document.querySelector('.modal--bad');
  modalOverlayBad = document.querySelector('.modal-overlay--bad');

  modalBad.insertAdjacentHTML('afterbegin', `<h2 class="modal-body--bad">${modalBody}</h2>`);
  modalBad.insertAdjacentHTML('afterbegin', `<h1 class="modal-title--bad">${modalTitle}</h1>`);

  modalBad.style.display = 'block';
  modalOverlayBad.style.display = 'block';
};

const closeModal = () => {
  modalBad.childNodes[0].remove();
  modalBad.childNodes[0].remove();

  modalBad.style.display = 'none';
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

class formBad extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date()
    };
    this.handleChange = this.handleChange.bind(this);
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
        <div className="form__element-wrapper">
          <button onClick={handleSubmitClick}>Submit
          </button>
        </div>
        <div className="modal--bad">
          <button onClick={() => closeModal()}>Close</button>
        </div>
        <div className="modal-overlay--bad"></div>
      </div>
    )
  }
};

export default formBad;
