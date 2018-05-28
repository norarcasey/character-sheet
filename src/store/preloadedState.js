const abilityScores = [
  {name: "Strength", score: 8},
  {name: "Dexterity", score: 8},
  {name: "Constitution", score: 8},
  {name: "Intelligence", score: 8},
  {name: "Wisdom", score: 8},
  {name: "Charisma", score: 8}
]

const RaceId = 1
const ClassId = 1
const ProficiencyBonus = 2

const Skills = [
  { name: "Athletics", type: "Strength" },

  { name: "Acrobatics", type: "Dexterity" },
  { name: "Slieght of Hand", type: "Dexterity" },
  { name: "Stealth", type: "Dexterity" },

  { name: "Arcana", type: "Intelligence" },
  { name: "History", type: "Intelligence" },
  { name: "Investigation", type: "Intelligence" },
  { name: "Nature", type: "Intelligence" },
  { name: "Religion", type: "Intelligence" },

  { name: "Animal Handling", type: "Wisdom" },
  { name: "Insight", type: "Wisdom" },
  { name: "Medicine", type: "Wisdom" },
  { name: "Perception", type: "Wisdom" },
  { name: "Survival", type: "Wisdom" },

  { name: "Deception", type: "Charisma" },
  { name: "Intimidation", type: "Charisma" },
  { name: "Performance", type: "Charisma" },
  { name: "Persuasion", type: "Charisma" },
]

export const PreloadedState = {
  abilityScores: abilityScores,
  classId: ClassId,
  proficiencyBonus: ProficiencyBonus,
  raceId: RaceId,
  skills: Skills
}