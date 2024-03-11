import React from 'react';
import classes from './input.module.css'

const Input = ({ label, onInput, className, ...props }) => {
  const inputClasses = [className, classes.label].join(' ')

  return (
    <label className={inputClasses}>
      <span>{label}</span>
      <input onInput={e => onInput(e.target.value)} {...props} />
    </label>
  );
};

export default Input;