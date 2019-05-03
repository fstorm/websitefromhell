import React from 'react';
import '../FormGood.scss';

const FormElement = (props) => {
  return (
    <label className={props.className}>{props.labelText}
      {props.children}
    </label>
  )
};

export default FormElement;
