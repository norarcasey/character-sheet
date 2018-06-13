export const classProficiencies = characterClass => {
  let proficientSkillOptions = classProficienciesArray(characterClass).from;
  return proficientSkillOptions;
};

export const classProficienciesChooseCount = characterClass => {
  let proficienciesChooseCount = classProficienciesArray(characterClass).choose;
  return proficienciesChooseCount;
};

const classProficienciesArray = characterClass => {
  let proficiencyChoices = characterClass.proficiency_choices;
  return proficiencyChoices.filter(pro => pro.type === 'skill')[0];
};
