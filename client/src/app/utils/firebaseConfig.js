import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyClURgujPVvnfTOVsicYzG1jrNtO832RVc',
  authDomain: 'react-slack-512.firebaseapp.com',
  databaseURL: 'https://react-slack-512.firebaseio.com',
  projectId: 'react-slack-512',
  storageBucket: 'react-slack-512.appspot.com',
  messagingSenderId: '739422110235',
  appId: '1:739422110235:web:d9c79d359ce6c1d4012ebe',
};

firebase.initializeApp(firebaseConfig);

export default firebase;
