import React from 'react';
import PropTypes from 'prop-types';

const InputCurrency = ({onChange, label, name, defaultValue}) => (
  <div className="ui labeled input">
    <div className="ui label">
      {label || <i className="ruble icon"/> }
    </div>
    <input type="number"
      placeholder="введите сумму"
      value={defaultValue || 0}
      name={name}
      onChange={onChange}/>
  </div>
);

InputCurrency.propTypes = {
  name: PropTypes.string,
  defaultValue: PropTypes.number,
  label: PropTypes.string,
  onChange: PropTypes.func
};

export default InputCurrency;
