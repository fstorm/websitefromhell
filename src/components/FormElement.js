import React from 'react';
import '../FormGood.scss';

const FormElement = (props) => {
  return (
    <div className="form-element--wrapper">
      <label className={props.className}>{props.labelText}{props.children.props.required ? <span aria-hidden="true">*</span> : ''}
        {props.children}
      </label>
    </div>
  )
};

export default FormElement;
