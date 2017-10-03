import { storiesOf, addDecorator } from '@storybook/react';
import { Center } from './decorators';

import '../node_modules/semantic-ui-css/semantic.min.css';
import { ElementsStory } from './elements';

addDecorator(Center);

storiesOf('Components', module)
  .addChapter('Elements', ElementsStory)
  .addChapter('Forms', chapter => chapter)
  .addChapter('Tables', chapter => chapter);
