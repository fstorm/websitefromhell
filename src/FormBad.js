import React from 'react';
import './FormBad.scss';

const validate = (e) => {
	if (e.target.value.length > 5) {
		alert('Input too long!');
	}
};

const badForm = () => {
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
      <br/>
      <button onClick={(() => {
        alert('Submitting...');
      })}>Submit
      </button>
    </div>
  )
};

export default badForm;