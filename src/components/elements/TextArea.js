import React from 'react';
import PropTypes from 'prop-types';

const TextArea = ({onChange, label, name, value, cols = 10, rows = 10}) => (
  <div className="ui labeled input">
    { label ?
      <div className="ui label">
        { label }
      </div> : null
    }
    <textarea
      value={value}
      placeholder="введите текст"
      name={name}
      cols={cols}
      rows={rows}
      onChange={onChange}/>
  </div>
);

TextArea.propTypes = {
  value: PropTypes.string,
  cols: PropTypes.number,
  rows: PropTypes.number,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  onChange: PropTypes.func
};

export default TextArea;
