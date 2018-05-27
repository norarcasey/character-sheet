const attributes = [
  {text: "Strength", score: 0},
  {text: "Dexterity", score: 0},
  {text: "Constitution", score: 0},
  {text: "Intelligence", score: 0},
  {text: "Wisdom", score: 0},
  {text: "Charisma", score: 0}
]

const RaceId = 1
const ProficiencyBonus = 2
const Proficiencies = [ "Perception", "Stealth", "Nature", "History"]

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
  attributes: attributes,
  proficiencyBonus: ProficiencyBonus,
  proficiencies: Proficiencies,
  raceId: RaceId,
  skills: Skills
}