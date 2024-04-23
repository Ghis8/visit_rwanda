import { View, Text, useColorScheme } from 'react-native'
import React from 'react'
import NavBar from '../components/NavBar'

const Profile = (props:any) => {
  const theme=useColorScheme()
  // console.log(props.route)
  return (
    <View className={theme == 'dark'?'bg-black flex-1':'bg-white flex-1'}>
      <NavBar name={props.route.name}/>
    </View>
  )
}

export default Profile