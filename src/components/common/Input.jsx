import React from 'react';

function Input({
  inputName,
  labelName,
  inputType,
  value,
  onChange,
  inputRef,
  error,
}) {
  return (
    <div className='mb-3'>
      <label htmlFor={inputName} className='form-label'>
        {labelName}
      </label>
      <input
        type={inputType}
        id={inputName}
        name={inputName}
        value={value}
        onChange={onChange}
        ref={inputRef}
        className={error ? 'form-control is-invalid' : 'form-control'}
      />
      {error && <div className='invalid-feedback'>{error}</div>}
    </div>
  );
}

export default Input;
