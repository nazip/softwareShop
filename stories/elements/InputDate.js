import React from 'react';
import { action } from '@storybook/addon-actions';
import { InputDate } from 'components/elements';
import { text } from '@storybook/addon-knobs';

export const InputDateStory = chapter => chapter
  .addWithInfo('InputDate', 'InputDate',
    () => <InputDate
      onChange={action('changed')}
      name='InputDate'
      // defaultValue={date('default date', new Date('Jan 20 2017'))}
      label={text('label','label example')}/>
  );
