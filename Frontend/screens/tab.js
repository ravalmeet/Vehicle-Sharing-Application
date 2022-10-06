import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./home_screen";
import HostcarScreen from "./hostcar_screen";
import ProfileScreen from "./profile_screen";
import SharecarScreen from "./sharecar_screen";
import Ionicons from '@expo/vector-icons/Ionicons';
import { EvilIcons, Feather, FontAwesome5 } from '@expo/vector-icons';
import Ionic from 'react-native-vector-icons/Ionicons'


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
          iconName = focus ? 'ios-home' : 'ios-home-outline'
        }
        else if (route.name === 'profile') {
          iconName = focus ? 'ios-person' : 'ios-person'
        }
        return <Ionic name={iconName} size={size} color={color} />
      },
    })}>
      <Tab.Screen name='Home' component={HomeScreen} />
      <Tab.Screen name='Host' component={HostcarScreen} />
      <Tab.Screen name='ride' component={SharecarScreen} />
      <Tab.Screen name='profile' component={ProfileScreen} />
    </Tab.Navigator>
  )
}

export default Tabs