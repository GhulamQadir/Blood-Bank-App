import React from 'react'
import { Button, View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
// import { ScrollView } from 'react-native-gesture-handler';
// import { TouchableOpacity } from 'react-native-gesture-handler';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import { NavigationContainer } from '@react-navigation/native';
import { signOut } from '../controller/loginController'
function Home({navigation}){

    const signedOut = () => {
    navigation.navigate("SignUp")
  }

  return(
        <ScrollView>
        <View>
          {/* <TouchableOpacity onPress={() => navigation.navigate("About")}>
              <Text>hasdjgjak</Text>
          </TouchableOpacity> */}
          <Text style={styles.heading}>Blood Bank</Text>
          <Text style={styles.text}>This project acts as an important role in saving life of human beings and which is also its main aim. The project Mobile App Blood Bank system is developed so that users can view the information about registered blood donors such as name, address, and other such personal information along with their details of blood group and other medical information of donor. The project also has a login page where in the user is required to register and only then can view the availability of blood and May also register to donate blood if he/she wishes to. This project requires internet access and thus there is a disadvantage of internet failure. Thus this application helps to select the right donor online instantly using medical details along with the blood group. The main aim of developing this application is to reduce the time to a great extent that is spent in searching for the right donor and the availability of blood required. Thus this application provides the required information in no time and also helps in quicker decision making.</Text>
        </View>

        <View style={{flex: 1}}>
        <View style={styles.buttons}>        
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("BloodInfo")}>
            <Text style={styles.buttonText}>View Donor Details</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={signedOut}>
            <Text style={styles.buttonText}>Sign Out</Text>
        </TouchableOpacity>
        </View>
        </View>
        </ScrollView>

    )
}
const styles = StyleSheet.create({
    text: {
        justifyContent: 'center', 
        alignItems: 'center', 
        textAlign: 'center', 
        fontSize: 16, 
        marginTop: 30,
        lineHeight: 25,
        marginRight: 5,
        marginLeft: 5,
        color: 'grey'
    },
    heading: {
        color: 'red',
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    button: {
        borderWidth: 2,
        height: 40,
        width: 150,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'red',
        borderRadius: 5,
        marginTop: 20,
        backgroundColor: 'brown',
    },
    buttonText: {
        color: 'white',
        fontSize: 16
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    }
})

export default Home;


