import React from 'react';
import PropTypes from 'prop-types';
import { InputText,
  InputCurrency,
  TextArea,
  Label,
  Img } from 'components/elements';

const Product = ({label = 'new product', os,
  vendor, price, description, img}) => (
  <div className="product ui card ">
    <Label label={label}/>
    <Img {...img}/>
    <InputText {...os}/>
    <InputText {...vendor} />
    <TextArea {...description} />
    <InputCurrency {...price} />
  </div>
);

Product.propTypes = {
  label: PropTypes.string,
  img: PropTypes.object,
  os: PropTypes.object,
  price: PropTypes.object,
  vendor: PropTypes.object,
  description: PropTypes.object,
};

export default Product;
