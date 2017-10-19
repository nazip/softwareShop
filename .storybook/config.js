import { configure, setAddon } from '@storybook/react';
import infoAddon from '@storybook/addon-info';
import '@storybook/addon-chapters';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';

Enzyme.configure({ adapter: new Adapter() });

setAddon(infoAddon);

function loadStories() {
  require('../stories');
}

configure(loadStories, module);
