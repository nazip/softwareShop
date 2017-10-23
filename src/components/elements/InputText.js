import React from 'react';
import PropTypes from 'prop-types';

const InputText = ({onChange, label, name, value, readOnly = false}) => (
  <div className="ui labeled input">
    { label ?
      <div className="ui label">
        { label }
      </div> : null
    }
    <input type="text"
      value={value}
      placeholder="введите текст"
      name={name || value}
      readOnly={readOnly}
      onChange={onChange}/>
  </div>
);

InputText.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  readOnly: PropTypes.bool
};

export default InputText;
