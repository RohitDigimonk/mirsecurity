import React, {Component, Fragment} from 'react';
import {View,Text, ImageBackground, Image, TouchableWithoutFeedback} from 'react-native';
import moment from 'moment';
import Styles from './Common/CommonStyles';
import SmallButton from './Common/SmallButton';
import { SafeAreaView } from 'react-navigation';
import { ScrollView } from 'react-native-gesture-handler';
import ToggleSwitch from 'toggle-switch-react-native';
import MapView from 'react-native-maps';
import Modal from 'react-native-modal';

const currentdate = moment().format('MMMM DD, YYYY');
const currentdate2 = moment().format('DD MMMM')
const currenttime = moment().format('HH:mm A')

class Employeedashboard extends Component{

    state = {toggle:true,startshiftmodal:false}

    switchtoggle=()=>{
        this.setState({toggle:!this.state.toggle})
    }

    startshift=()=>{
        this.setState({startshiftmodal:!this.state.startshiftmodal})
    }

    render() {
        const {startshiftmodal} = this.state;
        return(
            <Fragment>
            <SafeAreaView style={{ flex:0, backgroundColor: '#058CED' }} />
            <SafeAreaView style={{ flex:1, backgroundColor: '#f2f2f2' }}>
            <Modal
                isVisible={startshiftmodal}
                onBackdropPress={this.startshift}
                backdropOpacity={0.8}
                animationIn="zoomInDown"
                animationOut="zoomOutUp"
                animationInTiming={1000}
                animationOutTiming={1000}

                >   
                <View style={Styles.alertmodalmainview}>
                    <View style={Styles.alertmodalcontainer}>
                        <ImageBackground
                            style={{width:'100%',height:'100%',alignItems:'center'}}
                            resizeMode='cover'
                            source={require('../Screens/Assets/Images/modal_background.png')}
                            borderRadius={20}
                        >
                        {/* <Image
                            style={{width:240,height:80,marginVertical:20,resizeMode:'cover'}}
                            source={require('../Screens/Assets/Images/logo.png')}
                        /> */}
                        <Text style={Styles.alertmodaltext}>D D Mall</Text>
                        <View style={{width:'100%',height:1,backgroundColor:'#000'}} />
                        <Text style={Styles.alertmodaltext}>
                            Working | {currentdate2} at {currenttime}
                        </Text>
                        <Text style={[Styles.alerttimetext]}>
                            00:00:00
                        </Text>
                        <View style={{width:'100%',height:1,backgroundColor:'#000'}} />
                        <View style={{flexDirection:'row'}}>
                        <Image
                            source={require('../Screens/Assets/Images/')}
                        />
                        <Text>Security guard name</Text>
                        </View>
                        </ImageBackground>
                    </View>
                    </View>
                </Modal>
            <View style={{height:'100%',width:'100%',alignItems:'center'}}>
                <ImageBackground
                    style={{height:200,width:'100%'}}
                    source={require('../Screens/Assets/Images/menu-top.png')}
                >
                    <View style={{flexDirection:'row',paddingTop:40,justifyContent:'space-between',paddingHorizontal:15}}>
                        <Image
                            source={require('../Screens/Assets/Images/menu.png')}
                            style={{height:30,width:34,resizeMode:'contain'}}
                        />
                        <Text style={Styles.headingtext}>{currentdate}</Text>
                        <Image
                            source={require('../Screens/Assets/Images/notification.png')}
                            style={{height:30,width:34,resizeMode:'contain'}}
                        />
                    </View>
                    <View style={{flexDirection:'row',alignItems:'center',height:120,paddingLeft:10}}>
                        <Image
                            source={require('../Screens/Assets/Images/default_profile.png')}
                            style={Styles.profileview}
                        />
                        <Text style={[Styles.headingtext,{paddingLeft:20}]}>Welcome Rohit</Text>
                        
                    </View>
                    <View style={{alignItems:'flex-end',top:-40,paddingRight:10}}>
                    <ImageBackground
                            source={require('../Screens/Assets/Images/badge.png')}
                            style={[Styles.profileview,{alignItems:'center',justifyContent:'center'}]}
                    >
                        <Text style={[Styles.commontext,{textAlign:'center'}]}>$ 50 {'\n'}P.H.Wages</Text>

                    </ImageBackground>
                    </View>
                </ImageBackground>
                <ScrollView showsVerticalScrollIndicator={false} style={{width:'100%'}} contentContainerStyle={{alignItems:'center'}}>
                <View style={Styles.mapbox}>
                   <View style={Styles.mapboxdetail}>
                       <View style={{paddingHorizontal:10.5}}>
                        <Text>Site Loaction</Text>
                        </View>
                        <View style={{height:'100%',width:1,backgroundColor:'#000'}} />
                        <View style={{paddingHorizontal:10}}>
                        <Text>DD Mall Gwalior, (M.P.)</Text>
                        </View>
                   </View>
                   <View style={Styles.mapboxdetail}>
                       <View style={{paddingHorizontal:10}}>
                        <Text>Site Manager</Text>
                        </View>
                        <View style={{height:'100%',width:1,backgroundColor:'#000'}} />
                        <View style={{paddingHorizontal:10}}>
                        <Text>SIC Security Services, +44 XXXXXXXX</Text>
                        </View>
                   </View>
                   <MapView
                        showsUserLocation={true}
                        style={{width:'100%',height:150}}
                        region={{latitude: parseInt(26.2183),longitude:parseInt(78.1828),
                                // latitudeDelta: 0.0922,longitudeDelta: 0.0421,
                                }} >
                        <MapView.Marker
                            coordinate={{ "latitude": parseInt(26.2183),   
                            "longitude": parseInt(78.1828) }}
                            // title={this.state.productdata['product_title']}
                            draggable 
                        />
                </MapView>
                </View>
                <View style={{flexDirection:'row',width:'100%',marginVertical:20}}>
                    
                    <SmallButton
                        onPress={this.startshift}
                        backgroundColor='#AF34B9'
                        image={require('../Screens/Assets/Images/startshift.png')}
                    >
                        START SHIFT
                    </SmallButton>
                        
                    <SmallButton
                        backgroundColor='#058CED'
                        image={require('../Screens/Assets/Images/endshift.png')}
                    >
                        END SHIFT
                    </SmallButton>
                </View>
                <View style={{flexDirection:'row'}}>
                    <ImageBackground
                    source={require('../Screens/Assets/Images/block.png')}
                    style={Styles.blockview}
                    borderRadius={20}
                    resizeMode='contain'
                    >
                    <Text style={[Styles.headingtext,{textAlign:'center'}]}>PAYMENT PENDING{"\n"} AMOUNT</Text>
                    <Text style={[Styles.headingtext,{fontSize:28}]}>$ xxxx</Text>
                    </ImageBackground>
                    <ImageBackground
                    source={require('../Screens/Assets/Images/block.png')}
                    style={Styles.blockview}
                    borderRadius={20}
                    resizeMode='contain'
                    >
                    <Text style={[Styles.headingtext,{textAlign:'center'}]}>PAYMENT RECEIVED{"\n"} AMOUNT</Text>
                    <Text style={[Styles.headingtext,{fontSize:28}]}>$ xxxx</Text>
                    </ImageBackground>
                </View>
                <View style={{flexDirection:'row'}}>
                    <ImageBackground
                    source={require('../Screens/Assets/Images/block.png')}
                    style={Styles.blockview}
                    borderRadius={20}
                    resizeMode='contain'
                    >
                    <Text style={[Styles.headingtext,{textAlign:'center'}]}>HOURLY{"\n"} CHECKS</Text>
                   
                    </ImageBackground>
                    <ImageBackground
                    source={require('../Screens/Assets/Images/block.png')}
                    style={Styles.blockview}
                    borderRadius={20}
                    resizeMode='contain'
                    >
                    <Text style={[Styles.headingtext,{textAlign:'center'}]}>MY{"\n"} ATTENDANCES</Text>
                  
                    </ImageBackground>
                </View>
                <View style={Styles.longbuttonview}>
                    <Text style={Styles.headingtext}>LOOKING FOR NEW JOBS</Text>
                            <ToggleSwitch
                                isOn={this.state.toggle}
                                onColor="green"
                                offColor="grey"
                                labelStyle={{ color: "green", fontWeight: "600" }}
                                size="medium"
                                onToggle={this.switchtoggle}
                            />
                </View>
                </ScrollView>
            </View>
            </SafeAreaView>
            </Fragment>
        );
    }
} 

export default Employeedashboard;