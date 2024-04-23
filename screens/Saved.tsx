import { View, Text, useColorScheme, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { places } from '../utils/constants'

const Saved = (props:any) => {
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
      <FlatList 
        className='mt-2'
        showsVerticalScrollIndicator={false}
        data={places}
        keyExtractor={(item)=>String(item.id)}
        renderItem={({item})=>(
          <TouchableOpacity
            className='flex-col gap-2 pb-2 mx-3  my-2 rounded-md border border-b-gray-500'
            onPress={()=>{}}
          >
            <Text className={theme=='dark'?"text-gray-200 font-semibold capitalize text-xl":"text-black font-semibold capitalize text-xl"}>{item.name}</Text>
            <Text className={theme =='dark'?"text-gray-100 font-thin capitalize text-xs":"text-black font-thin capitalize text-xs"}>{item.description[0].split(',')[0]}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  )
}

export default Saved