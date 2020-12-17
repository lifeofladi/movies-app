/** @format */

import React from 'react';

//Destructured props
const Input = ({ label, name, value, type, onChange }) => {
  return (
    <div className='form-group'>
      <label htmlFor={name}>{label}</label>
      <input
        onChange={onChange}
        value={value}
        className='form-control'
        type={type}
        name={name}
        id={name}
        placeholder={label}
      />
    </div>
  );
};

export default Input;
