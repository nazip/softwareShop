import React from 'react';
import PropTypes from 'prop-types';

const InputText = ({onChange, label, name, defaultValue}) => (
  <div className="ui labeled input">
    { label ?
      <div className="ui label">
        { label }
      </div> : null
    }   
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
