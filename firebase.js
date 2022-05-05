import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAL95hG3R1BAyVX6lAa91qe0vEdhFN83Oc",
  authDomain: "senior-project-26a7d.firebaseapp.com",
  projectId: "senior-project-26a7d",
  storageBucket: "senior-project-26a7d.appspot.com",
  messagingSenderId: "656650648215",
  appId: "1:656650648215:web:53dccac1b58bc6a93287d2"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };