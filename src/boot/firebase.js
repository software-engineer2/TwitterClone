import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyC2vg15ei7MtOBuz99fEquTP2PFOBXQ6Mg",
  authDomain: "twitter-clone-ea00d.firebaseapp.com",
  projectId: "twitter-clone-ea00d",
  storageBucket: "twitter-clone-ea00d.appspot.com",
  messagingSenderId: "1049984733918",
  appId: "1:1049984733918:web:1c50c4e6c6dc04f9d6a84f"
}


const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();

export { db };





// import { boot } from 'quasar/wrappers'

// // "async" is optional;
// // more info on params: https://v2.quasar.dev/quasar-cli/boot-files
// export default boot(async (/* { app, router, ... } */) => {
//   // something to do
// })
