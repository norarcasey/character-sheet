import characterClass from '../../src/reducers/class'

let testClass = { name: "className"};

describe('class.reducer', () => {
  it('should return the initial state', () => {
    expect(characterClass(undefined, {})).toEqual({});
  });

  it('should set initial class state', () => {
    expect(characterClass(undefined, { type: 'SET_CLASS', class: testClass})).toEqual(testClass);
  });

  it('should return state if class undefined', () => {
    expect(characterClass(testClass, { type: 'SET_CLASS', class: undefined})).toEqual(testClass);
  });
});