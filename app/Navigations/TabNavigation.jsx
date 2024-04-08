import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../Sceens/HomeSceens/HomeScreen';
import BookingScreen from '../Sceens/BookingScreens/BookingScreen';
import ProfileScreen from '../Sceens/ProfileScreens/ProfileScreen';
import Colors from '../Utils/Colors';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
   <Tab.Navigator screenOptions={{
        headerShown:false,
        tabBarActiveTintColor:Colors.PRIMARY
   }}>
    <Tab.Screen name='home' component={HomeScreen} 
        options={{
            tabBarLabel:({color}) =>(
                <Text style={{color:color,fontSize:15,marginTop:-7}}>
                    Home
                </Text>
            ),
            tabBarIcon:({color,size}) =>(
                <AntDesign name="home" size={24} color={color} />
            )
        }}
        
    />
    <Tab.Screen name='booking' component={BookingScreen}
        options={{
            tabBarLabel:({color}) =>(
                <Text style={{color:color,fontSize:15,marginTop:-7}}>
                    Booking
                </Text>
            ),
            tabBarIcon:({color,size}) =>(
                <FontAwesome name="bookmark-o" size={24} color={color} />
            )
    }}/>
    <Tab.Screen name='profile' component={ProfileScreen}
        options={{
            tabBarLabel:({color}) =>(
                <Text style={{color:color,fontSize:15,marginTop:-7}}>
                    Profile
                </Text>
            ),
            tabBarIcon:({color,size}) =>(
                <AntDesign name="user" size={24} color={color} />
            )
    }}/>

   </Tab.Navigator>
  )
}