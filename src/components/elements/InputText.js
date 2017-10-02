import React from 'react';
import PropTypes from 'prop-types';

const InputText = ({onChange, label, name, defaultValue}) => (
  <div className="ui labeled input">
    <div className="ui label">
      {label || name || ''}
    </div>
    <input type="text"
      value={defaultValue}
      placeholder="введите текст"
      name={name}
      onChange={onChange}/>
  </div>
);

InputText.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  defaultValue: PropTypes.string,
  onChange: PropTypes.func
};

export default InputText;
