
import firebase from 'firebase'

if (!firebase.apps.length) {
  firebase.initializeApp(
    {
      apiKey: "AIzaSyC4T4D95Cktkg-ADpJ7NydKuA4hA13ih9c",
      authDomain: "lab10frontend3.firebaseapp.com",
      projectId: "lab10frontend3",
      storageBucket: "lab10frontend3.appspot.com",
      messagingSenderId: "817564052924",
      appId: "1:817564052924:web:4a7f0a75d1d23dc7e38fb9"
    }
  )
}


export default firebase
