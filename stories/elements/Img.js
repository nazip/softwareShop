import React from 'react';
import { action } from '@storybook/addon-actions';
import { Img } from 'components/elements';
import { text } from '@storybook/addon-knobs';

export const ImgStory = chapter => chapter
  .addWithInfo('Image','Image',
    () => <Img
      label={text('label','Image label')}
      name={'Image name'}
      onClick={action('Clicked')}
      src='dog.jpg'/>
  );
