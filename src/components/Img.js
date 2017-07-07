import React from 'react';
import PropTypes from 'prop-types';

const Img = ({ onClick, src, name, label = '' }) => (
  <label>
    <input type='image'
      onClick={onClick}
      src={src}
      name={name}/>
    {label}
  </label>
);

Img.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  src: PropTypes.string,
  onClick: PropTypes.func.isRequired
};

export default Img;
