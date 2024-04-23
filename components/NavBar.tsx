import { View, Text, TouchableOpacity, useColorScheme } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const NavBar = (props:any) => {
    const theme=useColorScheme()
  return (
    <View className={theme=='dark'?'bg-black py-3 px-2':'bg-white py-3 px-2'}>
      <TouchableOpacity 
        className='absolute top-3 right-3'
      >
        <Icon name="arrow-left" size={28} color={theme == 'dark'?'gray':'black' } />
      </TouchableOpacity>
      <Text className={theme=='dark'?'text-white font-semibold text-xl text-center':'text-black font-semibold text-xl text-center'}>{props.name}</Text>
    </View>
  )
}

export default NavBar