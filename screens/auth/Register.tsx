import { View, Text, useColorScheme, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const Register = (props:any) => {
  const theme=useColorScheme()
  const [email,setEmail]=useState<string>('')
  const [emailError,setEmailError]=useState<boolean>(false)
  const [passwordError,setPasswordError]=useState<boolean>(false)
  const [visible,setVisible]=useState<boolean>(true)
  const [error,setError]=useState<string[]>([])
  const [password,setPassword]=useState<string>('')
  const [confirmPassword,setConfirmPassword]=useState<string>('')
  const [confirmPasswordError,setConfirmPasswordError]=useState<boolean>(false)
  const signUp=()=>{
    
  }
  return (
    <KeyboardAwareScrollView 
    className={
      theme=='dark'?'bg-black flex-1 px-3':'bg-white flex-1 px-3'
    }
    >
      <TouchableOpacity
        onPress={()=>props.navigation.goBack()}
        className='mt-5'
      >
        <Icon name="arrow-left" size={24} color='gray'/>
      </TouchableOpacity>
      <Text className={theme=='dark'?'text-gray-400 opacity-20 text-3xl text-center font-bold ml-10 my-2':'text-gray-400 opacity-20 text-center text-3xl font-bold ml-10 mt-5'}>
        Visit Rwanda
      </Text>
      <Text className={theme=='dark'?'text-white text-3xl font-bold ml-10 mt-5':'text-black text-3xl font-bold ml-10 mt-5'}>
        Welcome to Visit Rwanda APP
      </Text>
      <Text className={theme=='dark'?'text-gray-400 text-xs font-semibold ml-10 mt-2':'text-gray-400 text-xs font-semibold ml-10 mt-2'}>
        Sign Up to Join Us
      </Text>
      <View className='my-10'>
        <TextInput 
          autoCapitalize='none'
          inputMode='email'
          className={emailError?'w-3/4 mb-5 py-3 text-red-600 px-2 border border-b-red-500 ml-10':'w-3/4 mb-5 py-3 px-2 border border-b-gray-500 ml-10'}
          placeholder='Email Address'
          placeholderTextColor='gray'
          onChangeText={(text)=>setEmail(text.trim())}
        />
        <View className='mb-5'>
          <TextInput
            autoCapitalize='none'
            secureTextEntry={visible} 
            className={passwordError?'w-3/4  py-3 text-red-600 px-2 border border-b-red-500 ml-10':'w-3/4  py-3 px-2 border border-b-gray-500 ml-10'}
            placeholder='Password'
            placeholderTextColor='gray'
            onChangeText={(text)=>setPassword(text.trim())}
          />
          {
            visible ?
            <TouchableOpacity
              onPress={()=>setVisible(false)} 
              className='absolute right-[18%] top-[30%]'>
              <Icon name="eye" size={22} color='gray' />
            </TouchableOpacity>:
            <TouchableOpacity 
              onPress={()=>setVisible(true)}
              className='absolute right-[18%] top-[30%]'>
            <Icon name="eye-off" size={22} color='gray' />
          </TouchableOpacity>
          }
        </View>
        <TextInput
            autoCapitalize='none'
            secureTextEntry={visible} 
            className={confirmPasswordError?'w-3/4  py-3 text-red-600 px-2 border border-b-red-500 ml-10':'w-3/4  py-3 px-2 border border-b-gray-500 ml-10'}
            placeholder='Confirm Password'
            placeholderTextColor='gray'
            onChangeText={(text)=>setConfirmPassword(text.trim())}
          />
        {
          error.length > 0 &&
          <View className='flex-col gap-1 justify-center w-4/5 mx-auto'>
            {
              error.map((err,index)=>(
                <Text key={index} className='text-red-600 text-xs'>*{err}</Text>
              ))
            }
          </View>
        }
        <TouchableOpacity
          onPress={signUp}
          className='bg-blue-700 w-2/4 mx-auto py-3 mt-5 rounded-md'
        >
          <Text className='text-center font-semibold text-xl text-white opacity-100 uppercase'>Register</Text>
        </TouchableOpacity>

        <View className='flex-row items-center gap-2 justify-center my-3'>
          <View className='border border-b-gray-500 w-1/3'></View>
          <Text className='text-gray-400 font-semibold'>OR</Text>
          <View className='border border-b-gray-500 w-1/3'></View>
        </View>

        <View className='flex-row items-center justify-between w-2/4 mx-auto my-5'>
          <TouchableOpacity>
            <Icon name="google" size={28} color="red" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name="facebook" size={28} color="blue" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name="apple" size={28} color={theme=='dark'?'white':"black"} />
          </TouchableOpacity>
        </View>
        
        <View className='flex-row items-center gap-2 justify-center mt-3'>
          <Text className='text-gray-400 font-semibold'>Already have an account ?</Text>
          <Text onPress={()=>props.navigation.navigate("Login")} className='text-blue-700 underline font-bold'>Login</Text>
        </View>

        
      </View>
    </KeyboardAwareScrollView>
  )
}

export default Register