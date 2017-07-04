import React from 'react';
import PropTypes from 'prop-types';
import { Checkbox } from 'semantic-ui-react';

const CheckBox = ({label, onChange}) => (
  <Checkbox label={label} onChange={onChange}/>
);

CheckBox.propTypes = {
  label: PropTypes.string,
  onChange: PropTypes.func.isRequired
};

export default CheckBox;
