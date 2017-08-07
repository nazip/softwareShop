import React from 'react';
import PropTypes from 'prop-types';

const CheckBox = ({label, name, onChange, checked = false}) => (
  <div className="ui checkbox">
    <input type='checkbox'
      name={name}
      onChange={onChange}
      checked={checked}>
    </input>
    <label>
      {label}
    </label>
  </div>
);

CheckBox.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  checked: PropTypes.boolean,
  onChange: PropTypes.func.isRequired
};

export default CheckBox;
