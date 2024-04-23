import { View, Text, ImageBackground, TouchableOpacity, useColorScheme } from 'react-native'
import React from 'react'
import Colors from '../utils/colors'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const GetStarted = (props:any) => {
    const theme=useColorScheme()
    // console.log('theme=>',theme)
  return (
    <ImageBackground 
        style={{width:'100%',height:'100%',opacity:0.9}}
        resizeMode='cover'
        source={require('../assets/water.jpg')}
    >
        <Text className='mt-20 opacity-50 uppercase font-extrabold text-gray-200 text-center text-4xl'>visit Rwanda</Text>
        <TouchableOpacity
            className='absolute top-4 right-5'

        >
            
        </TouchableOpacity>
        <View className='absolute flex-col bottom-16 left-5 w-3/4 blur-3xl'>
            <Text 
                className='text-gray-200 font-extrabold text-4xl'
            >
                The Most Beautiful Place in the world
            </Text>
            <Text className='text-gray-300 font-bold mt-2'>
                Plan your vacation on the most Beautiful places in 
                the world and enjoy every moment with us
            </Text>
            <TouchableOpacity 
                onPress={()=>props.navigation.navigate('Login')}
                className='bg-blue-700 w-2/4 py-3 mt-5 rounded-md'>
                <Text className='text-center font-semibold text-white opacity-100 uppercase'>Get Started</Text>
            </TouchableOpacity>
        </View>
    </ImageBackground>
  )
}

export default GetStarted

