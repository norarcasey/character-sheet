import { takeEvery } from 'redux-saga/effects'
import { fetchClasses } from './classes'
import { fetchRace, fetchRaces } from './races'

function* rootSaga() {
  yield takeEvery("CLASSES_FETCH_REQUESTED", fetchClasses);
  yield takeEvery("RACE_FETCH_REQUESTED", fetchRace);
  yield takeEvery("RACES_FETCH_REQUESTED", fetchRaces);
}

export default rootSaga;