import { View, 
    KeyboardView,
    Text, 
    Container, 
    Title, 
    SubTitle, 
    Input, 
    RegisterSubmit, 
    TextSubmit, 
    EmailKey,
    PhoneKey,
    KeyText,
    ButtonSubmit,
    Hamburger,
    SafeAreaView,
    ScrollView,
    ImageBackground,
    SeeAll,
    Image,
    StyleSheet,
    TouchableOpacity,
    GoogleSubmit,
    FacebookSubmit,
    YoutubeSubmit,
    TikTokSubmit,
    TwitterSubmit
 }  from './styles'
 import Icon from 'react-native-vector-icons/FontAwesome';
 import Feather from 'react-native-vector-icons/Feather'
  import { useFonts } from 'expo-font';
  import Carousel from 'react-native-snap-carousel';
  import Pagination from 'react-native-snap-carousel';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import ProfileScreen from '../ProfileScreen/ProfileScreen';
import Signin from '../Signin/Signin';
import Register from '../Register/Register';
import ForgotPassword from '../ForgotPassword/ForgotPassword';
import PasswordUpdated from '../PasswordUpdated/PasswordUpdated'
import { Ionicons } from '@expo/vector-icons'
import {LinearGradient} from 'expo-linear-gradient'

function TrendScreen ({ navigation }){

    return(
                <Container style={{flex:1,backgroundColor:'#16293E'}}>
                    <ScrollView>
                    <View style={{flexDirection:'row',justifyContent:'space-between', marginBottom:20,alignItems:'center',}}>
                        <View style={{flexDirection:'column', display:'flex',}}>
                        <Title>DAY Trends</Title>
                        <SubTitle style={{marginBottom: -10, marginRight: 150}}>Home</SubTitle>
                        </View>
                    </View>

                        <View
                    style={{
                        flexDirection: 'row',
                        borderColor: '#7D4192',
                        borderWidth: 1,
                        borderRadius: 24,
                        paddingHorizontal: 10,
                        paddingVertical: 8,
                        marginTop: 60,
                        backgroundColor: '#373543',
                        alignItems:'center',
                    }}
                    >   
                        <Input placeholder="Search" placeholderTextColor="#fff"/>
                        <Feather name="search" size={20} color="#C6C6C6" style={{marginRight: 5}} />
                    </View> 

                <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 10}}>
                    <GoogleSubmit style={{flexDirection: 'row',}}>
                        <Image  
                        source={require('../../assets/Bitcoin.png')}
                        style={{width:35, height:35}}
                        />
                    </GoogleSubmit>

                    <FacebookSubmit style={{flexDirection: 'row'}}>
                        <Icon name="facebook" color="white" size={35}  />
                    </FacebookSubmit> 

                    <TwitterSubmit style={{flexDirection: 'row'}}>
                        <Icon name="twitter" color="white" size={35}  />
                    </TwitterSubmit> 
                    
                    <TikTokSubmit style={{flexDirection: 'row'}}>
                        <Icon name="tiktok" color="black" size={35} />
                    </TikTokSubmit> 

                    <YoutubeSubmit style={{flexDirection: 'row'}}>
                        <Icon name="youtube" color="white" size={35}  />
                    </YoutubeSubmit> 
                </View>
                       
                    </ScrollView>
                </Container>
    )
}

export default TrendScreen;
