import { storiesOf, addDecorator } from '@storybook/react';
// import { Center } from './decorators';
// import { withKnobs } from '@storybook/addon-knobs';

// import '../node_modules/semantic-ui-css/semantic.min.css';
// import { ElementsStory } from './elements';
// import { WidgetsStory } from './elements/widgets';

import React from 'react';

// addDecorator(Center);
// addDecorator(withKnobs);

// storiesOf('Components', module)
//   .addChapter('Elements', ElementsStory)
//   .addChapter('Widgets', WidgetsStory);

storiesOf('React App', module)
  .addChapter('Atoms', chapter => chapter
    .add('Atom 1', <buton>1</buton>)
    .add('Atom 2', <buton>2</buton>)
  );
