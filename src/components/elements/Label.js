import React from 'react';
import PropTypes from 'prop-types';

const Label = ({label}) =>
  <div className="ui label">
    { label }
  </div>;

Label.propTypes = {
  label: PropTypes.string
};

export default Label;
