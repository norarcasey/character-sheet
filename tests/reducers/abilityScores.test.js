import abilityScores from '../../src/reducers/abilityScores';

let ability1, ability2, state, action;
describe('abilityScores.reducer', () => {

  beforeAll(() => {
    ability1 = { name: 'ability 1', score: 12 },
    ability2 = { name: 'ability 2', score: 10 },
    state = [ability1, ability2],
    action = { type: 'SET_ABILITY_SCORE', name: ability1.name, score: 13};
  });


  it('should return the initial state', () => {
    expect(abilityScores(undefined, {})).toEqual([]);
  });

  it('should update the characters ability score', () => {
    expect(abilityScores(state, action)[0].score).toEqual(13);
  });

  it('should not update different ability scores', () => {
    expect(abilityScores(state, action)[1].score).toEqual(10);
  });

  describe('invalid action type', () => {
    it('should return current state', () => {
      expect(abilityScores(state, { type: 'INVALID_TYPE'})).toEqual(state);
    });
  });


});