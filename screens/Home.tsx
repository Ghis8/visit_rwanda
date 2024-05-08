import { View, Text, TouchableOpacity, useColorScheme, FlatList, Image, ImageBackground, Dimensions } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/Feather'
import { cities, citiesProps, mostPopularPlaces } from '../utils/constants'
import VisitCard from '../components/VisitCard'


const Home = (props:any) => {
    const theme=useColorScheme()
    const [place,setPlace]=useState<citiesProps>(cities[0])
    const screen_width=Dimensions.get('window').width
    const screen_height=Dimensions.get('window').height
  return (
    <View className={theme =='dark'?'bg-black flex-1 p-2':' flex-1 p-2 bg-white'}>
      <View className='flex-row justify-between items-center p-2'>
        <TouchableOpacity
            onPress={()=>props.navigation.navigate('Profile')}
        >
            <Image 
                source={require('../assets/elon.jpg')}
                className='w-8 h-8 rounded-full'
                resizeMode='contain'
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
      <View className='my-2'>
            <FlatList
                showsHorizontalScrollIndicator={false}
                className='mt-5 mx-3'
                horizontal
                data={cities}
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
                            {item.city}
                        </Text>
                    </TouchableOpacity>
                )}
            />
        </View>
        {
            cities && 
            <View className=''>
                <FlatList 
                    showsHorizontalScrollIndicator={false}
                    horizontal
                    data={place.places}
                    keyExtractor={(item,index)=>String(index)}
                    renderItem={({item})=>(
                        <VisitCard 
                            image={item.image}
                            height={screen_height*0.3}
                            column_width={screen_width*0.8}
                            title={item.name}
                        />
                    )}
                />
            </View>
            
        }
        <View className='my-2'>
            <View className='flex-row items-center justify-between'>
                <Text className='text-gray-400 font-semibold'>Most Popular Places</Text>
                <Text 
                    onPress={()=>{}}
                    className='text-orange-600 font-semibold capitalize'
                >
                    show all
                </Text>
            </View>
            <View className='mt-5'>
                <FlatList 
                    
                    showsVerticalScrollIndicator={false}
                    data={mostPopularPlaces}
                    keyExtractor={(item)=>item.name}
                    renderItem={({item})=>(
                        <View className='mb-5'>
                            <VisitCard 
                                image={item.image}
                                height={screen_height * 0.4}
                                column_width={screen_width*0.95}
                            />
                            <View className='px-2 flex-row items-center justify-between'>
                                <Text className={theme == 'dark'?
                                    'text-white font-semibold':
                                    'text-black font-semibold'
                                }>
                                    {item.name}
                                </Text>
                                <Icon
                                    name="arrow-right"
                                    color="gray"
                                    size={22} 
                                />
                            </View>
                        </View>
                        
                    )}
                />
            </View>
        </View>
    </View>
  )
}

export default Home