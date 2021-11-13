// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAMlrWfmgqjC-aLkNn7zJtnntt5WYb6x_M",
  authDomain: "b05109032.firebaseapp.com",
  databaseURL: "https://b05109032-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "b05109032",
  storageBucket: "b05109032.appspot.com",
  messagingSenderId: "616978304423",
  appId: "1:616978304423:web:93cd2052fa34725a2bfa82",
  measurementId: "G-3NK222HQT0"
};
let app = firebase.initializeApp(firebaseConfig);

let db = app.firestore();
const settings = {timestampsInSnapshots:true};
db.settings(settings);

export default db;