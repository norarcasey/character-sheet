import skillProficiencies from '../../src/reducers/skillProficiencies'

describe('skillProficiencies.reducer', () => {

  it('should return the default state', () => {
      expect(skillProficiencies(undefined, {})).toEqual([]);
  });

  let resetSkillProsType = 'RESET_SKILL_PROFICIENCIES'
  describe(resetSkillProsType, () => {

    it('should persist common proficiencies', () => {
      let action = {
        type: resetSkillProsType,
        proficiencies: [ {name: 'skill 1'}, {name: 'skill 2'} ]
      }
      expect(skillProficiencies(['skill 1', 'skill 2', 'skill 3'], action))
      .toEqual(['skill 1', 'skill 2'] );
    });

    it('should reset proficiencies if none match', () => {
      let action = {
        type: resetSkillProsType,
        proficiencies: [ {name: 'skill 7'}, {name: 'skill 6'} ]
      }
      expect(skillProficiencies(['skill 1', 'skill 2', 'skill 3'], action))
      .toEqual([]);
    });
  });

});