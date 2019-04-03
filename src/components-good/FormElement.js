import React from 'react';
import './FormGood.scss';

const FormElement = (props) => {
  return (
    <label className={props.className} aria-hidden={props.ariaHidden}>{props.labelText}
      {props.children}
    </label>
  )
};

export default FormElement;
