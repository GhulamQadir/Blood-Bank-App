import React from 'react'
import { Button, View, Text, StyleSheet, ScrollView } from 'react-native';



function About(){
    return(
        <ScrollView>
        <View>
            <Text style={styles.aboutText}>Blood bank, organization that collects, stores, processes, and transfuses blood. During World War I it was demonstrated that stored blood could safely be used, allowing for the development of the first blood bank in 1932. Before the first blood banks came into operation, a physician determined the blood types of the patient’s relatives and friends until the proper type was found, performed the crossmatch, bled the donor, and gave the transfusion to the patient. In the 1940s the discovery of many blood types and of several crossmatching techniques led to the rapid development of blood banking as a specialized field and to a gradual shift of responsibility for the technical aspects of transfusion from practicing physicians to technicians and clinical pathologists. The practicality of storing fresh blood and blood components for future needs made possible such innovations as artificial kidneys, heart-lung pumps for open-heart surgery, and exchange transfusions for infants with erythroblastosis fetalis.</Text>
            
        </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    aboutText: {
        fontSize: 16,
        marginTop: 20,
        lineHeight: 29
    }
})
export default About;


