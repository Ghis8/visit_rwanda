import { View, Text, Platform } from 'react-native'
import React from 'react'
import MapView,{Marker} from 'react-native-maps'

const Maps = () => {
  return (
    <MapView 
        mapType={Platform.OS == "android" ? "none" : "standard"}
    />
  )
}

export default Maps