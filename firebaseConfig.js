import { firebase } from '@react-native-firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyBOrJ9y2jrmqU8tkmzJ_igl7MyFihyFnf4",
  authDomain: "project-jackoneill03-2.firebaseapp.com",
  projectId: "project-jackoneill03-2",
  storageBucket: "project-jackoneill03-2.firebasestorage.app",
  messagingSenderId: "1094227345882",
  appId: "1:1094227345882:web:0e8c5c8164b9dd32cf80e3"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app(); 
}
export default firebase;

