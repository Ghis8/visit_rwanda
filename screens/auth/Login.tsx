import { View, Text, useColorScheme, ScrollView, TouchableOpacity, TextInput, Platform } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { ValidateEmailAddress, ValidatePassword } from '../../utils/validation'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'
import Loader from '../../components/Loader'

const Login = (props:any) => {
  const theme=useColorScheme()
  const [email,setEmail]=useState<string>('')
  const [emailError,setEmailError]=useState<boolean>(false)
  const [passwordError,setPasswordError]=useState<boolean>(false)
  const [visible,setVisible]=useState<boolean>(true)
  const [error,setError]=useState<string[]>([])
  const [password,setPassword]=useState<string>('')
  const [isLoading,setIsLoading]=useState<boolean>(true)

  const signIn=()=>{
    setIsLoading(true)
    if(ValidateEmailAddress(email)){
      if(email== 'test@gmail.com'){
        setIsLoading(false)
        return props.navigation.navigate('Home',{screen:'explore'})
      }setError([...error,"invalid Credential"])
      
    }
    if(!ValidateEmailAddress(email)){
      setIsLoading(false)
      setEmailError(true)
      setError([...error,"Invalid Email Address"])
    }
    if(!ValidatePassword(password)){
      setIsLoading(false)
      setPasswordError(true)
      setError([...error,"Password must contain at least 6 characters"])
    }
    setEmailError(false)
    setPasswordError(false)
    setError([])

  }

  return (
    <KeyboardAwareScrollView 
      className={
        theme=='dark'?'bg-black flex-1 px-3':'bg-white flex-1 px-3'
      }
    >
      {
        isLoading && <Loader isLoading />
      }
      <TouchableOpacity
        onPress={()=>props.navigation.goBack()}
        className='mt-5'
      >
        <Icon name="arrow-left" size={24} color='gray'/>
      </TouchableOpacity>
      <Text className={theme=='dark'?'text-gray-400 opacity-20 text-3xl text-center font-bold ml-10 my-5':'text-gray-400 opacity-20 text-center text-3xl font-bold ml-10 mt-5'}>
        Visit Rwanda
      </Text>
      <Text className={theme=='dark'?'text-white text-3xl font-bold ml-10 mt-5':'text-black text-3xl font-bold ml-10 mt-5'}>
        Welcome !
      </Text>
      <Text className={theme=='dark'?'text-gray-400 text-xs font-semibold ml-10 mt-2':'text-gray-400 text-xs font-semibold ml-10 mt-2'}>
        Sign In to Continue
      </Text>
      <View className='my-10'>
        <TextInput 
          autoCapitalize='none'
          inputMode='email'
          className={emailError?'w-3/4 mb-5 py-3 text-red-600 px-2 border-b-[1px] border-red-500 ml-10':'w-3/4 mb-5 py-3 px-2 border-b-[1px] border-gray-500 ml-10'}
          placeholder='Email Address'
          placeholderTextColor='gray'
          onChangeText={(text)=>setEmail(text.trim())}
        />
        <View className='mb-5'>
          <TextInput
            autoCapitalize='none'
            secureTextEntry={visible} 
            className={passwordError?'w-3/4  py-3 text-red-600 px-2 border-b-[1px] border-red-500 ml-10':'w-3/4  py-3 px-2 border-b-[1px] border-gray-500 ml-10'}
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
          onPress={signIn}
          className='bg-blue-700 w-2/4 mx-auto py-3 mt-5 rounded-md'
        >
          <Text className='text-center font-semibold text-xl text-white opacity-100 uppercase'>Login</Text>
        </TouchableOpacity>
        <Text className='text-gray-400 underline text-center my-5'>Forgot Password ?</Text>

        <View className='flex-row items-center gap-2 justify-center my-3'>
          <View className='border border-b-gray-500 w-1/3'></View>
          <Text className='text-gray-400 font-semibold'>OR</Text>
          <View className='border border-b-gray-500 w-1/3'></View>
        </View>

        <View className={Platform.OS =='android'? 'flex-row items-center justify-around w-2/4 mx-auto my-5':'flex-row items-center justify-between w-2/4 mx-auto my-5'}>
          <TouchableOpacity>
            <Icon name="google" size={28} color="red" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name="facebook" size={28} color="blue" />
          </TouchableOpacity>
          {
            Platform.OS == 'android' ? '': 
            <TouchableOpacity>
              <Icon name="apple" size={28} color={theme=='dark'?'white':"black"} />
            </TouchableOpacity>
          }
        </View>
        
        <View className='flex-row items-center gap-2 justify-center mt-3'>
          <Text className='text-gray-400 font-semibold'>Don't have an account ?</Text>
          <Text onPress={()=>props.navigation.navigate("Register")} className='text-blue-700 underline font-bold'>Register</Text>
        </View>

        
      </View>
    </KeyboardAwareScrollView>
  )
}

export default Login