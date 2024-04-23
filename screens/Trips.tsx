import { View, Text, useColorScheme } from 'react-native'
import React from 'react'

const Trips = () => {
  const theme=useColorScheme()
  return (
    <View className={theme == 'dark'?'bg-black flex-1':'bg-white flex-1'}>
      <Text className={theme=='dark'?"text-white":"text-black"}>Trips</Text>
    </View>
  )
}

export default Trips