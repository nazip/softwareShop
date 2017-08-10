import React from 'react';
import '../node_modules/semantic-ui-css/semantic.min.css';

import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';
import { withKnobs, text, boolean, array } from '@storybook/addon-knobs';

import { InputText, InputDate,
  CheckBox, RadioGroup, InputCurrency, Img } from '../src/components';
import { Center } from './decorators';

addDecorator(Center);
addDecorator(withKnobs);

storiesOf('Components', module)
  .addWithInfo('InputText','ввод текста',
    () => <InputText
      onChange={action('changed')}
      defaultValue={'default value'}
      name={'InputText'}
      label={text('label','label example')}/>
  )
  .addWithInfo('CheckBox','CheckBox',
    () => <CheckBox
      name={'CheckBox name'}
      checked={boolean('checked', false)}
      onChange={action('Clicked')}
      label={text('label','CheckBox label')}/>
  )
  .addWithInfo('RadioGroup','RadioGroup',
    () => <RadioGroup
      label={text('RadioGroup label', 'RadioGroup label')}
      name={'CheckBox name'}
      onChange={action('clicked')}
      checkBoxes={array('labels',[
        {label: text('label0','label0')},
        {label: text('label1','label1'), checked: true},
        {label: text('label2','label2')}
      ], ':')}
    />
  )
  .addWithInfo('Image','Image',
    () => <Img
      label={text('label','Image label')}
      name={'CheckBox name'}
      onClick={action('Clicked')}
      src={'dog.jpg'}/>
  )
  .addWithInfo('InputDate','ввод даты',
    () => <InputDate
      onChange={action('changed')}
      name={'InputText'}
      defaultValue={text('default date', '2017-07-01')}
      label={text('label','label example')}/>
  )
  .addWithInfo('InputCurrency','ввод валюты(руб.)',
    () => <InputCurrency
      onChange={action('changed')}
      name={'InputCurrency'}
      defaultValue={10}
      label={text('label','label example')}/>
  );
