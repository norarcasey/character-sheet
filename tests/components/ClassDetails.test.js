import React from 'react'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import ClassDetails from '../../src/components/ClassDetails';
import classesData from '../../src/data/classes';

Enzyme.configure({ adapter: new Adapter() });

function setup() {
  const props = {
    details: classesData[3]
  }

  const enzymeWrapper = mount(<ClassDetails {...props} />)

  return {
    props,
    enzymeWrapper
  }
}

describe('components', () => {
  describe('Classes', () => {
    it('should render a list of classes', () => {
      const { enzymeWrapper, props } = setup();

      expect(enzymeWrapper.find('.details p label').at(0).text()).toBe('Hit Die:');

    });
  });
});