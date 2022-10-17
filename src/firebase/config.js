import firebase from "firebase";
import  "firebase/auth";
import 'firebase/firebase'
import 'firebase/storage'


const firebaseConfig = {
    apiKey: "AIzaSyDUW0k2KKD-St-_rQdjQul6Lyc6UXS6C8s",
    authDomain: "olx-project-9059c.firebaseapp.com",
    projectId: "olx-project-9059c",
    storageBucket: "olx-project-9059c.appspot.com",
    messagingSenderId: "523933526406",
    appId: "1:523933526406:web:266aef160731f651eb2407",
    measurementId: "G-ZVSP71M788"
  };

 export default firebase.initializeApp(firebaseConfig)