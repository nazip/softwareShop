import React from 'react';
import PropTypes from 'prop-types';

const CheckBox = ({label, name, onClick, checked}) => (
  <div className="ui checkbox">
    <input type='checkbox'
      name={name}
      onClick={onClick}
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
  checked: PropTypes.bool,
  onClick: PropTypes.func.isRequired
};

export default CheckBox;
