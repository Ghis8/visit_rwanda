import { View, Text, useColorScheme, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const Profile = (props:any) => {
  const [edit,setEdit]=useState<boolean>(false)
  const theme=useColorScheme()

  return (
    <View className={theme == 'dark'?'bg-black flex-1':'bg-white flex-1'}>
      <View className='flex-row justify-between items-center mx-3 py-3'>
        <TouchableOpacity
          onPress={()=>props.navigation.goBack()}
        >
          <Icon name='arrow-left' size={28} color='gray' />
        </TouchableOpacity>
        <Text className={theme=='dark'?'text-white font-semibold text-2xl':'text-black font-semibold text-2xl'}>{props.route.name}</Text>
        <TouchableOpacity 
          onPress={()=>{}}
        >
          <Icon name='pencil' size={24} color='gray' />
        </TouchableOpacity>
      </View>
      <ScrollView showsVerticalScrollIndicator={false} className='mt-5'>
        <View className="">
          <Image
            className='w-40 h-40 rounded-full mx-auto mb-5' 
            source={require('../assets/elon.jpg')}
            resizeMode='cover'
          />
          <View className='flex-col items-center justify-center gap-2'>
            <Text className={theme=='dark'?'text-white text-2xl':'text-black text-2xl'}>Elon Musk</Text>
            <Text className={theme=='dark'?'text-gray-400 text-xs':'text-gray-400 text-xs'}>San Francisco</Text>
          </View>
        </View>
        <View className='mt-5 mx-5'>
          <View className='flex-row items-center justify-between pb-5 my-3 border-b-[1px] border-gray-400'>
            <Text className={theme=='dark'?'text-gray-400 capitalize':'text-gray-400 capitalize'}>username</Text>
            <Text className={theme=='dark'?'text-orange-800':'text-orange-800'}>Elon01</Text>
          </View>
          <View className='flex-row items-center justify-between pb-5 my-3 border-b-[1px] border-gray-400'>
            <Text className={theme=='dark'?'text-gray-400 capitalize':'text-gray-400 capitalize'}>email</Text>
            <Text className={theme=='dark'?'text-orange-800':'text-orange-800'}>elonmusk08@gmail.com</Text>
          </View>
          <View className='flex-row items-center justify-between pb-5 my-3 border-b-[1px] border-gray-400'>
            <Text className={theme=='dark'?'text-gray-400 capitalize':'text-gray-400 capitalize'}>phone</Text>
            <Text className={theme=='dark'?'text-orange-800':'text-orange-800'}>+1 (909)-781-635-17</Text>
          </View>
          <View className='flex-row items-center justify-between pb-5 my-3 border-b-[1px] border-gray-400'>
            <Text className={theme=='dark'?'text-gray-400 capitalize':'text-gray-400 capitalize'}>date of birth</Text>
            <Text className={theme=='dark'?'text-orange-800':'text-orange-800'}>27th March 1970</Text>
          </View>
          <View className='flex-row items-center justify-between pb-5 my-3 border-b-[1px] border-gray-400'>
            <Text className={theme=='dark'?'text-gray-400 capitalize':'text-gray-400 capitalize'}>address</Text>
            <Text className={theme=='dark'?'text-orange-800':'text-orange-800'}>San Francisco, street 907</Text>
          </View>
          <View className='flex-row items-center justify-between pb-5 my-3 border-b-[1px] border-gray-400'>
            <Text className={theme=='dark'?'text-gray-400 capitalize':'text-gray-400 capitalize'}>first name</Text>
            <Text className={theme=='dark'?'text-orange-800':'text-orange-800'}>Elon</Text>
          </View>
          <View className='flex-row items-center justify-between pb-5 my-3 border-b-[1px] border-gray-400'>
            <Text className={theme=='dark'?'text-gray-400 capitalize':'text-gray-400 capitalize'}>last name</Text>
            <Text className={theme=='dark'?'text-orange-800':'text-orange-800'}>Musk</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

export default Profile