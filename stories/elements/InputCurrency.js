import React from 'react';
import { action } from '@storybook/addon-actions';
import { InputCurrency } from 'components/elements';
import { text, number } from '@storybook/addon-knobs';

export const InputCurrencyStory = () =>
  <InputCurrency
    onChange={action('changed')}
    name='InputCurrency'
    value={number('value', 10)}
    label={text('label','label example')}/>;
