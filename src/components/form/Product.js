import React from 'react';
import PropTypes from 'prop-types';
import { InputText, InputCurrency } from '../common';

const Product = ({onSubmit, name, os, vendor, price}) => (
  <form className="ui form" onSubmit={onSubmit}>
    <div className="field">
      <InputText name={name.name}
        defaultValue={name.value}
        onChange={name.onChange}
        label={name.label || name.name}
      />
    </div>
    <div className="field">
      <InputText name={os.name}
        defaultValue={os.value}
        onChange={os.onChange}
        label={os.label || os.name}
      />
    </div>
    <div className="field">
      <InputText name={vendor.name}
        defaultValue={vendor.value}
        onChange={vendor.onChange}
        label={vendor.label || vendor.name}
      />
    </div>
    <div className="field">
      <InputCurrency
        onChange={price.onChange}
        name={price.name}
        defaultValue={price.value}
        label={price.label || price.name}
      />
    </div>
    <button className="ui button" type="submit">Submit</button>
  </form>
);

Product.propTypes = {
  onSubmit: PropTypes.func,
  name: PropTypes.shape({
    name: PropTypes.string,
    value: PropTypes.string,
    label: PropTypes.string,
    onChange:  PropTypes.func
  }),
  os: PropTypes.shape({
    name: PropTypes.string,
    value: PropTypes.string,
    label: PropTypes.string,
    onChange:  PropTypes.func
  }),
  vendor: PropTypes.shape({
    name: PropTypes.string,
    value: PropTypes.string,
    label: PropTypes.string,
    onChange:  PropTypes.func
  }),
  price: PropTypes.shape({
    name: PropTypes.string,
    value: PropTypes.string,
    label: PropTypes.string,
    onChange:  PropTypes.func
  })

};

export default Product;
