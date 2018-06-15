import React from 'react'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import {Classes} from '../../src/containers/Classes';
import classesData from '../../src/data/classes';

Enzyme.configure({ adapter: new Adapter() });

function setup() {
  const props = {
    characterClass: classesData[3]
  }

  const enzymeWrapper = mount(<Classes {...props} />)

  return {
    props,
    enzymeWrapper
  }
}

describe('components', () => {
  describe('Classes', () => {
    it('should render a list of classes', () => {
      const { enzymeWrapper, props } = setup();
      expect(enzymeWrapper.find('.classes ul li').length).toBe(12);
      expect(enzymeWrapper.find('ul li.selected').text()).toBe(props.characterClass.name);

      for(let i = 0; i < classesData.length; i++) {
        expect(enzymeWrapper.find('ul li').at(i).text()).toBe(classesData[i].name);
      }

    });
  });
});