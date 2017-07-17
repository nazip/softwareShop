import React from 'react';
import PropTypes from 'prop-types';

const InputDate = ({onChange, label, name, defaultValue}) => (
  <div className="ui labeled input">
    <div className="ui label">
      {label || <i className="calendar icon"/> }
    </div>
    <input type="date"
      value={defaultValue}
      placeholder="enter some text"
      name={name}
      onChange={onChange}/>
  </div>
);

InputDate.propTypes = {
  name: PropTypes.string,
  defaultValue: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func.isRequired
};

export default InputDate;
