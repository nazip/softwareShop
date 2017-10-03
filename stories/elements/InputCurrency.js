import React from 'react';
import { action } from '@storybook/addon-actions';
import { InputCurrency } from 'components/elements';
import { text } from '@storybook/addon-knobs';

export const InputCurrencyStory = chapter => chapter
  .addWithInfo('InputCurrency','InputCurrency',
    () => <InputCurrency
      onChange={action('changed')}
      name={'InputCurrency'}
      // defaultValue={10}
      label={text('label','label example')}/>
  );
