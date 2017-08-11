import React from 'react';
import PropTypes from 'prop-types';

const CheckBox = ({label, name, checked, onChange}) => (
  <div className="ui checkbox">
    <input type='checkbox'
      name={name}
      onChange={onChange}
      checked={checked}
    />
    <label>
      {label}
    </label>
  </div>
);

CheckBox.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  checked: PropTypes.bool,
  onChange: PropTypes.func
};

export default CheckBox;
