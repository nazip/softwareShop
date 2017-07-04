import React from 'react';
import '../node_modules/semantic-ui-css/semantic.min.css';

import { storiesOf, addDecorator } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

import { Form } from 'semantic-ui-react';
import InputText from '../src/components/form/InputText';
import CheckBox from '../src/components/form/CheckBox';
import RadioGroup from '../src/components/form/RadioGroup';

const FormDecorator = (func) => (
  <Form>
    {func()}
  </Form>
);

addDecorator(FormDecorator);
addDecorator(withKnobs);

storiesOf('Form', module)
  .addWithInfo('InputText','ввод текста',
    () => <InputText
      hint={text('hint','Hint example')}
      placeholder={text('Placeholder','Placeholder example')}
      label={text('label','Label example')}/>)
  .addWithInfo('CheckBox','CheckBox',
    () => <CheckBox label={text('label','CheckBox label')}/>)
  .addWithInfo('RadioGroup','RadioGroup',
    () => <RadioGroup
      checkBoxes={[
        {
          label: text('label1','checkBox1 label'),
          name: text('name1','checkBox1 name')
        },
        {
          label: text('label2','checkBox2 label'),
          name: text('name2','checkBox2 name')
        }
      ]} 
      onChange={() => (boolean('onChange', false))}
    />
  );

// storiesOf('Button')
//   .addWithInfo('example', 'with text',
//     () => <Button onClick={action('clicked')}>
//       { text('sssr', 'Hello Button') }
//     </Button>)
//   .add('with some emoji',
//     () => <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>);
