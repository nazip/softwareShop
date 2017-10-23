import React from 'react';
import PropTypes from 'prop-types';
import Product from './Product';

const ListOfProducts = ({products}) =>
  products.map((item, key) =>
    <div key={key}>
      <Product {...item}/>
    </div>
  );

ListOfProducts.propTypes = {
  products: PropTypes.array
};

export default ListOfProducts;
