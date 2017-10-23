import React from 'react';
import { ListOfProducts } from 'components/elements/widgets';
import { productsData } from '../../static/data';

const products = [];

for (let i = 0; i < 5; i++) {
  products[i] = productsData;
}

export const ListOfProductsStory = () =>
  <ListOfProducts products={products} />;
