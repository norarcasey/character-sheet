export default function counter(state = [], action) {
    switch (action.type) {
      case 'RACES_FETCH_SUCCEEDED':
        return action.races
      case 'RACE_FETCH_SUCCEEDED':

        let results = []
        state.forEach(race => {

          if(race.name === action.race.name) {
            results.push( {...race, details: action.race })
          } else {
            results.push(race)
          }

        })

        return results
      default:
        return state
    }
  }