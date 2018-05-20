import firebase from 'firebase'
import uuid from 'uuid/v4'
import { FirebaseConfig } from "../config/keys";
import store from '../store'

firebase.initializeApp(FirebaseConfig);
const database = firebase.database()

export const saveStateToFirebase = () => {
  const id = uuid()
  const state = store.getState()
  console.log(id, state)
  database.ref(`/${id}`).set({ state, id })
}

export default database