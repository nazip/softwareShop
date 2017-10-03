import React from 'react';

import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';
import { withKnobs, text } from '@storybook/addon-knobs';

import { Product } from 'components/elements/forms';
import { Center } from './decorators';

addDecorator(Center);
addDecorator(withKnobs);

import '../node_modules/semantic-ui-css/semantic.min.css';

storiesOf('Forms', module)
  .addWithInfo('Product','форма для продукта',
    () => <Product
      onChange={action('onChange')}
      onSubmit={action('onSubmit')}
      name={{name: 'soft', value: 'softval',
        onChange: action('onChangeName'),
        label: text('product name', 'product name')}}
      os={{name: 'os', value: 'osval',
        onChange: action('onChangeOs'),
        label: text('OS name', 'OS name')}}
      vendor={{name: 'vendor', value: 'vendorval',
        onChange: action('onChangeVendor'),
        label: text('vendor name', 'vendor name')}}
      price={{name: 'price', value: '0',
        onChange: action('onChangePrice'),
        label: text('price', 'price')}}
    />
  );
