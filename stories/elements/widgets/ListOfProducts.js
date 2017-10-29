import React from 'react';
import { ListOfProducts } from 'components/elements/widgets';
import { productsData } from '../../static/data';
import { specs, describe, it } from 'storybook-addon-specifications';
import { mount } from 'enzyme';
import expect from 'expect';

const products = [];

for (let i = 0; i < 5; i++) {
  products[i] = productsData;
}

export const ListOfProductsStory = () => {
  const story = <ListOfProducts products={products} />;
  specs(() => describe('Hello World', function () {
    it('Should have the Hello World label', function () {
      const output = mount(story);
      console.log('1=',output);
      console.log('2=',output.text());
      expect(output.text()).toContain('macos');
    });
  }));

  return story;
};
