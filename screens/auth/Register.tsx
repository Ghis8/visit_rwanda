import { View, Text, useColorScheme, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const Register = (props:any) => {
  const theme=useColorScheme()
  return (
    <View 
    className={
      theme=='dark'?'bg-black flex-1 px-3':'bg-white flex-1 px-3'
    }
    >
      <TouchableOpacity
        onPress={()=>props.navigation.goBack()}
        className='mt-5'
      >
        <Icon name="arrow-left" size={24} color='gray'/>
      </TouchableOpacity>
    </View>
  )
}

export default Register