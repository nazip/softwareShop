import React from 'react';
import '../node_modules/semantic-ui-css/semantic.min.css';

import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';
import { withKnobs, text } from '@storybook/addon-knobs';

import { InputText, InputDate,
  CheckBox, RadioGroup, InputCurrency, Img } from '../src/components';

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
      onChange={action('Clicked')}
      label={text('label','CheckBox label')}/>
  )
  .addWithInfo('RadioGroup','RadioGroup',
    () => <RadioGroup
      name={'CheckBox name'}
      checkBoxLabel={[
        text('label0','CheckBox label0'),
        text('label1','CheckBox label1'),
        text('label2','CheckBox label2')]}
      onChange={action('Clicked')}/>
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
