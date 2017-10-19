import React from 'react';
import PropTypes from 'prop-types';

const InputDate = ({onChange, label, name, value}) => (
  <div className="ui labeled input">
    {label ?
      <div className="ui label">
        {label}
      </div> : null
    }
    <input type="date"
      value={value}
      placeholder={'enter date'}
      name={name}
      onChange={onChange}/>
  </div>
);

InputDate.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func
};

export default InputDate;
