import React from 'react';
// import PropTypes from 'prop-types';
import { InputText, InputDate,
  CheckBox, RadioGroup, InputCurrency, Img } from '../../components';

const Product = ({name, price, quantity, supporting, supportPeriod}) => (
  <div>
    <InputText 
      label={productName}
      name={productName}
    />
  </div>
);

// Product.propTypes = {
//
// };

export default Product;
