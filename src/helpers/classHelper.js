import store from '../store'

export const classProficiencies = (characterClass) => {
  let proficiencyChoices = characterClass.proficiency_choices
  let proficientSkillOptions = proficiencyChoices.filter(pro => pro.type === 'skill')[0].from
  return proficientSkillOptions
}