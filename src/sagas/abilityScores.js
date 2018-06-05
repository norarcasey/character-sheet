import { call, put } from 'redux-saga/effects'
import abilityScores from '../data/abilityScores'

export function* fetchAbilityScores(action) {
   try {
      // const response = yield call(fetch, 'http://www.dnd5eapi.co/api/ability-scores')
      // const data = yield call([response, 'json'])

      yield put({type: "ABILITY_SCORES_FETCH_REQUESTED", abilityScores: abilityScores });
      // yield put({type: "ABILITY_SCORE_FETCH_REQUESTED", id: 1})
   } catch (e) {
      console.log("Error", e)
      yield put({type: "ABILITY_SCORES_FETCH_FAILED", message: e.message});
   }
}

export function* fetchAbilityScore(action) {
  try {
    const response = yield call(fetch, `http://www.dnd5eapi.co/api/ability-scores/${action.id}`)
    const data = yield call([response, 'json'])

    yield put({type: "ABILITY_SCORE_FETCH_REQUESTED", class: data });
  } catch (e) {
      console.log("Error", e)
      yield put({type: "ABILITY_SCORE_FETCH_FAILED", message: e.message});
  }
}