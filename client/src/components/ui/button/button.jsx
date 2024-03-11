import React from 'react';
import classes from './button.module.css'

const Button = ({children, className, ...props}) => {
  const buttonClasses = [className, classes.button]?.join(' ')

  return (
    <button {...props} className={buttonClasses}>
      { children }
    </button>
  );
};

export default Button;