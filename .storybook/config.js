import { configure, setAddon } from '@storybook/react';
import infoAddon from '@storybook/addon-info';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

setAddon(infoAddon);

function loadStories() {
  require('../stories');
}

configure(loadStories, module);
