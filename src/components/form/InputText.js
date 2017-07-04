import React from 'react';
import PropTypes from 'prop-types';
import { Label, Form } from 'semantic-ui-react';

const InputText = ({hint, placeholder = '', label}) => (
  <Form.Field>
    {label && <Label basic>{label}</Label>}
    <input type='text' placeholder={placeholder} />
    {hint && <Label pointing>{hint}</Label>}
  </Form.Field>
);

InputText.propTypes = {
  hint: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string
};

export default InputText;
