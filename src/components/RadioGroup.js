import React from 'react';
import PropTypes from 'prop-types';

const RadioGroup = ({label, checkBoxes, onChange, name}) => (
  <div className='ui form' style={{textAlign: 'left', display: 'inline-block'}}>
    {label || null}
    <div className='grouped fields'>
      {checkBoxes.map((val) =>
        <div className='field'>
          <div className='ui radio checkbox'>
            <input type='radio'
              name={name}
              checked={val.checked || false}
              onChange={onChange}
            />
            <label>{val.label}</label>
          </div>
        </div>
      )}
    </div>
  </div>
);


RadioGroup.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  checkBoxes: PropTypes.array,
  onChange: PropTypes.func
};

export default RadioGroup;
