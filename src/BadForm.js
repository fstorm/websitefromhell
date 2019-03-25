import React from 'react';
import './BadForm.scss';

const validate = (e) => {
	if (e.target.value.length > 5) {
		alert('Input too long!');
	}
};

const badForm = () => {
  return (
    <div className="bad-form">
      <div className="labels">
        <label>First Name</label>
        <label>Last Name</label>
        <label>Post Code</label>
      </div>
      <div className="inputs">
				<input onKeyUp={(e) => validate(e)}/>
				<input onKeyUp={(e) => validate(e)}/>
				<input onKeyUp={(e) => validate(e)}/>
      </div>
    </div>
  )
};

export default badForm;