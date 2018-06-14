import characterName from '../../src/reducers/characterName';

describe('characterName.reducer', () => {

  let state = 'Character Name';
  let newState = 'New Character Name';

  it('should return the initial state', () => {
    expect(characterName(undefined, {})).toEqual('');
  });

  it('should return the current state', () => {
    expect(characterName(state, {})).toEqual(state);
  });

  it('should return the new state', () => {
    expect(characterName(state, {type: 'SET_CHARACTER_NAME', name: newState})).toEqual(newState);
  });

});