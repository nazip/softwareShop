import React from 'react';
import PropTypes from 'prop-types';

const RadioGroup = ({checkBoxes, onClick, name}) => (
  <div className="ui form">
    <label>sssss</label>
    <div className="grouped fields">
      {checkBoxes.map((val) =>
        <div className="field">
          <div className="ui radio checkbox">
            <input
              type="radio"
              name={name}
              checked={val.checked || false}
              onClick={onClick} />
            <label>{val.label}</label>
          </div>
        </div>
      )}
    </div>
  </div>
);


RadioGroup.propTypes = {
  name: PropTypes.string,
  checkBoxes: PropTypes.array,
  onClick: PropTypes.func
};

export default RadioGroup;
