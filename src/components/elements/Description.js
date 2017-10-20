import React from 'react';
import PropTypes from 'prop-types';

const Description = ({value}) => (
  <div className="description">
    {value}
  </div>
);

Description.propTypes = {
  value: PropTypes.string
};

export default Description;
