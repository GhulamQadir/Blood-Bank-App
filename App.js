/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, StatusBar, Image, TextInput, TouchableOpacity, ActivityIndicator, } from 'react-native';
import { Header, LearnMoreLinks, Colors, DebugInstructions, ReloadInstructions, } from 'react-native/Libraries/NewAppScreen';
import AppNavigation from './src/config/navigation'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const App = () => {
  const [isLoading, setIsloading] = useState(true);
  useEffect(() => {
    setTimeout(() =>{
    setIsloading(false)
  }, 500)

  }, [])
  if(isLoading){
    return(
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <ActivityIndicator size={'large'} color={'#black'} />
            </View>
    )
  }
    return(
      <AppNavigation />
    )
  }

export default App;
  // render(){
  // const [isLoading, setIsloading] = useState(true);
  // useEffect(() => {
  //   setTimeout(() =>{
  //   setIsloading(false)
  // }, 500)

  // }, [])
  // if(isLoading){
  //   return(
  //     <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
  //           <ActivityIndicator size={'large'} color={'#black'} />
  //           </View>
  //   )
  // }
