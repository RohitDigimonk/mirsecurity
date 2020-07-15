import React, {Component} from 'react';
import {View,Text, ImageBackground,TouchableOpacity,Image} from 'react-native';
import Styles from './Common/CommonStyles';
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';
import BigButton from '../Screens/Common/BigButton';
import RoundButton from './Common/RoundButton';
import Input from './Common/Input';
import { TextInput } from 'react-native-gesture-handler';

class EmployeeRegistration extends Component{

    state={activestep:0}

    nextstep=()=>{
        this.setState({activestep:this.state.activestep+1})
    }

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
            <ProgressSteps
            activeStep={this.state.activestep}
            borderWidth={5}
            activeStepIconBorderColor='#AF34B9'
            completedStepIconColor='#AF34B9'
            activeStepNumColor='#fff'
            completedProgressBarColor='#AF34B9'
            disabledStepNumColor='#000'

            
            >
                            <ProgressStep
                                removeBtnRow={true}
                            >
                                <View style={{ alignItems:'center',height:600,width:'100%' }}>
                                <View style={{height:'90%',width:'100%',alignItems:'center',justifyContent:'space-evenly'}}>
                                <View      
                                    style={{width:150,height:150,borderRadius:150/2,alignItems:'center',justifyContent:'center',backgroundColor:'#fff'}}
                                    resizeMode='contain'
                                >
                                <Text style={{fontSize:22,color:'grey',top:30,textAlign:'center'}}>Upload{"\n"}Your{"\n"}Photo</Text>
                                    <View style={{width:60,height:60,borderRadius:60/2,backgroundColor:'#be03fc',alignItems:'center',justifyContent:'center',right:-60}}>
                                        
                                    <TouchableOpacity onPress={this.pickimage}>
                                        <Image
                                            source={require('../Screens/Assets/Images/camera.png')}
                                            style={{width:38,height:30,resizeMode:'contain'}}
                                        />
                                    </TouchableOpacity>
                                        
                                    </View>
                                </View>
                                <View>
                                <Text style={Styles.headingtext}>Upload Your Profile Photo</Text>
                                </View>
                          
                                </View>
                                <View style={{alignItems:'center',width:'100%',height:'5%'}}>
                                    <RoundButton
                                        image={require('../Screens/Assets/Images/arrow_white.png')}
                                        onPress={this.nextstep}
                                    />
                                </View>
                                </View>
                            </ProgressStep>
                            <ProgressStep
                                removeBtnRow={true}
                            >
                                
                                <View style={{ alignItems:'center',height:600,width:'100%' }}>
                                <View style={{height:'90%',width:'100%',alignItems:'center',justifyContent:'space-evenly'}}>
                                    <Input
                                        placeholder='Address'
                                        placeholderTextColor='#fff'
                                    />
                                    <Input
                                        placeholder='City'
                                        placeholderTextColor='#fff'
                                    />
                                    <Input
                                        placeholder='Postcode'
                                        placeholderTextColor='#fff'
                                    />
                                    <Input
                                        placeholder='Qulification'
                                        placeholderTextColor='#fff'
                                    />
                                    <View style={Styles.biginputcontainer}>
                                    <TextInput
                                        placeholder='About Me'
                                        multiline={true}
                                        height={200}
                                        style={{paddingRight: 5,paddingLeft: 30,fontSize:18,textAlign:'justify'}}
                                        textAlignVertical='top'
                                        placeholderTextColor='#fff'
                                    />
                                    </View>
                                </View>
                                
                                <View style={{alignItems:'center',width:'100%'}}>
                                    <RoundButton
                                        image={require('../Screens/Assets/Images/arrow_white.png')}
                                        onPress={this.nextstep}
                                    />
                                </View>
                                </View>
                            </ProgressStep>
                            <ProgressStep
                                removeBtnRow={true}
                            >
                                <View style={{ alignItems:'center',height:600,width:'100%' }}>
                                <View style={{height:'90%',width:'100%'}}>
                                <View style={{ alignItems: 'center' }}>
                                <Input
                                        placeholder='Sia License Number'
                                        placeholderTextColor='#fff'
                                />
                                <View style={[Styles.biginputcontainer,{justifyContent:'center',flexDirection:'column'}]}>
                                    <Image
                                        source={require('../Screens/Assets/Images/upload.png')}
                                        style={{width:80,height:58,resizeMode:'contain'}}
                                    />
                                    <Text style={Styles.headingtext}>
                                        Uplad Sia License
                                    </Text>
                                </View>
                                </View>
                                </View>
                                <View style={{alignItems:'center',width:'100%',height:'10%'}}>
                                    <RoundButton
                                        image={require('../Screens/Assets/Images/arrow_white.png')}
                                        onPress={this.nextstep}
                                    />
                                </View>
                                
