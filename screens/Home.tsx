import { View, Text, TouchableOpacity, useColorScheme, FlatList } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/Feather'
import { places, placesProps } from '../utils/constants'


const Home = () => {
    const theme=useColorScheme()
    const [place,setPlace]=useState<placesProps>(places[0])
  return (
    <View className={theme =='dark'?'bg-black flex-1':' flex-1 bg-white'}>
      <View className='flex-row justify-between items-center p-2'>
        <TouchableOpacity>
            <Icon 
                name='menu' 
                size={24} 
                color={theme=='light' ? 'black':'white'} 
            />
        </TouchableOpacity>
        <Text className={
            theme == 'dark'?
            'text-white font-semibold text-xl':
            'text-black font-semibold text-xl'
            }
        >
                Discover
        </Text>
        <TouchableOpacity>
            <Icon 
                name='search' 
                size={24} 
                color={theme=='light' ? 'black':'white'} 
            />
        </TouchableOpacity>
      </View>
      <FlatList
        showsHorizontalScrollIndicator={false}
        className='mt-5 mx-3'
        horizontal
        data={places}
        keyExtractor={(item)=>String(item.id)}
        renderItem={({item})=>(
            <TouchableOpacity
                onPress={()=>setPlace(item)} 
                className='flex-col items-center mr-8 mt-4'
            >
                {
                    place.id == item.id &&
                    <View className='absolute -top-2 w-2 h-2 rounded-full bg-orange-800'></View>
                }
                
                <Text className={item.id == place.id?
                    "text-orange-800 mt-1":
                    theme =='dark'?'text-white text-xs mt-1':
                    'text-black text-xs mt-1'
                }
                >
                    {item.name}
                </Text>
            </TouchableOpacity>
        )}
      />
      <View className=''>
            
      </View>
    </View>
  )
}

export default Home