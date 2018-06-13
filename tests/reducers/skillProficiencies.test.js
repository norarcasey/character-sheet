import skillProficiencies from '../../src/reducers/skillProficiencies'

describe('skillProficiencies.reducer', () => {

  it('should return the default state', () => {
      expect(skillProficiencies(undefined, {})).toEqual([]);
  });

  const resetSkillProsType = 'RESET_SKILL_PROFICIENCIES';

  describe(resetSkillProsType, () => {

    const characterSkillProficiencies = ['skill 1', 'skill 2', 'skill 3'];

    it('should persist common proficiencies', () => {
      let action = {
        type: resetSkillProsType,
        proficiencies: [ {name: 'skill 1'}, {name: 'skill 2'} ]
      };

      expect(skillProficiencies(characterSkillProficiencies, action))
      .toEqual(['skill 1', 'skill 2'] );
    });

    it('should reset proficiencies if none match', () => {
      let action = {
        type: resetSkillProsType,
        proficiencies: [ {name: 'skill 7'}, {name: 'skill 6'} ]
      };

      expect(skillProficiencies(characterSkillProficiencies, action))
      .toEqual([]);
    });
  });

  const updateSkillProsType = 'UPDATE_SKILL_PROFICIENCY';

  describe(updateSkillProsType, () => {

    describe('state does NOT contain proficiency', () => {

      describe('but is proficient', () => {

        let action = { type: updateSkillProsType, name: 'skill 4', isProficient: true };

        it('should add proficiency to empty state', () => {
          expect(skillProficiencies(undefined, action)).toEqual(['skill 4']);
        });

        it('should append proficiency to previous state', () => {
          expect(skillProficiencies(['skill 99'], action)).toEqual(['skill 99', 'skill 4']);
        });
      });

      describe('and is NOT proficient', () => {
        let action = { type: updateSkillProsType, name: 'skill 5', isProficient: false };
        let state = ['skill 4'];
        expect(skillProficiencies(state, action)).toEqual(state);
      });

    });

    describe('state already contains proficiency', () => {

      describe('and is NOT proficient', () => {
        let action = { type: updateSkillProsType, name: 'skill 4', isProficient: false };
        it('should remove proficiency from state', () => {
          expect(skillProficiencies(['skill 4'], action)).toEqual([]);
        });
      });

      describe('and IS proficient', () => {
        let action = { type: updateSkillProsType, name: 'skill 4', isProficient: true };
        let state = ['skill 4'];
        expect(skillProficiencies(state, action)).toEqual(state);
      });

    });

  });

});