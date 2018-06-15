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
    enzymeWrapper
  }
}

describe('components', () => {
  describe('Classes', () => {
    it('should render a list of classes', () => {
      const { enzymeWrapper } = setup();
      const detailItems = enzymeWrapper.find('.details p');

      expect(detailItems.at(0).text()).toBe('Hit Die:1d8');
      expect(detailItems.at(1).text()).toContain('Saving Throws');
      expect(detailItems.at(2).text()).toContain('Proficiences');
      expect(detailItems.at(3).text()).toContain('Subclasses');
      expect(detailItems.at(4).text()).toContain('Skill Proficiencies Choices');
    });
  });
});