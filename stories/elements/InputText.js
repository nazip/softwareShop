import React from 'react';
import { action } from '@storybook/addon-actions';
import { InputText } from 'components/elements';
import { text } from '@storybook/addon-knobs';

export const InputTextStory = () =>
  <InputText
    onChange={action('changed')}
    label={text('Label', 'some label')}
    // defaultValue={text('default value', 'default value')}
    name='InputText'/>;
