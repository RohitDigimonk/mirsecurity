import React from 'react';
import {  StyleSheet, View,Image } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { color } from 'react-native-reanimated';


const RoundButton = ({ onPress,image,marginLeft }) => {
    return (
        <View style={{width:'20%',marginLeft:marginLeft}}>
    <TouchableWithoutFeedback onPress={onPress} style={[styles.buttonStyle]}>
            <Image
            source={image}
            style={{height:30,width:35, resizeMode:'contain'}}
            />
    </TouchableWithoutFeedback>
    </View>
    );

};

const styles = StyleSheet.create ({
    buttonStyle: {
        width: 65,
        alignSelf: 'center',
        borderRadius: 65/2,
        height:65,
        alignItems:"center",
        justifyContent: 'center',
        backgroundColor:'#AF34B9',
        // shadowOpacity:1,
        // borderWidth:5,
        // borderTopLeftRadius:1
        
    },
    


});

export default RoundButton;