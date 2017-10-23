import React from 'react';
import { action } from '@storybook/addon-actions';
import { CheckBox } from 'components/elements';
import { text, boolean } from '@storybook/addon-knobs';
// import { specs, describe, it } from 'storybook-addon-specifications';
// import { mount } from 'enzyme';
// import expect from 'expect';


export const CheckBoxStory = () =>
  <CheckBox
    name='CheckBox name'
    checked={boolean('checked', true)}
    onChange={action('Changed')}
    label={text('label','CheckBox label')}/>;
