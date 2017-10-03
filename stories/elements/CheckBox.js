import React from 'react';
import { action } from '@storybook/addon-actions';
import { CheckBox } from 'components/elements';
import { text, boolean } from '@storybook/addon-knobs';

export const CheckBoxStory = chapter => chapter
  .addWithInfo('CheckBox','CheckBox',
    () => <CheckBox
      name={'CheckBox name'}
      checked={boolean('checked', false)}
      onChange={action('Clicked')}
      label={text('label','CheckBox label')}/>
  );
