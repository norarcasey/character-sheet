import React from 'react'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import {AbilityScores} from '../../src/containers/AbilityScores';

Enzyme.configure({ adapter: new Adapter() });

function setup() {
  const props = {
    abilityScores: [ { name: 'DEX', full_name: 'Dexterity',  score: 8} ],
    race: { ability_bonuses: [ 2 ] }
  }

  const component = mount(<AbilityScores {...props} />)

  return {
    props,
    component
  }
}

describe('components', () => {
  describe('Ability Scores', () => {
    const { component, props } = setup();

    it('should render a form to contain ability score updates', () => {
      expect(component.find('div.ability-scores form').length).toBe(1);
      expect(component.find('div.ability-scores form .ability-score').length).toBe(1);
    });

    describe('ability score', () => {

      it('should be', () => {
        const inputProps = component.find('input').props(),
              ability = props.abilityScores[0];

        expect(inputProps.type).toBe('number');
        expect(inputProps.value).toBe(10);

        expect(component.find('label').text()).toBe(ability.full_name);
        expect(component.find('span.ability-score-modifier').text()).toBe("0");
      });
    });
  });
});