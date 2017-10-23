import React from 'react';
import { Label } from 'components/elements';
import { text } from '@storybook/addon-knobs';

export const LabelStory = () =>
  <Label label={text('Label', 'some label')}/>;
