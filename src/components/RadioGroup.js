import React from 'react';
import PropTypes from 'prop-types';

const RadioGroup = ({checkBoxLabel, onChange, name}) => (
  <div>
    {checkBoxLabel.map((val) =>
      <div class="ui radio checkbox">
        <input type="radio" name={name} onChange={onChange}/>
        <label>{val}</label>
      </div>
    )}
  </div>
);


RadioGroup.propTypes = {
  name: PropTypes.string,
  checkBoxLabel: PropTypes.array,
  onChange: PropTypes.func
};

export default RadioGroup;
