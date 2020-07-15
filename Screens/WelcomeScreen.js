import React, {Component} from 'react';
import {View,Text, ImageBackground} from 'react-native';
import BigButton from '../Screens/Common/BigButton';


class WelcomeScreen extends Component {
    render(){
        return(
            
            <View style={{height:'100%',width:'100%'}}>
            <ImageBackground
                source={require('../Screens/Assets/Images/background.png')}
                style={{width:'100%',height:'100%',justifyContent:'space-between'}}
                resizeMode='cover'
            >
            <View style={{alignItems:'center',justifyContent:'center',height:'20%'}}>
                <Text style={{fontSize:80,color:'#fff',letterSpacing:10}}>
                    MIR
                </Text>
                <Text style={{fontSize:24,color:'#fff',marginTop:-20,letterSpacing:5}}>
                    SECURITY
                </Text>
            </View>
            <View style={{paddingBottom:'10%'}}>
            <BigButton
            backgroundColor='blue'

            >
                EMPLOYER
            </BigButton>
            
            <BigButton
            backgroundColor='purple'
            onPress={()=>this.props.navigation.navigate('EmployeeLogin')}
            >
                EMPLOYEE
            </BigButton>
            </View>

            </ImageBackground>
            </View>
        );
    }
}

export default WelcomeScreen;