import race from '../../src/reducers/race'

let testRace = { name: "raceName"};

describe('class.reducer', () => {
  it('should return the initial state', () => {
    expect(race(undefined, {})).toEqual({});
  });

  it('should set initial class state', () => {
    expect(race(undefined, { type: 'SET_RACE', race: testRace})).toEqual(testRace);
  });

  it('should return state if class undefined', () => {
    expect(race(testRace, { type: 'SET_RACE', race: undefined})).toEqual(testRace);
  });
});