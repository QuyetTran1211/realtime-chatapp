import firebase from 'firebase/app';

import 'firebase/analytics';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAzAvSwlkYhEi7f15IRGNVEBg4ZZqnDzGI',
  authDomain: 'realtime-chatapp-df8ac.firebaseapp.com',
  projectId: 'realtime-chatapp-df8ac',
  storageBucket: 'realtime-chatapp-df8ac.appspot.com',
  messagingSenderId: '417477447642',
  appId: '1:417477447642:web:332f293f498f0933a2fae3',
  measurementId: 'G-5G9NFHL09Y'
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

const auth = firebase.auth();
const db = firebase.firestore();

export { auth, db };
export default firebase;
