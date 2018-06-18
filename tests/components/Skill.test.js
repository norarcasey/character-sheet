import React from 'react'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import {Skill} from '../../src/components/Skill';

Enzyme.configure({ adapter: new Adapter() });

function setup() {
  const props = {
    skillProficiencies: ['skill 1'],
    skill: { name: 'skill 1', type: 'Ability Name'},
    proficiencies: ['skill 1'],
    proficiencyBonus: 3,
    modifier: 5
  }

  const component = mount(<Skill {...props} />);

  return {
    props,
    component
  }
}


describe('components', () => {
  describe('Skill', () => {
    let inputProps;
    const { component, props } = setup();

    beforeAll(() => {
      inputProps = component.find('input').props();
    });

    it('should have skill', () => {
      expect(component.find('div.skill').length).toBeGreaterThan(-1);
    });

    it('should have an skill check box', () => {
      expect(inputProps.type).toBe('checkbox');
    });

    it('should be checked', () => {
      expect(inputProps.checked).toBe(true);
    });

    it('should set the proficiency bonus', () => {
      expect(inputProps.value).toBe(props.proficiencyBonus);
    });

    it('should be enabled', () => {
      expect(inputProps.disabled).toBe(false);
    });

    it('should label the skill, value, and ability', () => {
      expect(component.find('.skill label').html()).toBe('<label>5&nbsp;skill 1 <span>(Ability Name)</span></label>');
    });
  });
});