import React from 'react'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';
import {CharacterLevel} from '../../src/components/CharacterLevel';

Enzyme.configure({ adapter: new Adapter() });

const dispatchSpy = sinon.spy();

function setup() {
  const props = {
    dispatch: dispatchSpy,
  }

  const component = mount(<CharacterLevel {...props} />);

  return {
    component
  }
}

describe('components', () => {
  describe('CharacterLevel', () => {

    let input;

    beforeAll(() => {
      const { component } = setup();
      input = component.find('input');
    });

    it('should be type number', () => {
      expect(input.props().type).toBe('number');
    });

    it('should have className character-level', () => {
      expect(input.props().className).toBe('character-level');
    });

    it('should have default value 1', () => {
      expect(input.props().defaultValue).toBe('1');
    });

    it('should dispatch SET_CHARACTER_LEVEL onChange', () => {
      const { component } = setup();
      component.find('input').simulate('change');
      expect(dispatchSpy.calledOnce).toBe(true);
      expect(dispatchSpy.args[0][0].type).toBe('SET_CHARACTER_LEVEL');
      expect(dispatchSpy.args[0][0].level).toBe('1');
    });
  });
});