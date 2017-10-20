import React from 'react';
import PropTypes from 'prop-types';

const TextArea = ({onChange, label, name, value, cols, rows}) => (
  <div className="ui labeled input">
    { label ?
      <div className="ui label">
        { label }
      </div> : null
    }
    <textarea
      // value={value}
      placeholder="введите текст"
      name={name}
      cols={cols || 20}
      rows={rows || 10}
      onChange={onChange}/>
  </div>
);

TextArea.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  value: PropTypes.string,
  col: PropTypes.integer,
  row: PropTypes.integer,
  onChange: PropTypes.func
};

export default TextArea;
