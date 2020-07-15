import {StyleSheet} from 'react-native';

const Styles = StyleSheet.create ({
    commontext:{
        color:'#fff',
    },
    headingtext:{
        color:'#fff',
        fontSize:20,
    },
    shadowview:{
        backgroundColor:'#333333',
        opacity:0.8,
        height:'90%',
        width:'90%',
        borderRadius:15,
        alignItems:'center',
        paddingTop:'5%',
        justifyContent:'space-around'
    },
    biginputcontainer: {
        width:"80%",
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius:20,
        borderWidth: 2,
        borderColor:'#fff',
        marginBottom: 15,
        marginVertical:5,
        height:200
    },
    profileview: {
        width:100,
        height:100,
        borderRadius:100/2,
        resizeMode:'contain',
        marginLeft:10
    },
    mapbox: {
        height:250,
        backgroundColor:'#fff',
        width:'95%',
        borderWidth:0.2,
        borderColor:'#fff',
        borderRadius:15,
        marginTop:"15%",
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 2,
        alignItems:'center',
        shadowOffset: {
            height: 3,
            width: 3
          }

    },
    mapboxdetail: {
        height:40,
        width:'100%',
        borderBottomWidth:1,
        flexDirection:'row',
        alignItems:'center',
    },
    blockview:{
        height:150,
        width:200,
        marginHorizontal:5,
        alignItems:'center',
        justifyContent:'space-around'
    },
    longbuttonview:{
        flexDirection:'row',
        backgroundColor:'#AF34B9',
        width:'90%',
        height:40,
        borderRadius:20,
        alignItems:'center',
        paddingHorizontal:20,
        justifyContent:'space-between'
    },
    alertmodalmainview:{
        height:'60%',
        width:'100%',
        justifyContent:'center',
        alignItems:'center'
        },
    alertmodalcontainer:{
        height:"100%",
        width:"100%",
        backgroundColor:'#D33257',
        alignItems:'center',
        borderRadius:30,
        // borderWidth:0.4,
        // borderColor:'#fff',
        justifyContent:'flex-start',
        
    },
    alertmodaltext:{
        fontFamily:'Avenir',
        fontSize:18,
        color:'#fff',
        textAlign:'center'
    },
    alerttimetext:{
        fontFamily:'Avenir',
        fontSize:38,
        color:'#000',
        textAlign:'center'
    },
     alertmodalbutton:{
        width:'75%',
        height:40,
        backgroundColor:'#fff',
        marginVertical:20,
        borderRadius:50,
        justifyContent:'center',
        alignItems:'center'
    },
})

export default Styles;