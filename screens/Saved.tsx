import { View, Text, useColorScheme, TouchableOpacity, FlatList, Dimensions } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { places } from '../utils/constants'
import VisitCard from '../components/VisitCard'

const Saved = (props:any) => {
  const theme=useColorScheme()
  const numColumn=2
  const screen_width=Dimensions.get('window').width
  const screen_height=Dimensions.get('window').height
  const column_width=screen_width/numColumn
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
        numColumns={numColumn}
        className='mt-2'
        showsVerticalScrollIndicator={false}
        data={places}
        keyExtractor={(item)=>String(item.id)}
        renderItem={({item})=>(
          <VisitCard 
            image={item.images[0]}
            title={item.name}
            column_width={column_width}
            height={screen_height*0.3}
          />
        )}
      />
    </View>
  )
}

export default Saved