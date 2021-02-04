import React from 'react';
// import MapView from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';


function KarachiLocation(){
    return(
        <View style={styles.container}>
      {/* <MapView style={styles.map} /> */}
    <Text>Karachi location</Text>
    </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    // map: {
    //   width: Dimensions.get('window').width,
    //   height: Dimensions.get('window').height,
    // },
  });

export default KarachiLocation;