import React from 'react';
import {TextInput, View, StyleSheet} from 'react-native';

const Otpinput =({ value, onChangeText, placeholder, secureTextEntry,autoCapitalize, placeholderTextColor,keyboardType }) => {
    const {inputStyle, containerStyle} = styles;
    return (
        <View style={containerStyle}>
           
            
            <TextInput
            secureTextEntry={secureTextEntry}
            placeholder={placeholder}
            placeholderTextColor={placeholderTextColor}
            autoCorrect={false}
            style={inputStyle}
            value={value}
            onChangeText={onChangeText}
            autoCapitalize={autoCapitalize}
            keyboardType={keyboardType}
            maxLength={1}
            />
           
        </View>
    );

};

const styles = StyleSheet.create({
    inputStyle: {
        color: '#000',
        fontSize: 28,
        lineHeight: 35,
        
        
        
    },
   
    containerStyle: {
        height: 70,
        marginHorizontal:5,
        backgroundColor:'lightgrey',
        width:60,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius:10,
        borderWidth: 1,
        borderColor:'#fff',
        justifyContent:'center'
      
    }
});


export default Otpinput;