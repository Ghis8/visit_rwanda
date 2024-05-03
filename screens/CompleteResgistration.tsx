import { View, Text, useColorScheme, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const CompleteResgistration = () => {
    const theme=useColorScheme()
    const[firstName,setFirstName]=useState<string>('')
    const[lastName,setLastName]=useState<string>('')
    const[phone,setPhone]=useState<string>('')
    const[birth,setBirth]=useState<string>('')
    const [date, setDate] = useState(new Date())
  const [open, setOpen] = useState(false)

  const completeRegistration=()=>{

  }

  return (
    <KeyboardAwareScrollView className={theme=='dark'?'flex-1 bg-black p-2':'flex-1 bg-white p-2'}>
      <Text className={theme=='dark'?'text-white font-semibold text-center mt-5':'text-black font-semibold text-center mt-5'}>Complete your Resgistration</Text>
      <View className='mt-10'>
        <View className='w-44 h-44 flex items-center justify-center rounded-full mx-auto my-7 bg-blue-700'>
            <Text className='text-center text-gray-400 text-4xl font-bold'>GK</Text>
        </View>
      <TextInput 
          autoCapitalize='none'
          inputMode='text'
          className={'w-3/4 mb-5 py-3 px-2 border border-b-gray-500 ml-10'}
          placeholder='First Name'
          placeholderTextColor='gray'
          onChangeText={(text)=>setFirstName(text.trim())}
        />
        <TextInput 
          autoCapitalize='none'
          inputMode='text'
          className={'w-3/4 mb-5 py-3 px-2 border border-b-gray-500 ml-10'}
          placeholder='Last Name'
          placeholderTextColor='gray'
          onChangeText={(text)=>setLastName(text.trim())}
        />
        <TextInput 
          autoCapitalize='none'
          inputMode='text'
          className={'w-3/4 mb-5 py-3 px-2 border border-b-gray-500 ml-10'}
          placeholder='+2507865754'
          placeholderTextColor='gray'
          onChangeText={(text)=>setPhone(text.trim())}
        />
        <TouchableOpacity
          onPress={completeRegistration}
          className='bg-blue-700 w-2/4 mx-auto py-3 mt-5 rounded-md'
        >
          <Text className='text-center font-semibold text-xl text-white opacity-100 uppercase'>Complete</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAwareScrollView>
  )
}

export default CompleteResgistration