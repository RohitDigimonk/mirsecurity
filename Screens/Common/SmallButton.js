import React from 'react';
import { Text, StyleSheet, View,Image } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';


const SmallButton = ({ onPress, children, backgroundColor,image }) => {
    return (
        <View style={{width:'50%'}}>
    <TouchableWithoutFeedback onPress={onPress} style={[styles.buttonStyle,{backgroundColor:backgroundColor}]}>
        <Image
            source={image}
            style={styles.imagestyle}
        />
        <Text style={styles.textStyle}>
            {children}
        </Text>
    </TouchableWithoutFeedback>
        </View>
    );

};

const styles = StyleSheet.create ({
    buttonStyle: {
        width: "90%",
        alignSelf: 'center',
        borderRadius: 30,
        height:40,
        alignItems:"center",
        justifyContent: 'center',
        flexDirection:'row'
        
    },
    textStyle: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 14,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10,
        
    },
    imagestyle: {
        width:24,
        height:20,
        resizeMode:'contain',
        marginHorizontal:10
    }


});

export default SmallButton;