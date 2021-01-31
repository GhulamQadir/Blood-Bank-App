import firebase from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth'
// const firebaseConfig = {
//     apiKey: "AIzaSyAP3KVBcnuY6mUTFgd6M44oMp6ct04pQ_4",
//     authDomain: "e-commerce-web-app-ae9ca.firebaseapp.com",
//     databaseURL: "https://e-commerce-web-app-ae9ca.firebaseio.com",
//     projectId: "e-commerce-web-app-ae9ca",
//     storageBucket: "e-commerce-web-app-ae9ca.appspot.com",
//     messagingSenderId: "673302860540",
//     appId: "1:673302860540:web:25443068488428873c7d79"
//   };
//   // Initialize Firebase
// var Firebase = (firebase.initializeApp(firebaseConfig));
// export default firebase;
  


var firebaseConfig = {
    apiKey: "AIzaSyAP3KVBcnuY6mUTFgd6M44oMp6ct04pQ_4",
    authDomain: "e-commerce-web-app-ae9ca.firebaseapp.com",
    databaseURL: "https://e-commerce-web-app-ae9ca.firebaseio.com",
    projectId: "e-commerce-web-app-ae9ca",
    storageBucket: "e-commerce-web-app-ae9ca.appspot.com",
    messagingSenderId: "673302860540",
    appId: "1:673302860540:web:25443068488428873c7d79"
  };
  
  var Firebase = firebase.initializeApp(firebaseConfig);
  
  export default firebase;