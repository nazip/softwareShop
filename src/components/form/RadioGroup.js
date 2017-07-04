import React from 'react';
import PropTypes from 'prop-types';
import { Checkbox } from 'semantic-ui-react';

const RadioGroup = ({checkBoxes, onChange}) => (
  <div>
    {checkBoxes.forEach((val) =>
      <Checkbox
        radio
        label={val.label}
        name={val.name}
        value='this'
        onChange={onChange}
      />)}
  </div>
);

RadioGroup.propTypes = {
  checkBoxes: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired
};

export default RadioGroup;
