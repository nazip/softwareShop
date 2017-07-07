import React from 'react';
import PropTypes from 'prop-types';

const InputText = ({onChange, label = '', name, value = ''}) => (
  <label>
    <input type='text'
      onChange={onChange}
      value={value}
      name={name}/>
    {label}
  </label>
);

InputText.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired
};

export default InputText;
