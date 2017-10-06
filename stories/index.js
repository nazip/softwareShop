import { storiesOf, addDecorator } from '@storybook/react';
// import { Center } from './decorators';
import { withKnobs } from '@storybook/addon-knobs';

import '../node_modules/semantic-ui-css/semantic.min.css';
import { ElementsStory } from './elements';
import { WidgetsStory } from './elements/widgets';

// addDecorator(Center);
addDecorator(withKnobs);

storiesOf('Components', module)
  .addChapter('Elements', ElementsStory)
  .addChapter('Widgets', WidgetsStory);
