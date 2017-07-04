import React from 'react';
import PropTypes from 'prop-types';
import { Checkbox } from 'semantic-ui-react';

const CheckBox = ({label = ''}) => (
  <Checkbox label={{ children: label }} />
);

CheckBox.propTypes = {
  label: PropTypes.string
};

export default CheckBox;
