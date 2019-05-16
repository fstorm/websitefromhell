import React from 'react';
import PropTypes from 'prop-types';

const Input = (props) => {
  return <input aria-label={props.ariaLabel} type={props.type} aria-required={props.required}/>
};

Input.propTypes = {
  // ariaLabel: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['button', 'checkbox', 'color',
    'date', 'datetime-local', 'email', 'file', 'hidden',
    'image', 'month', 'number', 'password', 'radio', 'range',
    'reset', 'search', 'submit', 'tel', 'text', 'time', 'url', 'week'].isRequired),
  name: PropTypes.string,
};

export default Input;
