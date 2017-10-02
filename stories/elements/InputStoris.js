import React from 'react';

export const InputStory(chapter) => chapter
  .addWithInfo('without label', 'InputText',
    () => <InputText
      onChange={action('changed')}
      defaultValue={'default value'}
      name={'InputText'}/>
));
