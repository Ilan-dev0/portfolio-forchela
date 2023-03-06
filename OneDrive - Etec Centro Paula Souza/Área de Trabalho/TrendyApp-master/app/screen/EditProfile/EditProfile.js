import React from 'react';
import { View, Text, Container, Title, Hamburger, TouchableOpacity, ImageBackground, SignoutrSubmit, SubTitle}  from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import Ionicon from 'react-native-vector-icons/Ionicons'
import { borderBottomColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Signin from '../Signin/Signin';
import Register from '../Register/Register';
import ForgotPassword from '../ForgotPassword/ForgotPassword';
import PasswordUpdated from '../PasswordUpdated/PasswordUpdated'
import Homepage from '../Homepage/Homepage';
import { Touchable } from 'react-native-web';

function EditProfile( {navigation} ){
    return(
        <Container style={{flex:1,backgroundColor:'#16293E'}}>
            <Feather name="arrow-left" color="white" size={30} style={{position: 'absolute', top: 42, left: 7}} onPress={() => navigation.navigate('HubScreen')}/>
            <Title style={{fontSize: 26, marginVertical: 20, left: 90}}>Edit Profile</Title>
            <Ionicon name="pencil" color="white" size={30} style={{position: 'absolute', top: 42, right: 7}} onPress={() => navigation.navigate('EditProfile')}/>
            <View style={{flexDirection:'row',justifyContent:'space-between', marginBottom:20,alignItems:'center'}}>
                
            </View>

                <View 
                style={{
                    marginVertical: 15,
                    justifyContent: 'space-between',
                    
                }}>

                    <ImageBackground
                        source={require('../../assets/Lindo2.png')}
                        style={{
                            width:134, 
                            height:134, 
                            borderWidth: 3,
                            borderRadius: 140,
                            borderColor: '#6541F5',
                            left: 90,
                            bottom: 30}}

                        imageStyle={{
                            width:130, 
                            height:130,
                            borderRadius: 140, 
                            top: -1,
                            left: -1}}
                    />

                    <View style={{alignItems: 'center',
                                  right: 100}}>
                    <Title style={{
                            left: 100,
                            bottom: 20}}>Vinicius</Title>
                    <SubTitle style={{                       
                            left: 100,
                            bottom: 20}}>Front-end</SubTitle>    
                    </View>                
                </View>

                
        </Container>
    )
}

export default EditProfile;