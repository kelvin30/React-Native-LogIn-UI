import { View, Text, TextInput, Touchable, TouchableOpacity } from 'react-native'
import { Image } from 'react-native'
import { StatusBar } from 'react-native'
import React from 'react'
import Animated, { FadeIn, FadeInDown, FadeInUp, FadeOut } from 'react-native-reanimated';
import {useNavigation} from '@react-navigation/native';

export default function SignUpScreen() {
    const navigation = useNavigation();

  return (
    <View className='bg-white h-full w-full'>
      <StatusBar style='light' />
      <Image className='h-full w-full absolute' source={require('../assets/background.png')}/>
      {/* Lights */}
      <View className = 'flex-row justify-around w-full asolute'>
        <Animated.Image entering={FadeInUp.delay(200).duration(1000).springify().damping(3)} className= 'h-[255] w-[90]' source={require('../assets/light.png')}/>
        <Animated.Image entering={FadeInUp.delay(200).duration(1000).springify().damping(3)} className= 'h-[168] w-[65]' source={require('../assets/light.png')}/>
      </View>


{/* Title and Form */}
<View className='w-full flex justify-around  pb-15'>
        {/*Title */}
        <View className='flex items-center'>
            <Text className ='text-black font-bold tracking-wider text-5xl'>
                SignUp
            </Text>
        </View>
        {/*Form*/}
        <View className='flex items-center mx-4 space-y-4'>
        <Animated.View entering={FadeInDown.duration(1000).springify()} className='bg-black/5 p-5 rounded-2xl w-full'>
               <TextInput className='text-black' placeholder='Username' placeholderTextColor={'gray'} />
            </Animated.View>
            <Animated.View entering={FadeInDown.duration(1000).springify()} className='bg-black/5 p-5 rounded-2xl w-full'>
               <TextInput className='text-black' placeholder='Email' placeholderTextColor={'gray'} />
            </Animated.View>
            <Animated.View entering={FadeInDown.duration(200).springify()} className='bg-black/5 p-5 rounded-2xl w-full mb-3'>
               <TextInput className='text-black' placeholder='Password' placeholderTextColor={'gray'} secureTextEntry />
            </Animated.View>
            <Animated.View entering={FadeInDown.duration(400).springify()} className ='w-full'>
            <TouchableOpacity className='w-full bg-sky-400 p-3 rounded-2xl mb3'>
                    <Text className='text-xl font-bold text-white text-center'>
                        SignUp
                    </Text>
            </TouchableOpacity>
            </Animated.View>

            <View className='flex-row justiy-center'>
               <Text>Have an account?</Text>
               {/*On press navigates to SignUp Screen */}
               <TouchableOpacity onPress={()=> navigation.push('Login')}>
                <Text className='text-sky-600'> Login</Text>
               </TouchableOpacity>
            </View>
            
        </View>


      </View>

    </View>
  )
}