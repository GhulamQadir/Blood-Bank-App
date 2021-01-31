import firebase from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth'

var firebaseConfig = {
        apiKey: "AIzaSyAP3KVBcnuY6mUTFgd6M44oMp6ct04pQ_4",
        authDomain: "e-commerce-web-app-ae9ca.firebaseapp.com",
        databaseURL: "https://e-commerce-web-app-ae9ca.firebaseio.com",
        projectId: "e-commerce-web-app-ae9ca",
        storageBucket: "e-commerce-web-app-ae9ca.appspot.com",
        messagingSenderId: "673302860540",
        appId: "1:673302860540:web:25443068488428873c7d79"
      };
//       Initialize Firebase
      if(!firebase.apps.length){
        firebase.initializeApp(firebaseConfig);
      }    

export function login(email, password, loginComplete){
        firebase
        .auth().signInWithEmailAndPassword(email, password)
        .then(() => loginComplete())
        .catch((error) => alert(error));

        console.log("Email==>", email);
        console.log("Password==>", password)

}

export function signUp(email, password, signUpComplete){
  firebase
  .auth().createUserWithEmailAndPassword(email, password)
  .then(() => login(email, password, signUpComplete))
  .catch((error) => alert(error));

  console.log("SignUp Email==>", email);
  console.log("SignUp Password==>", password)



}