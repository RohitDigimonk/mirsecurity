import React, {Component} from 'react';
import {View,Text, ImageBackground} from 'react-native';
import Styles from './Common/CommonStyles';
import Input from './Common/Input';
import BigButton from './Common/BigButton';
import CheckBox from 'react-native-check-box';
import RoundButton from './Common/RoundButton';

class Registration extends Component{
    state = {isChecked:false}
    render(){
        return(
            <View style={{height:'100%',width:'100%'}}>
            <ImageBackground
                source={require('../Screens/Assets/Images/loginbackground.png')}
                style={{width:'100%',height:'100%',justifyContent:'center',alignItems:'center'}}
                resizeMode='cover'
            >
            <View style={Styles.shadowview}>
                <Text style={Styles.headingtext}>EMPLOYEE REGISTRATION</Text>
                <Input
                    placeholder='Full Name'
                    image={require('../Screens/Assets/Images/user_white.png')}
                    placeholderTextColor='#fff'
                    paddingLeft={60}
                />
                <Input
                    placeholder='Email'
                    image={require('../Screens/Assets/Images/email_white.png')}
                    placeholderTextColor='#fff'
                    paddingLeft={60}
                />
                <Input
                    placeholder='Contact Number'
                    image={require('../Screens/Assets/Images/contact_white.png')}
                    placeholderTextColor='#fff'
                    paddingLeft={60}
                />
                <Input
                    placeholder='Password'
                    image={require('../Screens/Assets/Images/password_white.png')}
                    placeholderTextColor='#fff'
                    paddingLeft={60}
                />
            <Input
                    placeholder='Confirm Password'
                    image={require('../Screens/Assets/Images/password_white.png')}
                    placeholderTextColor='#fff'
                    paddingLeft={60}
                />
           
                
            <View style={{flexDirection:'row',alignItems:'center',top:-40,width:'70%'}}>
                <CheckBox
                    checkedCheckBoxColor={'#fff'}
                    uncheckedCheckBoxColor={'#fff'}
                    onClick={()=>{
                    this.setState({isChecked:!this.state.isChecked})
                    }}
                    isChecked={this.state.isChecked}   
                />
                <Text style={[Styles.commontext]}>Accept Terms & Condition</Text>
            </View>
            
            <View style={{flexDirection:'row',width:'100%',alignItems:'center'}}>
            <BigButton
                onPress={()=>this.props.navigation.navigate('Otppage')}
                backgroundColor='#AF34B9'
            >
                SEND OTP
            </BigButton>
            <RoundButton
                image={require('../Screens/Assets/Images/arrow_white.png')}
                marginLeft={-90}
            >

            </RoundButton>
            </View>
            </View>
            </ImageBackground>
            </View>
        )
    }
}

export default Registration;