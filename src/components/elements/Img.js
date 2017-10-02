import React from 'react';
import PropTypes from 'prop-types';

const Img = ({ onClick, src, name, label = '' }) => (
  <div className="ui small image">
    <img src={src} onClick={onClick} name={name}/>
    <label>{label}</label>
  </div>
);

Img.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  src: PropTypes.string,
  onClick: PropTypes.func
};

export default Img;
