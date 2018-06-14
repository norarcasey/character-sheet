import characterLevel from '../../src/reducers/characterLevel';

describe('characterLevel.reducer', () => {

  it('should return the initial state', () => {
    expect(characterLevel(undefined, {})).toEqual(1);
  });

  it('should return the current state', () => {
    expect(characterLevel(5, {})).toEqual(5);
  });

  it('should return the new state', () => {
    expect(characterLevel(5, {type: 'SET_CHARACTER_LEVEL', level: 6})).toEqual(6);
  });

});