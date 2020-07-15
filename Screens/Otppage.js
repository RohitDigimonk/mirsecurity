import React, {Component} from 'react';
import {View,Text, ImageBackground} from 'react-native';
import Styles from './Common/CommonStyles';
import Otpinput from './Common/Otpinput';
import BigButton from './Common/BigButton';
import RoundButton from './Common/RoundButton';

class Otppage extends Component{
    
    render(){
        return(
            <View style={{height:'100%',width:'100%'}}>
            <ImageBackground
                source={require('../Screens/Assets/Images/loginbackground.png')}
                style={{width:'100%',height:'100%',justifyContent:'center',alignItems:'center'}}
                resizeMode='cover'
            >
            <View style={[Styles.shadowview,{height:'50%'}]}>
                <View style={{alignItems:'center'}}>
                <Text style={[Styles.headingtext,{marginBottom:40,fontWeight:'bold',fontSize:26}]}>ENTER OTP</Text>
                   
                <Text style={Styles.headingtext}>Please type verificatin code</Text> 
                <Text style={Styles.headingtext}>Send to 9822222222</Text>
                </View>
            <View style={{flexDirection:'row'}}>
                <Otpinput />
                <Otpinput />
                <Otpinput />
                <Otpinput />
            </View>
            <View style={{flexDirection:'row',width:'100%',alignItems:'center'}}>
                <BigButton
                    onPress={()=>this.props.navigation.navigate('EmployeeRegistration')}
                    backgroundColor='#AF34B9'
                >
                    CONTINUE
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

export default Otppage;