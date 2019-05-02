import React from 'react';
import './FormBad.scss';

const validate = (e) => {
	if (e.target.value.length > 5) {
		alert('Input too long!');
	}
};

const formBad = () => {
  return (
    <div className="bad-form">
      <div className="bad-form__rows">
        <div className="labels">
          <p>First Name</p>
          <p>Last Name</p>
          <p>Post Code</p>
        </div>
        <div className="inputs">
          <input onKeyUp={(e) => validate(e)}/>
          <input onKeyUp={(e) => validate(e)}/>
          <input onKeyUp={(e) => validate(e)}/>
        </div>
      </div>
      <input className="" placeholder="Favorite Color"/>
      <div className='checkbox-container'>
        <input type='checkbox'/>
        <p>I would like to receive a confirmation email!</p>
      </div>
      <br/>
      <button onClick={(() => {
        alert('Submitting...');
      })}>Submit
      </button>
    </div>
  )
};

export default formBad;