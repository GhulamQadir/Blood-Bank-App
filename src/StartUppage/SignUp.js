
import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, StatusBar, Image, TextInput, TouchableOpacity, ActivityIndicator,ScrollView } from 'react-native';
// import { Header, LearnMoreLinks, Colors, DebugInstructions, ReloadInstructions, } from 'react-native/Libraries/NewAppScreen';
// import firebase from '@react-native-firebase/app';
// import auth from '@react-native-firebase/auth';
import { login, signUp } from '../controller/loginController'
import AppNavigation from '../config/navigation';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { color } from 'react-native-reanimated';


import { Button } from 'native-base'
export default function SignUp({navigation}){
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = () => {
    login(email, password, loginComplete)
    if(password.length< 6){
      alert("Enter atleast six characters")
    }
    }

  const loginComplete = () => {
  navigation.navigate("Home")
  }

  const signUpUser = () => {
    signUp(email, password, signUpComplete)
  }

  const signUpComplete = () => {
    navigation.navigate("Home")
  }

  // const seePassword = (password) => {
  //   setData({
  //     ...password,
  //     secureTextEntry: !password.secureTextEntry  
  //   })
  // }

//   constructor(props){
//     super(props);

//     this.state = ({
//         email: '',
//         password: '',

//     })
// }

// signUp = (email, password) => {
//   try{
//     if(this.state.password.length < 6){
//         alert("Enter atleast Six characters")
//         return;
//     }
//     // alert(email)
//     firebase.auth().createUserWithEmailAndPassword(email, password)
// }
// catch(error){
//     console.log(error.toString())
// }

// }

// login = (email, password) => {
//   try{
//     firebase.auth().signInWithEmailAndPassword(email, password)
//     .then(function(user){
//         console.log(user)
//     })
// }
// catch(error){
//     console.log(error.toString())
// }
// }

  

    return(
      <ScrollView>
      <View style={{marginBottom: 50}}>
            <View style={styles.container}>
            <Image style={styles.logo} source={{uri: "https://miro.medium.com/max/1838/1*KJACFKJ0GKtnhgR7OmlPFA.gif"}} />

            <Text style={styles.info}>If you want to see information about blood bank, you need to sign in using your email account</Text>
            <View style={{marginTop: 35}}>

              <Text style={styles.registration}>Registration</Text>

                <Text style={styles.inputHeadings}>Email:</Text>
                <TextInput keyboardType="email-address" style={styles.input} placeholder="Your email"
                value={email} onChangeText={(text) => setEmail((text))}  />
                
                <Text style={styles.inputHeadings}>Password:</Text>
                <TextInput  secureTextEntry={true}
                 style={styles.input}
                 placeholder="Your password"
                 value={password} onChangeText={(text) => setPassword((text))} />                

                <TouchableOpacity style={styles.signInBtn}
                onPress={loginUser} activeOpacity={0.7}>
                <Text style={{fontSize: 15, alignItems: 'center', color: 'white'}}>Login</Text>
                </TouchableOpacity>
                
                <TouchableOpacity style={styles.signInBtn}
                onPress={signUpUser} activeOpacity={0.7}>
                <Text style={{fontSize: 15, alignItems: 'center', color: 'white'}}>Sign Up</Text>
                </TouchableOpacity>
            </View>
        </View>    
        </View>   
        </ScrollView>   
    )
  }

const styles = StyleSheet.create({
  container: {
    alignItems: 'center', flex: 1,
  },
  logo: {
    height: 100,
    width: 200,
},
info: {
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center',
    color: 'red',
    paddingRight: 20,
    paddingLeft: 20,
    fontSize: 16
},
registration: {
  color: 'red',
  fontWeight: 'bold',
  fontSize: 22,
  borderBottomWidth: 2,
  borderBottomColor: 'red', 
  marginBottom: 20
},
input: {
    color: 'black',
    height: 40,
    width: 180,
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: 'red'
},
signInBtn: {
    marginTop: 15,
    borderWidth: 1.5,
    borderColor: 'red',
    height: 25,
    width: 150, 
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    color: 'white',
    backgroundColor: 'brown'
},
inputHeadings: {
  fontSize: 19,
  fontWeight: '500',
  color: 'red'
}
});
