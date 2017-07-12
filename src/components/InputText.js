import React from 'react';
import PropTypes from 'prop-types';

<<<<<<< HEAD
const InputText = ({onChange, label = '', name, value = ''}) => (
  <label>
    <input type='text'
      onChange={onChange}
      value={value}
      name={name}/>
    {label}
  </label>
=======
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
>>>>>>> 89ecd52a16a048aac340df3cd1b4df8beb081455
);

InputText.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired
};

export default InputText;
