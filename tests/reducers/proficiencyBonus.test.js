import proficiencyBonus from '../../src/reducers/proficiencyBonus';

describe('proficiencyBonus.reducer', () => {
  const state = 5;

  describe('empty action', () => {
    it('should return initial state', () => {
      expect(proficiencyBonus(undefined, {})).toEqual(2);
    });
  });

  it('should update the state', () => {
    const newProficiencyBonus = 6;
    expect(proficiencyBonus(state, { type: 'SET_PROFICIENCY_BONUS', value: newProficiencyBonus})).toBe(newProficiencyBonus);
  });

  describe('invalid action type', () => {
    it('should return current state', () => {
      expect(proficiencyBonus(state, {type: 'INVALID_TYPE'})).toBe(state);
    });
  });
});