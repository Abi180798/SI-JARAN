import firebase from 'firebase'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDsoiF435z5mTZDL1MwRtreJj6UApNLFdQ",
  authDomain: "sijaran-unram.firebaseapp.com",
  databaseURL: "https://sijaran-unram.firebaseio.com",
  projectId: "sijaran-unram",
  storageBucket: "sijaran-unram.appspot.com",
  messagingSenderId: "922175783465",
  appId: "1:922175783465:web:99f07e030e4b04af739238",
  measurementId: "G-J7KYJ6EXJH"
};

const fconfig = firebase.initializeApp(firebaseConfig)

export default fconfig;