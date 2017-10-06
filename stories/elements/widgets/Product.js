import React from 'react';
import { text } from '@storybook/addon-knobs';

export const ProductStory = chapter => chapter
  .addWithInfo('Product','Product',
    () => <span>
      {text('в разработке','asdsad')}
    </span>
  );
