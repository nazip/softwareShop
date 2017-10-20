import React from 'react';
import { Product } from 'components/elements/widgets';
import { text } from '@storybook/addon-knobs';

const onChange =  (val) => console.log(val);

// const dv = text('V','some description');

const product = {
  name: {
    label: 'Наименование',
    name: 'product',
    value: 'Value',
    onChange: onChange('sss')
  },
  os: {
    label: 'ОС',
    name: 'os',
    value: 'macos',
    onChange: onChange('changed')
  },
  vendor: {
    label: 'Vendor',
    name: 'vendor',
    value: 'apple',
    onChange: onChange('changed')
  },
  price: {
    label: 'Цена',
    name: 'price',
    value: 100,
    onChange: onChange('changed')
  },
  description: {
    label: 'Описание',
    name: 'description',
    value: 'VVV',
    onChange: onChange('changed')
  }
};

export const ProductStory = chapter => chapter
  .addWithInfo('Product','Product',
    () => <Product {...product} />
  );
