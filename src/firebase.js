import {initializeApp} from "firebase/app"
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"
const firebaseConfig = {
    apiKey: "AIzaSyCdT0if9Rv5tbWIVWmm6clMU60yhIhFyYs",
    authDomain: "eshop-c7bb9.firebaseapp.com",
    projectId: "eshop-c7bb9",
    storageBucket: "eshop-c7bb9.appspot.com",
    messagingSenderId: "241124964801",
    appId: "1:241124964801:web:4b177b493aea0b54749740",
    measurementId: "G-ZXNH9M2BWP"
  };


 const app = initializeApp(firebaseConfig);

 export const db = getFirestore(app);

 export const auth = getAuth(app);