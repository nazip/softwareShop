import React from 'react';
import PropTypes from 'prop-types';

const CheckBox = ({label, name, onChange}) => (
  <div class="ui checkbox">
    <input type="checkbox" name={name} onChange={onChange}/>
    <label>{label}</label>
  </div>
);

CheckBox.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func.isRequired
};

export default CheckBox;
