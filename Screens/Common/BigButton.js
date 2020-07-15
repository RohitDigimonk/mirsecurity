import React from 'react';
import { Text, TouchableOpacity, StyleSheet, View } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';


const BigButton = ({ onPress, children, backgroundColor }) => {
    return (
        <View style={{width:'100%'}}>
    <TouchableWithoutFeedback onPress={onPress} style={[styles.buttonStyle,{backgroundColor:backgroundColor}]}>
        <Text style={styles.textStyle}>
            {children}
        </Text>
    </TouchableWithoutFeedback>
    </View>
    );

};

const styles = StyleSheet.create ({
    buttonStyle: {
        width: "80%",
        alignSelf: 'center',
        borderRadius: 30,
        height:50,
        alignItems:"center",
        marginLeft: 5,
        marginRight: 5,
        justifyContent: 'center',
        marginVertical:10
        
    },
    textStyle: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 18,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10,
        
    }


});

export default BigButton;