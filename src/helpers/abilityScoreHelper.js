import store from '../store'

export const getSelectedRaceBonuses = () => {

    const state = store.getState()

    if(state.races.length < 1) return [0,0,0,0,0,0]

    let selectedRace = state.races[state.raceId-1]
    let raceBonuses = selectedRace.details ? selectedRace.details.ability_bonuses : null

    return raceBonuses
}
