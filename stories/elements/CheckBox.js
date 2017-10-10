import React from 'react';
import { action } from '@storybook/addon-actions';
import { CheckBox } from 'components/elements';
import { text, boolean } from '@storybook/addon-knobs';
import { specs, describe, it } from 'storybook-addon-specifications';
import { mount } from 'enzyme';
// import expect from 'expect';


export const CheckBoxStory = chapter => chapter
  .addWithInfo('CheckBox','CheckBox',
    () => {
      const story = (<CheckBox
        name={'CheckBox name'}
        checked={boolean('checked', false)}
        onChange={action('Clicked')}
        label={text('label','CheckBox label')}/>);

      // specs(() => describe('checkbox', () => {
      //   it('should have label',() => {
      //     const output = mount(story);
      //     expect(output.txt()).toContain('CheckBox label');
      //   });
      // }));
      return story;
    }

  );
