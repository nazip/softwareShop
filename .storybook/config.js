import { configure, setAddon } from '@storybook/react';
import infoAddon from '@storybook/addon-info';
import '@storybook/addon-chapters';

setAddon(infoAddon);

function loadStories() {
  require('../stories');
  // require('../stories/common');
  // require('../stories/forms');
}

configure(loadStories, module);
