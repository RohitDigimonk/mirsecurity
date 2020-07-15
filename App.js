import React, {Component} from 'react';
import {View,Text} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import WelcomeScreen from './Screens/WelcomeScreen';
import DrawerContainer from './Screens/DrawerContainer';
import EmployeeLogin from './Screens/EmployeeLogin';
import Registration from './Screens/Registration';
import Otppage from './Screens/Otppage';
import EmployeeRegistration from './Screens/Employee_registration_process';
import Employeedashboard from './Screens/Employeedashboard';

const AppNavigator = createStackNavigator({

  WelcomeScreen: {
      screen: WelcomeScreen,
      navigationOptions: {
          header: null,
          
      }
  },
  EmployeeLogin: {
    screen: EmployeeLogin,
    navigationOptions: {
        header: null,
        
    }
},
  Registration: {
    screen: Registration,
    navigationOptions: {
        header: null,
        
    }
},
  Otppage: {
    screen: Otppage,
    navigationOptions: {
        header: null,
        
    }
},
  EmployeeRegistration: {
    screen: EmployeeRegistration,
    navigationOptions: {
        header: null,
        
    }
},
Employeedashboard: {
  screen: Employeedashboard,
  navigationOptions: {
      header: null,
      
  }
},
  
 
},{
  initialRouteName:'Employeedashboard'
})

const DrawerStack = createDrawerNavigator(
  {
    Main: AppNavigator
  },
  {
    drawerPosition: 'left',
    drawerType:'front',
    initialRouteName:'Main',
    drawerWidth:300,
    contentComponent: DrawerContainer
  }
);

export default App = createAppContainer(DrawerStack);