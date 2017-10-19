import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import '../node_modules/semantic-ui/dist/semantic.min.css';
import { ElementsStory } from './elements';
import { WidgetsStory } from './elements/widgets';

storiesOf('Components', module)
  .storyDecorator(withKnobs)
  .addChapter('Elements', ElementsStory)
  .addChapter('Widgets', WidgetsStory);
