import React from 'react'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import {AbilityScore} from '../../src/components/AbilityScore'

Enzyme.configure({ adapter: new Adapter() });

function setup() {
  const props = {
    dispatch: function(x) {},
    fullName: 'test',
    score: 5,
    modifier: "2"
  }

  const component = mount(<AbilityScore {...props} />);

  return {
    props,
    component
  }
}

describe('components', () => {
  describe('AbilityScore', () => {

    it('should render ability score input, name, and modifier', () => {
      const { component, props } = setup();

      expect(component.find('div').hasClass('ability-score')).toBe(true);

      const inputProps = component.find('input').props();
      expect(inputProps.type).toBe('number');
      expect(inputProps.value).toBe(props.score);

      expect(component.find('label').text()).toBe(props.fullName);
      expect(component.find('span.ability-score-modifier').text()).toBe(props.modifier);

    });
  });
});