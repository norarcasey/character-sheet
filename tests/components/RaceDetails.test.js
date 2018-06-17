import React from 'react'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import RaceDetails from '../../src/components/RaceDetails';
import races from '../../src/data/races';
import abilityScores from '../../src/data/abilityScores';

Enzyme.configure({ adapter: new Adapter() });

function setup() {
  const props = {
    details: races[0],
    abilityScores: abilityScores
  }

  const enzymeWrapper = mount(<RaceDetails {...props} />)

  return {
    enzymeWrapper
  }
}

describe('components', () => {
  describe('Race Details', () => {
    it('should render the race details', () => {
      const { enzymeWrapper } = setup();

      expect(enzymeWrapper.find('div.details').length).toBe(1);
      expect(enzymeWrapper.find('p').length).toBe(8);
    });

    let details;

    beforeAll(() => {
      const { enzymeWrapper } = setup();
      details = enzymeWrapper.find('p');
    });

    it('should display the size', () => {
      expect(details.at(1).html()).toContain('Size:');
    });

    it('should display the speed', () => {
      expect(details.at(2).html()).toContain('Speed:');
    });

    it('should display the traits', () => {
      expect(details.at(3).html()).toContain('Traits:');
    });

    it('should display the Languages', () => {
      expect(details.at(4).html()).toContain('Languages:');
    });

    it('should display the proficiencies', () => {
      expect(details.at(5).html()).toContain('Proficiencies:');
    });

    it('should display the age', () => {
      expect(details.at(6).html()).toContain('Age:');
    });

    it('should display the alignment', () => {
      expect(details.at(7).html()).toContain('Alignment:');
    });
  });
});