import { InputTextStory } from './InputText';
import { InputDateStory } from './InputDate';
import { ImgStory } from './Img';
import { CheckBoxStory } from './CheckBox';
import { InputCurrencyStory } from './InputCurrency';
import { RadioGroupStory } from './RadioGroup';

export  const ElementsStory = chapter => chapter
  .addChapter('InputText', InputTextStory)
  .addChapter('CheckBox', CheckBoxStory)
  .addChapter('Image', ImgStory)
  .addChapter('InputCurrency', InputCurrencyStory)
  .addChapter('RadioGroup', RadioGroupStory)
  .addChapter('InputDate', InputDateStory);
