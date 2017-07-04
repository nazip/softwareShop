import React from 'react';
import PropTypes from 'prop-types';
import { Checkbox, Form } from 'semantic-ui-react';

const RadioGroup = ({checkBoxes, onChange}) => (
  <div>
    {checkBoxes.forEach((val) =>
      <Form.Field>
        <Checkbox
          radio
          label={val.label}
          name={val.name}
          value='this'
          onChange={onChange}
        />
      </Form.Field>
    )}
  </div>
);

RadioGroup.propTypes = {
  checkBoxes: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired
};

export default RadioGroup;
