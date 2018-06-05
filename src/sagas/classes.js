import { call, put } from 'redux-saga/effects'
import classes from '../data/classes'

export function* fetchClasses(action) {
   try {
      // const response = yield call(fetch, 'http://www.dnd5eapi.co/api/classes')
      // const data = yield call([response, 'json'])
      console.log(classes);
      yield put({type: "CLASSES_FETCH_SUCCEEDED", classes: classes });
      // yield put({type: "CLASS_FETCH_REQUESTED", id: 1})
   } catch (e) {
      console.log("Error", e)
      yield put({type: "CLASSES_FETCH_FAILED", message: e.message});
   }
}


export function* fetchClass(action) {
  try {
    const response = yield call(fetch, `http://www.dnd5eapi.co/api/classes/${action.id}`)
    const data = yield call([response, 'json'])

    yield put({type: "CLASS_FETCH_SUCCEEDED", class: data });
  } catch (e) {
      console.log("Error", e)
      yield put({type: "CLASS_FETCH_FAILED", message: e.message});
  }
}