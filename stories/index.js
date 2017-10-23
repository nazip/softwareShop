import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import '../node_modules/semantic-ui/dist/semantic.min.css';
import { CheckBoxStory,
  InputCurrencyStory,
  InputDateStory,
  InputTextStory,
  RadioGroupStory,
  ImgStory } from './elements';

import { ProductStory, ListOfProductsStory } from './elements/widgets';


storiesOf('elements', module)
  .addDecorator(withKnobs)
  .add('CheckBox', CheckBoxStory)
  .add('InputCurrency', InputCurrencyStory)
  .add('InputDate', InputDateStory)
  .add('InputText', InputTextStory)
  .add('RadioGroup', RadioGroupStory)
  .add('Image', ImgStory);

storiesOf('widgets', module)
  .addDecorator(withKnobs)
  .add('Product', ProductStory)
  .add('ListOfProducts', ListOfProductsStory);
