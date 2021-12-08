import React from 'react';
import { ButtonProps } from '../interfaces';

const Button: React.FC<ButtonProps> = ({ text, onClick, id, className }) => {
  return (
    <button className={ className } onClick={ onClick } id={ id }>{ text }</button>
  );
}

export default Button;
