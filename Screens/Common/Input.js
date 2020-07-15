import React from 'react';
import {TextInput, View, Text, StyleSheet,Image} from 'react-native';

const Input =({ value, onChangeText, placeholder,height,multiline,textAlignVertical, secureTextEntry,autoCapitalize, placeholderTextColor,image,keyboardType,paddingLeft }) => {
    const {inputStyle, containerStyle} = styles;
    return (
        <View style={[containerStyle,height?{height:height}:{height:45}]}>
           
            <Image
            source={image}
            style={{height:22,width:18, resizeMode:'contain',paddingLeft:paddingLeft}}
            />
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
            multiline={multiline}
            textAlignVertical={textAlignVertical}
            
            />
           
        </View>
    );

};

const styles = StyleSheet.create({
    inputStyle: {
        color: '#ffffff',
        paddingRight: 5,
        paddingLeft: 15,
        fontSize: 18,
        lineHeight: 23,
        // flex: 2,
        
    },
   
    containerStyle: {
        width:"80%",
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius:20,
        borderWidth: 2,
        borderColor:'#fff',
        marginBottom: 15,
        marginVertical:5,
    }
});


export default Input;