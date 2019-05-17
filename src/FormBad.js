import React from 'react';
import './FormBad.scss';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

let modalToOpen;
let modalOverlayBad;

class formBad extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date(),
      overlayMessage: '',
      overlayTitle: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }


  validate = () => {
    const firstName = document.querySelector(".first-name--bad");
    const lastName = document.querySelector(".last-name--bad");
    if (firstName.value.length === 0 || lastName.value.length === 0) {
      return 'Your name is empty!';
    } else if (firstName.value.length > 2 || lastName.value.length > 2) {
      return 'Your name is too long!';
    } else {
      return true;
    }
  };

  openModal = () => {
    modalToOpen = document.querySelector('.modal--bad');
    modalOverlayBad = document.querySelector('.modal-overlay--bad');

    modalToOpen.style.display = 'block';
    modalOverlayBad.style.display = 'block';
  };

  closeModal = () => {
    modalToOpen.style.display = 'none';
    modalOverlayBad.style.display = 'none';
  };

  escapeModal = (e) => {
    console.log('esc');
    if (e.keyCode === 27) {
      e.preventDefault();
      this.closeModal();
    }
  };

  handleSubmitClick = () => {
    if (this.validate() === 'Your name is too long!') {
      this.setState({
        overlayTitle: 'Error',
        overlayMessage: 'Your name is too long!'
      });
      this.openModal();
    } else if (this.validate() === 'Your name is empty!') {
      this.setState({
        overlayTitle: 'Error',
        overlayMessage: 'Your name is empty!'
      });
      this.openModal();
    } else {
      this.setState({
        overlayTitle: 'Completed',
        overlayMessage: 'Your request has been submitted!'
      });
      this.openModal()
    }
  };


  handleSubmitKeyPress = (e) => {
    // check for space bar or enter press
    if (e.keyCode === 32) {
      this.handleSubmitClick();
    }
    if (e.keyCode === 13) {
      e.preventDefault();
      this.handleSubmitClick();
    }
  };

  componentDidMount() {
    document.querySelector('.modal--bad').addEventListener('keydown', this.escapeModal);
    document.querySelector('.modal-overlay--bad').addEventListener('click', this.closeModal);
    document.querySelector('.submit-button--bad').addEventListener('keydown', this.handleSubmitKeyPress);
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
          <div tabIndex='0' className='submit-button--bad' onClick={this.handleSubmitClick}>Submit</div>
        </div>
        <div className="modal--bad">
          <h1 className="modal-title--bad">{this.state.overlayTitle}</h1>
          <h2 className="modal-body--bad">{this.state.overlayMessage}</h2>
          <button onClick={() => this.closeModal()}>Close</button>
        </div>
        <div className="modal-overlay--bad"/>
      </div>
    )
  }
}

export default formBad;
