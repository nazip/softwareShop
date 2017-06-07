import PropTypes from 'prop-types';
import React from 'react';

const Button = ({ children, onClick }) => (
  <button className='custom-button' onClick={onClick}>
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default Button;
