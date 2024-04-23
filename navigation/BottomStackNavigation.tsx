import { View, Text, useColorScheme } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../screens/Home'
import Trips from '../screens/Trips'
import Saved from '../screens/Saved'
import Profile from '../screens/Profile'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const BottomStackNavigation = () => {
    const theme=useColorScheme()
    const Tab=createBottomTabNavigator()
  return (
    <Tab.Navigator
        initialRouteName='explore'
        screenOptions={{
            headerShown:false,
            tabBarStyle:{
              backgroundColor:theme =='dark'?'black':"white",
              
            }
        }}
        
    >
        <Tab.Screen 
          name="Explore" 
          component={Home} 
          options={{
            tabBarLabel:(tabLabel)=>(
              <Text style={{color:tabLabel.focused?"rgb(154 52 18)":theme=='dark'?'gray':'black'}}>Home</Text>
            ),
            tabBarIcon:(tabIcon)=>(
              <Icon name='apple-safari' size={24} color={tabIcon.focused?'rgb(154 52 18)':theme=='dark'?'gray':'black'} />
            )
          }}
        />
        <Tab.Screen 
          name="Trips" 
          component={Trips}
          options={{
            tabBarLabel:(tabLabel)=>(
              <Text style={{color:tabLabel.focused?"rgb(154 52 18)":theme=='dark'?'gray':'black'}}>Trips</Text>
            ),
            tabBarIcon:(tabIcon)=>(
              <Icon name='briefcase-variant' size={24} color={tabIcon.focused?'rgb(154 52 18)':theme=='dark'?'gray':'black'} />
            )
          }}

        />
        <Tab.Screen 
          name="Saved" 
          component={Saved}
          options={{
            tabBarLabel:(tabLabel)=>(
              <Text style={{color:tabLabel.focused?"rgb(154 52 18)":theme=='dark'?'gray':'black'}}>Saved</Text>
            ),
            tabBarIcon:(tabIcon)=>(
              <Icon name='heart' size={24} color={tabIcon.focused?'rgb(154 52 18)':theme=='dark'?'gray':'black'} />
            )
          }}

        />
        <Tab.Screen 
          name="Profile" 
          component={Profile}
          options={{
            tabBarLabel:(tabLabel)=>(
              <Text style={{color:tabLabel.focused?"rgb(154 52 18)":theme=='dark'?'gray':'black'}}>Profile</Text>
            ),
            tabBarIcon:(tabIcon)=>(
              <Icon name='account-outline' size={24} color={tabIcon.focused?'rgb(154 52 18)':theme=='dark'?'gray':'black'} />
            )
          }} 
        />
    </Tab.Navigator>
  )
}

export default BottomStackNavigation