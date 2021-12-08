import React from 'react';
import { InputProps } from '../interfaces';

const Input: React.FC<InputProps> = ({ text, type, value, onChange, id, name, placeholder }) => {
  return (
    <label htmlFor={ id }>
      { text }
      <input
        value={ value }
        onChange={ onChange }
        type={ type }
        name={ name }
        placeholder={ placeholder }
      />      
    </label>
  );
}

export default Input;
