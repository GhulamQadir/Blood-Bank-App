import React, { useState, useEffect } from 'react'
import { TouchableOpacity, View, Text, StyleSheet, ScrollView, Image, TextInput } from 'react-native';
import database from '@react-native-firebase/database';
import { color } from 'react-native-reanimated';



function BGroup(){
    
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [countName, setCountName] = useState("");
    const [cityName, setCityName] = useState("");
    const [phoneNum, setPhoneNum] = useState("");
    const [bloodGroup, setBloodGroup] = useState("");
    const [donation, setDonation] = useState("");
    const [confirmEmail, setConfirmEmail] = useState("");

       const save_data = () => {
           let user_details = {
               firstName,
               lastName,
               email,
               countName,
               cityName,
               phoneNum,
               bloodGroup,
               donation,
               confirmEmail
           }
        //    console.log("User_detail===>", user_details);
        database().ref('/').child('Donor Details').push(user_details)
        alert("Your response has been recorded")
       }
    
   
    return(
            <ScrollView>
            <View style={styles.aGroupView}>
            <Image style={styles.aGroupImg} source={{uri: 'https://www.pngitem.com/pimgs/m/297-2971412_blood-group-b-blood-free-photo-grupo-b.png'}} />
            <Text style={styles.aGroupText}>Group B can donate red blood cells to B's and AB's. It has only the B antigen on red cells (and A antibody in the plasma)</Text>
            <Text style={styles.bloodInfo}>In addition to the A and B antigens, there is a third antigen called the Rh factor, which can be either present (+) or absent ( – ). In general, Rh negative blood is given to Rh-negative patients, and Rh positive blood or Rh negative blood may be given to Rh positive patients.</Text>
            <Text style={styles.bloodInfo}>The universal red cell donor has Type O negative blood type. The universal plasma donor has Type AB blood type.</Text>

            <Text style={styles.bloodDonation}>Donate blood and save humanity</Text>
            
            <View style={styles.donationContainer}>
                <TextInput style={styles.bloodInfoInput} value={firstName} onChangeText={(e) => setFirstName(e)} placeholder="First name" />
                <TextInput style={styles.bloodInfoInput} value={lastName} onChangeText={(e) => setLastName(e)} placeholder="Last name" />
                <TextInput keyboardType={'email-address'} value={email} onChangeText={(e) => setEmail(e)} style={styles.bloodInfoInput} placeholder="Your email" />
                <TextInput style={styles.bloodInfoInput} value={countName} onChangeText={(e) => setCountName(e)} placeholder="Your Country name" />
                <TextInput style={styles.bloodInfoInput} value={cityName} onChangeText={(e) => setCityName(e)} placeholder="Your City name" />
                <TextInput keyboardType={'number-pad'} value={phoneNum} onChangeText={(e) => setPhoneNum(e)} style={styles.bloodInfoInput} placeholder="Your phone number" />
                <TextInput style={styles.bloodInfoInput} value={bloodGroup} onChangeText={(e) => setBloodGroup(e)} placeholder="Your blood group" />
                <TextInput style={styles.bloodInfoInput} value={donation} onChangeText={(e) => setDonation(e)} placeholder="Amount of blood donation" />
                <TextInput keyboardType={'email-address'} value={confirmEmail} onChangeText={(e) => setConfirmEmail(e)} style={styles.bloodInfoInput} placeholder="Your confirm email" />

<TouchableOpacity style={styles.donateBtn} activeOpacity={0.7}>
    <Text style={{color: 'white'}} onPress={save_data}>Donate now</Text>
</TouchableOpacity>
            </View>
            </View>
            </ScrollView>
    )
}
const styles = StyleSheet.create({
    aGroupView: {
        marginTop: 20,
        marginBottom: 20,
        marginRight: 10,
        marginLeft: 10

    },
    aGroupImg: {
        height: 60,
        width: 60,
    },
    aGroupText: {
        fontSize: 18,
        color: 'brown'
    },
    bloodDonation: {
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 20,
        marginTop: 30,
        color: 'brown',
        fontWeight: '700',
        fontFamily: 'sans-serif-thin'
    },
    donationContainer: {
        alignItems: 'center',
        marginTop: 40
    },
    bloodInfoInput: {
        marginBottom: 25,
    borderBottomWidth: 2,
    borderBottomColor: 'red'
    },
    bloodInfo: {
        fontSize: 16,
        marginTop: 20,
        color: 'red'
    },
    donateBtn: {
        borderWidth: 2,
        borderColor: 'red',
        height: 30,
        width:90,
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'brown',
        color: 'white'
    }
})

export default BGroup;


