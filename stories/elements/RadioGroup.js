import React from 'react';
import { action } from '@storybook/addon-actions';
import { RadioGroup } from 'components/elements';
import { text } from '@storybook/addon-knobs';

export const RadioGroupStory = chapter => chapter
  .addWithInfo('RadioGroup','RadioGroup',
    () => <RadioGroup
      label={text('RadioGroup label', 'RadioGroup label')}
      name={'RadioGroup name'}
      onChange={action('clicked')}
      checkBoxes={[
        {label: text('label0','label0')},
        {label: text('label1','label1'), checked: true},
        {label: text('label2','label2')}]}
    />
  );
