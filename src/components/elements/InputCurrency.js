import React from 'react';
import PropTypes from 'prop-types';

const InputCurrency = ({onChange, label, name, value}) => (
  <div className="ui labeled input">
    { label ?
      <div className="ui label">
        {label || <i className="ruble icon"/> }
      </div> : null
    }
    <input type="number"
      placeholder="введите сумму"
      // value={value}
      name={name}
      onChange={onChange}/>
    <div className="ui label">
      <i className="ruble icon"/>
    </div>
  </div>
);

InputCurrency.propTypes = {
  name: PropTypes.string,
  value: PropTypes.number,
  label: PropTypes.string,
  onChange: PropTypes.func
};

export default InputCurrency;
