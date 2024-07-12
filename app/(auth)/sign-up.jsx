import { ScrollView, StyleSheet, Text, View, Image, Alert } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Link, router } from 'expo-router'

import { images } from '../../constants'

import FormField from '../../components/FormField'
import CustomButton from '../../components/CustomButton';

import { createUser } from '../../lib/appwrite'


const SignUp = () => {

  const [form, setForm] = useState({
    username: '',
    email: '',
    password: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const submit = async () => {
    if(form.username === "" || form.email === "" || form.password === ""){
      Alert.alert('Error', 'por favor preencha todos os campos')
    }

    setIsSubmitting(true);
    try{
      const result = await createUser(form.email, form.password, form.username);
      setUser(result);
      setIsLoggedIn(true);
    
      //configura-o para o estado global ...
      
      router.replace('/home')

    }catch(error){
      Alert.alert('Error', error.message) 
    } finally{
      setIsSubmitting(false)
    }
    //createUser();
  };

  return (
    <SafeAreaView className="bg-white h-full">
      <ScrollView>
        <View className="w-full justify-center min-h-[80vh] px-4 my-6">
          <Image
            source={images.logo2}
            resizeMode='contain'
            className="w-[210px] h-[55px] -ml-6"
          />
          <Text
            className="text-2xl text-primary texte-semibold mt-5 text-center font-psemibold"
            style={{
              letterSpacing: -1,
              color: '#000000',
              textShadowOffset: { width: 0, height: 4 },
              textShadowRadius: 4,
              textShadowColor: 'rgba(0, 0, 0, 0.25)',
            }}
          >
            Criar uma Conta na Wongo 
          </Text>

          <FormField
            title="Username"
            value={form.username}
            handleChangeText={(e) => setForm({ ...form, username: e })}
            otherStyles="mt-10"
         
          />

          <FormField
            title="Email"
            value={form.email}
            handleChangeText={(e) => setForm({ ...form, email: e })}
            otherStyles="mt-7"
            keyboardType="email-address"
          />

          <FormField
            title="Password"
            value={form.password}
            handleChangeText={(e) => setForm({ ...form, password: e })}
            otherStyles="mt-7"

          />

          <CustomButton
            title="Criar Conta"
            handlePress={submit}
            containerStyles="mt-7"
            isLoading={isSubmitting}
          />

          <View className="justify-center pt-5 flex-row gap-2">
            <Text className="text-lg text-black-100 font-pregular">
            já tem uma conta ?
            </Text>
            <Link href={"/sign-in"} className='text-lg font-psemibold' style={{color:'#BB63D0'}}>Fazer Login</Link>
          </View>

        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignUp

const styles = StyleSheet.create({})