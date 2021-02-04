import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';



function Branches({ navigation }){
    return(
        <ScrollView>
        <View>
        <View style={{flex: 1, marginTop: 5, marginBottom: 20}}>
        <View style={styles.buttons}>        
        <TouchableOpacity style={styles.button}
        onPress={() => navigation.navigate("KarachiLocation")}>
            <Text style={styles.buttonText}>Karachi Branch</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Lahore Branch</Text>
        </TouchableOpacity>
        </View>
 
        <View style={styles.buttons}>        
        <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Islamabad Branch</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Faislabad Branch</Text>
        </TouchableOpacity>
        </View>

        <View style={styles.buttons}>        
        <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Multan Branch</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Rawalpindi Branch</Text>
        </TouchableOpacity>
        </View>
 
        <View style={styles.buttons}>        
        <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Peshawar Branch</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Quetta Branch</Text>
        </TouchableOpacity>
        </View>
 
        </View>

        </View>
        </ScrollView>
 
    )
}
const styles = StyleSheet.create({
    button: {
        borderWidth: 2,
        height: 140,
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
export default Branches;