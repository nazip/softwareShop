import React from 'react';
import { action } from '@storybook/addon-actions';
import { InputText } from 'components/elements';

export const InputTextStory = chapter => chapter
  .addWithInfo('with label', 'InputText',
    () => <InputText
      onChange={action('changed')}
      label='some label'
      // defaultValue={'default value'}
      name={'InputText'}/>
  )
  .addWithInfo('without label', 'InputText',
    () => <InputText
      onChange={action('changed')}
      // defaultValue={'default value'}
      name={'InputText'}/>
  );
