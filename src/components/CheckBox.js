import React from 'react';
import PropTypes from 'prop-types';

const CheckBox = ({label, name, onClick}) => (
  <div>
    <input type='checkbox'
      name={name}
      onClick={onClick}>
    </input>{label}
  </div>
);

CheckBox.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  checked: PropTypes.bool,
  onClick: PropTypes.func.isRequired
};

export default CheckBox;
