import { call, put, takeEvery } from 'redux-saga/effects'

function* fetchClasses(action) {
   try {
      const response = yield call(fetch, 'http://www.dnd5eapi.co/api/classes')
      const data = yield call([response, 'json'])

      yield put({type: "CLASSES_FETCH_SUCCEEDED", classes: data.results });
   } catch (e) {
      console.log("Error", e)
      yield put({type: "CLASSES_FETCH_FAILED", message: e.message});
   }
}

function* rootSaga() {
  yield takeEvery("CLASSES_FETCH_REQUESTED", fetchClasses);
}

export default rootSaga;