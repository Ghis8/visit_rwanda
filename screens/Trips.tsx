import { View, Text, useColorScheme, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const Trips = (props:any) => {
  const theme=useColorScheme()
  return (
    <View className={theme == 'dark'?'bg-black flex-1':'bg-white flex-1'}>
      <View className='flex items-center justify-center'>
        <TouchableOpacity 
          onPress={()=>props.navigation.goBack()}
          className='absolute top-4 left-5'
        >
          <Icon name="arrow-left" size={24} color='gray'/>
        </TouchableOpacity>
        <Text className={theme=='dark'?'text-white font-semibold mt-3 text-xl':'text-black font-semibold mt-3 text-xl'}>{props.route.name}</Text>
      </View>
      <View className='mt-5 flex'>
        <Text className='text-gray-500 text-xl font-semibold text-center mt-10'>No Trip</Text>
      </View>
    </View>
  )
}

export default Trips