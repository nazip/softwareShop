import { configure } from '@storybook/react';
import './css/my.scss';

function loadStories() {
  require('../stories');
}

configure(loadStories, module);
