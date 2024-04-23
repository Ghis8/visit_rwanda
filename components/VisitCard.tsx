import { View, Text, TouchableOpacity, ImageBackground } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const VisitCard = (props:any) => {
  return (
        <ImageBackground
            style={{width:props.column_width,height:props.height,margin:6,padding:5,borderRadius:10}}
            source={props.image}
            resizeMode='cover'
        >
            <Icon name="heart" size={28} color="white" className='' />
            <Text className='text-orange-600 text-center  font-extrabold capitalize'>{props.title}</Text>
        </ImageBackground>
  )
}

export default VisitCard