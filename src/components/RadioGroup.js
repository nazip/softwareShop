import React from 'react';
import PropTypes from 'prop-types';

const RadioGroup = ({checkBoxes, onClick, name}) => (
  <div>
    {checkBoxes.map((val) =>
      <div>
        <input
          type="radio"
          name={name}
          value={val.value}
          onClick={onClick}
        />
        {val.label}
      </div>
    )}
  </div>
);


RadioGroup.propTypes = {
  name: PropTypes.string,
  checkBoxes: PropTypes.array,
  onClick: PropTypes.func
};

export default RadioGroup;
