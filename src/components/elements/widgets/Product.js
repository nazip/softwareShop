import React from 'react';
import PropTypes from 'prop-types';
import { Description, InputText, InputCurrency, TextArea } from 'components/elements';

const Product = ({name, os, vendor, price, description}) => (
  <div className="product ui card ">
    <div class="header">
      {name.name}
    </div>
    <InputText {...name} />
    <InputText {...os}/>
    <InputText {...vendor} />
    <Description value={description.value} />
    <InputCurrency {...price} />
  </div>
);

Product.propTypes = {
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
