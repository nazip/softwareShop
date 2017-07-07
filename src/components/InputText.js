import React from 'react';
import PropTypes from 'prop-types';

const InputText = ({onChange, label = '', name, value}) => (
  <div className="ui labeled input">
    <div className="ui label">
      {label}
    </div>
    <input type="text"
      value={value}
      placeholder="enter some text"
      name={name}
      onChange={onChange}/>
  </div>
);

InputText.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired
};

export default InputText;
