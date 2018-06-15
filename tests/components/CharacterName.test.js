import React from 'react'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';
import {CharacterName} from '../../src/components/CharacterName';

Enzyme.configure({ adapter: new Adapter() });

const dispatchSpy = sinon.spy();

function setup() {
  const props = {
    dispatch: dispatchSpy,
  }

  const component = mount(<CharacterName {...props} />);

  return {
    component
  }
}

describe('components', () => {
  describe('CharacterName', () => {

    let input;

    beforeAll(() => {
      const { component } = setup();
      input = component.find('input');
    });

    it('should be type text', () => {
      expect(input.props().type).toBe('text');
    });

    it('should have className character-name', () => {
      expect(input.props().className).toBe('character-name');
    });

    it('should have place holder', () => {
      expect(input.props().placeholder).toBe('Enter a Name');
    });

    it('should dispatch SET_CHARACTER_NAME onChange', () => {
      const { component } = setup();
      component.find('input').simulate('change');
      expect(dispatchSpy.calledOnce).toBe(true);
      expect(dispatchSpy.args[0][0].type).toBe('SET_CHARACTER_NAME');
      expect(dispatchSpy.args[0][0].name).toBe('');
    });
  });
});