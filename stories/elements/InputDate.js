import React from 'react';
import { action } from '@storybook/addon-actions';
import { InputDate } from 'components/elements';
import { text, date } from '@storybook/addon-knobs';

export const InputDateStory = () =>
  <InputDate
    onChange={action('changed')}
    name='InputDate'
    value={date('default date', new Date('01/01/2017'))}
    label={text('label','label example')}/>;
