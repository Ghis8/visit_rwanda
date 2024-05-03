import { View, Text, TouchableOpacity, ImageBackground } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const VisitCard = (props:any) => {
  return (
      <View >
        <ImageBackground
           style={{width:props.column_width,height:props.height,margin:6,padding:5,borderRadius:20}}
            source={props.image}
            resizeMode='cover'
        >

            {props.favorite ?
              <Icon  name="heart" size={28} color="white" className=''/>:
              <Icon onPress={props.setPlace} name="heart-outline" size={28} color="white" className=''/>
            }
            {
              props.title &&
              <View className='absolute top-24'>
                <Text className='text-blue-600 text-center font-extrabold capitalize'>{props.title}</Text>
              </View>
            }
        </ImageBackground>
      </View>
        
  )
}

export default VisitCard