import React from 'react';

import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withKnobs, text } from '@storybook/addon-knobs';

import { Button, Welcome } from '@storybook/react/demo';

const CenterDecorator = (func) => (
  <div style={{textAlign: 'center'}}>
    {func()}
  </div>
);

addDecorator(CenterDecorator);
addDecorator(withKnobs);

storiesOf('Welcome', module).add('to Storybook',
  () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button')
  .addWithInfo('example', 'with text',
    () => <Button onClick={action('clicked')}>
      { text('sssr', 'Hello Button') }
    </Button>)
  .add('with some emoji',
    () => <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>);
