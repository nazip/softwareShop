import React from 'react';
import PropTypes from 'prop-types';

const InputCurrency = ({onChange,
  label = '',
  name,
  value,
  currency = 'руб'}) => (
  <div className="ui labeled input">
    <div className="ui label">
      {label}
    </div>
    <input type="text"
      value={value}
      placeholder="enter some text"
      name={name}
      onChange={onChange}/>
    <div className="ui label">{currency}</div>
  </div>
);

InputCurrency.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string,
  currency: PropTypes.string,
  onChange: PropTypes.func.isRequired
};

export default InputCurrency;
