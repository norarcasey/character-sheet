const abilityScores = [
  {full_name: "Strength", name: 'STR', score: 8},
  {full_name: "Dexterity", name: 'DEX', score: 8},
  {full_name: "Constitution", name: 'CON', score: 8},
  {full_name: "Intelligence", name: 'INT', score: 8},
  {full_name: "Wisdom", name: 'WIS', score: 8},
  {full_name: "Charisma", name: 'CHA', score: 8}
]

const RaceId = 1
const ClassId = 1
const ProficiencyBonus = 2

const Skills = [
  { name: "Athletics", type: "STR" },

  { name: "Acrobatics", type: "DEX" },
  { name: "Slieght of Hand", type: "DEX" },
  { name: "Stealth", type: "DEX" },

  { name: "Arcana", type: "INT" },
  { name: "History", type: "INT" },
  { name: "Investigation", type: "INT" },
  { name: "Nature", type: "INT" },
  { name: "Religion", type: "INT" },

  { name: "Animal Handling", type: "WIS" },
  { name: "Insight", type: "WIS" },
  { name: "Medicine", type: "WIS" },
  { name: "Perception", type: "WIS" },
  { name: "Survival", type: "WIS" },

  { name: "Deception", type: "CHA" },
  { name: "Intimidation", type: "CHA" },
  { name: "Performance", type: "CHA" },
  { name: "Persuasion", type: "CHA" },
]

export const PreloadedState = {
  abilityScores: abilityScores,
  classId: ClassId,
  proficiencyBonus: ProficiencyBonus,
  raceId: RaceId,
  skills: Skills
}