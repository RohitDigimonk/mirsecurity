import React, {Component} from 'react';
import {View,Text, ImageBackground} from 'react-native';
import Input from '../Screens/Common/Input';
import Styles from '../Screens/Common/CommonStyles';
import BigButton from './Common/BigButton';
import { TouchableOpacity } from 'react-native-gesture-handler';

class EmployeeLogin extends Component{
    render(){
        return(
            <View style={{height:'100%',width:'100%'}}>
                <ImageBackground
                    source={require('../Screens/Assets/Images/loginbackground.png')}
                    style={{width:'100%',height:'100%',alignItems:'center',justifyContent:'space-around'}}
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
                <View>
                        <Input
                            image={require('../Screens/Assets/Images/email_white.png')}
                            placeholder='Email/Phone No.'
                            placeholderTextColor='#fff'
                        />
                        <Input
                            image={require('../Screens/Assets/Images/password_white.png')}
                            placeholder='Password'
                            placeholderTextColor='#fff'
                        />
                    <View style={{alignItems:'flex-end',paddingVertical:20}}>
                        <Text style={Styles.commontext}>
                            Forget Password ?
                        </Text>
                        <View style={{flexDirection:'row'}}>
                        <Text style={Styles.commontext}>
                            Don't have an account ?
                        </Text>
                        <TouchableOpacity onPress={()=>this.props.navigation.navigate('Registration')}>
                        <Text style={Styles.commontext}>
                            Create now
                        </Text>
                        </TouchableOpacity>
                        </View>
                    </View>
                      
                </View>
             
                <BigButton
                       backgroundColor='transparent'
                       >
                           LOGIN
                </BigButton>
              

                </ImageBackground>
                
            </View>
        );
    }
}

export default EmployeeLogin;