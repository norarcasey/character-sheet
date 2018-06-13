import { call, put } from 'redux-saga/effects';
import races from '../data/races';

export function* fetchRaces(action) {
  try {
    //   const response = yield call(fetch, 'http://www.dnd5eapi.co/api/races')
    //   const data = yield call([response, 'json'])
    console.log(races);
    yield put({ type: 'RACES_FETCH_SUCCEEDED', races: races });
    //   yield put({type: "RACE_FETCH_REQUESTED", id: 1})
  } catch (e) {
    console.log('Error', e);
    yield put({ type: 'RACES_FETCH_FAILED', message: e.message });
  }
}

export function* fetchRace(action) {
  try {
    const response = yield call(
      fetch,
      `http://www.dnd5eapi.co/api/races/${action.id}`
    );
    const data = yield call([response, 'json']);

    yield put({ type: 'RACE_FETCH_SUCCEEDED', race: data });
  } catch (e) {
    console.log('Error', e);
    yield put({ type: 'RACE_FETCH_FAILED', message: e.message });
  }
}
