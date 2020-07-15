import React, {Component} from 'react';
import {Text,View,SafeAreaView, Image, ImageBackground,} from 'react-native';
import Styles from '../Screens/Common/CommonStyles';
import { MenuButton } from '../Screens/Common/MenuButton';
import { ScrollView } from 'react-native-gesture-handler';







class DrawerContainer extends Component{

   

   
    
    render(){
        const { navigation } = this.props;


        return(
            <View style={{height:'100%',width:'100%'}}>
                <ImageBackground
                    source={require('../Screens/Assets/Images/drawer_background.png')}
                    style={{width:"100%",height:200,backgroundColor:'red'}}
                    resizeMode='cover'
                    
                >
                <View style={{marginTop:70,flexDirection:'row',height:60,alignItems:'center'}}>
                    <Image
                        source={require('../Screens/Assets/Images/default_profile.png')}
                        style={Styles.profileview}
                    />
                    <Text style={[Styles.headingtext,{marginLeft:10}]}>Rohit Arora{"\n"}Account Status</Text>
                </View>
                   
                </ImageBackground>
                <ScrollView>
                        <MenuButton
                        title='DASHBOARD'
                        source={require('../Screens/Assets/Images/dashboard.png')}
                        onPress={() => {
                            navigation.navigate('Employeedashboard');
                            navigation.closeDrawer();
                        }}
                        />
                        <View style={{width:'100%',height:1,backgroundColor:'#000'}} />
                         <MenuButton
                        title='MY PROFILE'
                        source={require('../Screens/Assets/Images/myprofile.png')}
                        onPress={() => {
                            navigation.navigate('Employeeprofile');
                            navigation.closeDrawer();
                        }}
                        />
                         <View style={{width:'100%',height:1,backgroundColor:'#000'}} />
                         <MenuButton
                        title='FIND A JOB'
                        source={require('../Screens/Assets/Images/job.png')}
                        onPress={() => {
                            navigation.navigate('Findjob');
                            navigation.closeDrawer();
                        }}
                        />
                         <View style={{width:'100%',height:1,backgroundColor:'#000'}} />
                         <MenuButton
                        title='ATTENDANCE'
                        source={require('../Screens/Assets/Images/attendence.png')}
                        onPress={() => {
                            navigation.navigate('Employeeattendance');
                            navigation.closeDrawer();
                        }}
                        />
                         <View style={{width:'100%',height:1,backgroundColor:'#000'}} />
                          <MenuButton
                        title='BILLING'
                        source={require('../Screens/Assets/Images/billing.png')}
                        onPress={() => {
                            navigation.navigate('Employeebilling');
                            navigation.closeDrawer();
                        }}
                        />
                         <View style={{width:'100%',height:1,backgroundColor:'#000'}} />
                         <MenuButton
                        title='SALARY'
                        source={require('../Screens/Assets/Images/job.png')}
                        onPress={() => {
                            navigation.navigate('Employeesalary');
                            navigation.closeDrawer();
                        }}
                        />
                         <View style={{width:'100%',height:1,backgroundColor:'#000'}} />
                          <MenuButton
                        title='DIRECTORY'
                        source={require('../Screens/Assets/Images/directory.png')}
                        onPress={() => {
                            navigation.navigate('Employeedirectory');
                            navigation.closeDrawer();
                        }}
                        />
                         <View style={{width:'100%',height:1,backgroundColor:'#000'}} />
                          <MenuButton
                        title='FEEDBACK'
                        source={require('../Screens/Assets/Images/feedback.png')}
                        onPress={() => {
                            navigation.navigate('employeefeedback');
                            navigation.closeDrawer();
                        }}
                        />
                         <View style={{width:'100%',height:1,backgroundColor:'#000'}} />
                          <MenuButton
                        title='LEAVE REQUEST'
                        source={require('../Screens/Assets/Images/leave.png')}
                        onPress={() => {
                            navigation.navigate('employeeleave');
                            navigation.closeDrawer();
                        }}
                        />
                         <View style={{width:'100%',height:1,backgroundColor:'#000'}} />
                        <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',height:140}}>
                                <View style={{backgroundColor:'#AF34B9',height:60,width:60,borderRadius:60/2,alignItems:'center',justifyContent:'center'}}>
                                    <Image
                                        source={require('../Screens/Assets/Images/logout.png')}
                                        style={{width:34,height:32,resizeMode:'contain'}}
                                    />
                                </View>
                                <Text style={{paddingHorizontal:10,fontSize:22}}>LOG OUT</Text>
                        </View>
                    
                </ScrollView>
            </View>
        );
    }
}



export default DrawerContainer;