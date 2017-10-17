import { storiesOf, addDecorator } from '@storybook/react';
// import { Center } from './decorators';
import { withKnobs, boolean,  text } from '@storybook/addon-knobs';

//import '../node_modules/semantic-ui-css/semantic.min.css';
import { ElementsStory } from './elements';
import { WidgetsStory } from './elements/widgets';

// addDecorator(Center);

// storiesOf('Components', module)
//   .addDecorator(withKnobs)
//   .addChapter('Elements', ElementsStory);

// .addChapter('Widgets', WidgetsStory);

// import React from 'react';
// const stories = storiesOf('Components', module);
// stories.addDecorator(withKnobs);
// // stories.addChapter('Atoms', chapter => chapter
// stories.add('with a button', () => (
//   <button disabled={boolean('Disabled', false)} >
//     {text('Label', 'Hello Button')}
//   </button>
// ));


import React from 'react';
storiesOf('Components', module)
  .addDecorator(withKnobs)
  .add('without1 chapters', () => (
    <button disabled={boolean('Disabled', false)} >
      {text('Label', 'Hello Button')}
    </button>))
  // .addChapter('Atoms', chapter => chapter
  //   .add('with a button', () => (
  //     <button disabled={boolean('Disabled', false)} >
  //       {text('Label', 'Hello Button')}
  //     </button>
  //   )))
  .add('without chapters', () => (
    <button disabled={boolean('Disabled', false)} >
      {text('Label', 'Hello Button')}
    </button>));
