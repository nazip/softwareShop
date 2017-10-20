import React from 'react';
import PropTypes from 'prop-types';

const InputText = ({onChange, label, name, value}) => (
  <div className="ui labeled input">
    { label ?
      <div className="ui label">
        { label }
      </div> : null
    }
    <input type="text"
      value={value}
      placeholder="введите текст"
      name={name}
      onChange={onChange}/>
  </div>
);

InputText.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func
};

export default InputText;
