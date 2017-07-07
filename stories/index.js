import React from 'react';
import '../node_modules/semantic-ui-css/semantic.min.css';

import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';
import { withKnobs, text } from '@storybook/addon-knobs';

import InputText from '../src/components/InputText';
import CheckBox from '../src/components/CheckBox';
import RadioGroup from '../src/components/RadioGroup';
import Img from '../src/components/Img';

addDecorator(withKnobs);

storiesOf('Components', module)
  .addWithInfo('InputText','ввод текста',
    () => <InputText
      onChange={action('changed')}
      value={'default value'}
      name={'InputText'}
      label={text('label','label example')}/>
  )
  .addWithInfo('CheckBox','CheckBox',
    () => <CheckBox
      name={'CheckBox name'}
      onClick={action('Clicked')}
      label={text('label','CheckBox label')}/>
  )
  .addWithInfo('RadioGroup','RadioGroup',
    () => <RadioGroup
      name={'CheckBox name'}
      checkBoxes={[
        {value: 'v1', label: 'l1'},
        {value: 'v2', label: 'l2'},
        {value: 'v3', label: 'l3'}]}
      onClick={action('Clicked')}/>
  )
  .addWithInfo('Image','Image',
    () => <Img
      label={text('label','Image label')}
      name={'CheckBox name'}
      onClick={action('Clicked')}
      src={'dog.jpg'}/>
  );
