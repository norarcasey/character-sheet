import firebase from 'firebase'
import uuid from 'uuid/v4'
import { FirebaseConfig } from "../config/keys";

firebase.initializeApp(FirebaseConfig);
const database = firebase.database()

export const saveStateToFirebase = (state) => {
  const id = uuid()
  console.log(id)
  console.log(state)
  database.ref(`/${id}`).set({
    state, id
  })
}

export default database