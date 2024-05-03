import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import Login from '../screens/auth/Login'
import Register from '../screens/auth/Register'
import GetStarted from '../screens/GetStarted'
import Home from '../screens/Home'
import BottomStackNavigation from './BottomStackNavigation'
import CompleteResgistration from '../screens/CompleteResgistration'

const Stack=createNativeStackNavigator()
const StackNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown:false
        }}
        initialRouteName='getStarted'
      >
        <Stack.Screen name="getStarted" component={GetStarted} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Home" component={BottomStackNavigation} />
        <Stack.Screen name='completeRegistration' component={CompleteResgistration} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default StackNavigation