                                </View>
                            </ProgressStep>
                            <ProgressStep
                                removeBtnRow={true}
                            >
                                <View style={{ alignItems:'center',height:600,width:'100%' }}>
                                <View style={{height:'90%',width:'100%'}}>
                                <View style={{ alignItems: 'center' }}>
                                <Input
                                        placeholder='Upload Photo ID Proof'
                                        placeholderTextColor='#fff'
                                />
                                <View style={[Styles.biginputcontainer,{justifyContent:'center',flexDirection:'column'}]}>
                                    <Image
                                        source={require('../Screens/Assets/Images/upload.png')}
                                        style={{width:80,height:58,resizeMode:'contain'}}
                                    />
                                    <Text style={Styles.headingtext}>
                                        Upload Photo ID Proof
                                    </Text>
                                </View>
                                <Text style={Styles.commontext}>Example:Driving License, Passport, etc.</Text>
                                </View>
                                </View>
                                <View style={{alignItems:'center',width:'100%',height:'10%'}}>
                                    <RoundButton
                                        image={require('../Screens/Assets/Images/arrow_white.png')}
                                        onPress={this.nextstep}
                                    />
                                </View>
                                
                                </View>
                            </ProgressStep>
                            <ProgressStep
                                removeBtnRow={true}
                            >
                                 <View style={{ alignItems:'center',height:600,width:'100%' }}>
                                <View style={{height:'90%',width:'100%'}}>
                                <View style={{ alignItems: 'center' }}>
                                <Input
                                        placeholder='Address Proof'
                                        placeholderTextColor='#fff'
                                />
                                <View style={[Styles.biginputcontainer,{justifyContent:'center',flexDirection:'column'}]}>
                                    <Image
                                        source={require('../Screens/Assets/Images/upload.png')}
                                        style={{width:80,height:58,resizeMode:'contain'}}
                                    />
                                    <Text style={Styles.headingtext}>
                                        Upload Address Proof
                                    </Text>
                                </View>
                                <Text style={Styles.commontext}>Example:Letter, Invoice, Driving License, etc.</Text>
                                </View>
                                </View>
                                <View style={{alignItems:'center',width:'100%',height:'10%'}}>
                                    <RoundButton
                                        image={require('../Screens/Assets/Images/arrow_white.png')}
                                        onPress={this.nextstep}
                                    />
                                </View>
                                
                                </View>
                            </ProgressStep>
                            <ProgressStep
                                removeBtnRow={true}
                            >
                                <View style={{ alignItems:'center',height:600,width:'100%' }}>
                                <View style={{height:'90%',width:'100%'}}>
                                <View style={{ alignItems: 'center' }}>
                                <Text style={Styles.headingtext}>Upload your photo holding ID PROOF.{"\n"}as shown in the sample image below</Text>
                                <Image
                                    source={require('../Screens/Assets/Images/sample.png')}
                                    style={{width:240,height:250,resizeMode:'contain'}}
                                />
                                <View style={[Styles.biginputcontainer,{justifyContent:'center',flexDirection:'column'}]}>
                                    <Image
                                        source={require('../Screens/Assets/Images/upload.png')}
                                        style={{width:80,height:58,resizeMode:'contain'}}
                                    />
                                    <Text style={Styles.headingtext}>
                                        Upload Photo
                                    </Text>
                                </View>
                              
                                </View>
                                </View>
                                <View style={{flexDirection:'row',width:'100%',alignItems:'center'}}>
                                    <BigButton
                                        onPress={()=>this.props.navigation.navigate('Employeedashboard')}
                                        backgroundColor='#AF34B9'
                                    >
                                        SUBMIT
                                    </BigButton>
                                    <RoundButton
                                        image={require('../Screens/Assets/Images/arrow_white.png')}
                                        marginLeft={-90}
                                    >

                                    </RoundButton>
                                </View>
                                
                                </View>
                            </ProgressStep>
            </ProgressSteps>
                
           
           
            </View>
            </ImageBackground>
            </View>
        )
    }
}


export default EmployeeRegistration;