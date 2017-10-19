import React from 'react';
import PropTypes from 'prop-types';

const CheckBox = ({label, name, checked, onChange}) => (
  <div className="ui checkbox">
    <label><div className="ui label">{ label }</div></label>
    <input type='checkbox'
      name={name}
      onChange={onChange}
      checked={checked}
    />
  </div>
);

CheckBox.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  checked: PropTypes.bool,
  onChange: PropTypes.func
};

export default CheckBox;
