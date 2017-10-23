import React from 'react';
import { Product } from 'components/elements/widgets';
import { productsData } from '../../static/data';

export const ProductStory = () =>
  <Product {...productsData} />;
