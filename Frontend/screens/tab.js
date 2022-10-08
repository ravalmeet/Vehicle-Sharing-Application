import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./home_screen";
import HostcarScreen from "./hostcar_screen";
import ProfileScreen from "./profile_screen";
import SharecarScreen from "./sharecar_screen";
import Ionicons from '@expo/vector-icons/Ionicons';
import { EvilIcons, Feather, FontAwesome5, Fontisto } from '@expo/vector-icons';
import Ionic from 'react-native-vector-icons/Ionicons'
import rideLogo from '../images/ridePng.png'
import { Image, StyleSheet, View } from 'react-native'
import MaterialIcon from '@expo/vector-icons/MaterialCommunityIcons'



const Tab = createBottomTabNavigator();


const Tabs = () => {
  return (
    <Tab.Navigator screenOptions={({ route }) => ({
      headerShown: false,
      tabBarIcon: ({ focus, size, color }) => {
        let iconName;
        if (route.name === 'Home') {
          iconName = focus ? 'ios-home' : 'ios-home-outline'
        }
        else if (route.name === 'Host') {
          iconName = focus ? 'ios-car' : 'ios-car-outline'
        }
        else if (route.name === 'ride') {

          return (

            <MaterialIcon name='car-3-plus' size='25' color={color} />

          )

        }
        else if (route.name === 'profile') {
          iconName = focus ? 'ios-person' : 'ios-person'
        }

        return (
          <Ionic name={iconName} size={size} color={color} />


        )
      },
    })}>
      <Tab.Screen name='Home' component={HomeScreen} />
      <Tab.Screen name='Host' component={HostcarScreen} />
      <Tab.Screen name='ride' component={SharecarScreen} />
      <Tab.Screen name='profile' component={ProfileScreen} />
    </Tab.Navigator>
  )
}
const styles = StyleSheet.create({

  vCard: {
    width: 10,
    height: 10,
  }


})

export default Tabs