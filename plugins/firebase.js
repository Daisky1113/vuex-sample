
import firebase from 'firebase'

if (!firebase.apps.length) {
  firebase.initializeApp(
    {
      apiKey: "AIzaSyCPsmm8rBqR_yVpL2YDEkpNs9PKEeikNTk",
      authDomain: "lab10frontend3-66e6d.firebaseapp.com",
      projectId: "lab10frontend3-66e6d",
      storageBucket: "lab10frontend3-66e6d.appspot.com",
      messagingSenderId: "606242698251",
      appId: "1:606242698251:web:6fcf1ca238b7af9791c30e"
    }
  )
}


export default firebase
