import React from 'react';

const InputProfile = ({
  labelFor = '',
  inputType = 'text',
  inputPlaceholder = '',
  labelId = '',
  children,
}) => {
  return (
    <>
      <label htmlFor={labelFor}>
        <p className="lg:font-bold font-semibold">{children}</p>
      </label>
      <input
        required
        type={inputType}
        placeholder={inputPlaceholder}
        className="input_profile"
        id={labelId}
        name={labelFor}
      />
    </>
  );
};

export default InputProfile;
