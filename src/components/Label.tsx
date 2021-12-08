import React from 'react';
import { LabelProps } from '../interfaces';

const Label: React.FC<LabelProps> = ({ text, type, value, onChange, id, name, placeholder }) => {
  return (
    <label className="form__label" htmlFor={ id }>
      <p className="form__paragraph">{ text }</p>
      <input
        value={ value }
        onChange={ onChange }
        type={ type }
        name={ name }
        placeholder={ placeholder }
        className="form__input"
      />
    </label>

  );
}

export default Label;
