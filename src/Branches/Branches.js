import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';



function Branches(){
    return(
        <ScrollView>
        <View>
            <Text style={styles.mainText}>Our Branches is in the eight cities of Pakistan:</Text>
        <View style={{flex: 1, marginTop: 5, marginBottom: 20}}>
        <View style={styles.buttons}>        
        <TouchableOpacity activeOpacity={0.7} style={styles.button}>
            <Text style={styles.buttonText}>Karachi</Text>
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={0.7} style={styles.button}>
            <Text style={styles.buttonText}>Lahore</Text>
        </TouchableOpacity>
        </View>
 
        <View style={styles.buttons}>        
        <TouchableOpacity activeOpacity={0.7} style={styles.button}>
            <Text style={styles.buttonText}>Islamabad</Text>
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={0.7} style={styles.button}>
            <Text style={styles.buttonText}>Faislabad</Text>
        </TouchableOpacity>
        </View>

        <View style={styles.buttons}>        
        <TouchableOpacity activeOpacity={0.7} style={styles.button}>
            <Text style={styles.buttonText}>Multan</Text>
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={0.7} style={styles.button}>
            <Text style={styles.buttonText}>Rawalpindi</Text>
        </TouchableOpacity>
        </View>
 
        <View style={styles.buttons}>        
        <TouchableOpacity activeOpacity={0.7} style={styles.button}>
            <Text style={styles.buttonText}>Peshawar</Text>
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={0.7} style={styles.button}>
            <Text style={styles.buttonText}>Quetta</Text>
        </TouchableOpacity>
        </View>
        </View>
        
        <Text style={styles.mainText}>For more information contact us on:</Text>
        <Text style={styles.mainText}>03180254726</Text>
        </View>
        </ScrollView>
 
    )
}
const styles = StyleSheet.create({
    mainText: {
        fontSize: 17,
        marginTop: 10,
        marginHorizontal: 10,
        color: 'brown',
        fontWeight: '600'
    },
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