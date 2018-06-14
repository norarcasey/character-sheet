import React from 'react'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import SavingThrow from '../../src/components/SavingThrow'

Enzyme.configure({ adapter: new Adapter() });

function setup() {
  const props = {
    abilityScore: { full_name: 'ability name'},
    modifier: 3,
    isProficient: true,
    proficiencyBonus: 2

  }

  const enzymeWrapper = mount(<SavingThrow {...props} />)

  return {
    props,
    enzymeWrapper
  }
}

describe('components', () => {
  describe('SavingThrow', () => {
    it('should render checkbox and label', () => {
      const { enzymeWrapper, props } = setup();

      expect(enzymeWrapper.find('div').hasClass('saving-throw')).toBe(true);

      const inputProps = enzymeWrapper.find('input').props();
      expect(inputProps.type).toBe('checkbox');
      expect(inputProps.disabled).toBe(!props.isProficient);
      expect(inputProps.checked).toBe(props.isProficient);
      expect(inputProps.value).toBe(props.proficiencyBonus);

      expect(enzymeWrapper.find('label').text()).toBe('5 ability name');
    });
  });
});