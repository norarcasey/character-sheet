import { takeEvery } from 'redux-saga/effects';
import { fetchAbilityScore, fetchAbilityScores } from './abilityScores';
import { fetchClass, fetchClasses } from './classes';
import { fetchRace, fetchRaces } from './races';

function* rootSaga() {
  yield takeEvery('ABILITY_SCORE_FETCH_REQUESTED', fetchAbilityScore);
  yield takeEvery('ABILITY_SCORES_FETCH_REQUESTED', fetchAbilityScores);

  yield takeEvery('CLASS_FETCH_REQUESTED', fetchClass);
  yield takeEvery('CLASSES_FETCH_REQUESTED', fetchClasses);

  yield takeEvery('RACE_FETCH_REQUESTED', fetchRace);
  yield takeEvery('RACES_FETCH_REQUESTED', fetchRaces);
}

export default rootSaga;
