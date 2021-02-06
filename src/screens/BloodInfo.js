import React from 'react'
import { Button, View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';



function BloodInfo({ navigation }){
    return(
        <ScrollView>
        <View style={{marginRight: 10, marginLeft: 10}}>
            <Text style={styles.topHeading}>About blood donation Info</Text>

            <View>
                <Text style={styles.bloodTypesHead}>Blood Types:</Text>
                <Text style={{fontSize: 16, lineHeight: 25, color: 'black'}}>Although all blood is made of the same basic elements, not all blood is alike. Infect, there are eight different common blood types, which are determined by the presence or absence of certain antigens–substances that can trigger an immune response if they are foreign to the body. Since some antigens can trigger patient’s immune system to attack the transfused blood, safe blood transfusions depend on careful blood typing and cross-matching. There are four major blood groups determinedby the presence or absence of two antigens–A and B–on the surface of red blood cells:</Text>
            </View>
           
            <View style={{marginTop: 25, marginBottom: 25}}>
                <Text style={{fontSize: 20, color: 'red', alignItems: 'center'}}>Select your Blood Group</Text>
                <TouchableOpacity style={styles.groupBtn} activeOpacity={0.4}
                onPress={() => navigation.navigate("AGroup")}>
                    <Image style={styles.groupImages}  source={{uri: 'https://i0.wp.com/www.newsgram.com/wp-content/uploads/2020/03/blood-group-2668685_1280.png'}} />
                </TouchableOpacity>

                <TouchableOpacity style={styles.groupBtn} activeOpacity={0.4}
                onPress={() => navigation.navigate("BGroup")}>
                    <Image style={styles.groupImages}  source={{uri: 'https://www.pngitem.com/pimgs/m/297-2971412_blood-group-b-blood-free-photo-grupo-b.png'}} />
                </TouchableOpacity>

                <TouchableOpacity style={styles.groupBtn} activeOpacity={0.4}
                onPress={() => navigation.navigate("ABGroup")}>
                    <Image style={styles.groupImages}  source={{uri: 'https://cdn.pixabay.com/photo/2017/08/22/11/55/blood-group-2668693_1280.png'}} />
                </TouchableOpacity>

                <TouchableOpacity style={styles.groupBtn} activeOpacity={0.4}
                onPress={() => navigation.navigate("OGroup")}>
                    <Image style={{height: 80, width: 80}}  source={{uri: 'https://www.seekpng.com/png/small/364-3648208_blood-group-0-rh-factor-positive-blood-a.png'}} />
                </TouchableOpacity>
                </View>
                <TouchableOpacity activeOpacity={0.7} style={styles.branches}
                onPress={() => navigation.navigate("Branches")}>
                    <Text style={styles.branchesText}>Our Branches</Text>
                </TouchableOpacity>
        </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    topHeading: {
        fontSize: 22,
        textAlign: 'center', 
        color: 'red',
        margin: 17,
    },
    groupImages: {
        height: 100,
        width: 100,
        marginTop: 15,
    },
    bloodTypesHead: {
        fontSize: 18,
        color: 'red'
    },
    groupsText: {
        fontSize: 16,
        color: 'brown'
    },
    groupBtn: {
        alignItems:'center',
    },
    branches: {
        marginTop: 18,
        borderWidth: 2,
        borderRadius: 4,
        borderColor: 'brown',
        height: 28,
        width: 90,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'brown',
    },
    branchesText: {
        color: 'white',
    }
})
export default BloodInfo;


