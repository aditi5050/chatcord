import firebase from 'firebase'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAonTpn6Qc1EsLxPKWh4XxkWxg6BxHj_wA",
  authDomain: "chatcord-36716.firebaseapp.com",
  projectId: "chatcord-36716",
  storageBucket: "chatcord-36716.appspot.com",
  messagingSenderId: "748289131773",
  appId: "1:748289131773:web:3ef2d49391cf032a06ea94",
  measurementId: "G-K2WL85Q05R"
};
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db =  firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider }
  export default db 