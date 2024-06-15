import React, { useState, useEffect } from 'react';
import { Text, StyleSheet, Button, View, StatusBar, ScrollView, TouchableOpacity, Alert, ActivityIndicator, Image, ImageBackground, Pressable, TextInput, Modal, Keyboard } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';




interface HomeScreenProps {
  navigation: any
}


export default function LoginScreen({ navigation }: HomeScreenProps) {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorUsername, setErrorUsername] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);

  const handlePress = () => {
    navigation.navigate('');
  };

  return (
    <SafeAreaView >
      <ImageBackground source={require('../../assets/images/background.png')}>
        <View className="w-full h-full flex justify-center items-center" style={styles.container} >
          <View className=" p-7 w-[90%] flex flex-col justify-center items-center">
            <Image source={require('../../assets/images/login-logo.png')} className="h-14 w-14" />
            <Text className="text-[#1A1D1F] my-3 mb-5  text-2xl font-semibold">What's your Login Details?</Text>
            <View className="border-[#EAECF0] border-t" />
                <View className="flex flex-row mt-1 bg-[#F9FAFB] px-3 py-2 rounded-lg items-center" style={[errorUsername && styles.inputError]}>
                  <TextInput value={username}
                    onChangeText={(text) => { setUsername(text); setErrorUsername(false) }} className="p-0 w-full pl-3 " placeholder='Your email' placeholderTextColor={'#98A6B3'} />
                </View>
                <View>
                  <Text className='text-red-500' >{errorUsername}</Text>
                </View>
                <View className="flex flex-row bg-[#F9FAFB] px-3 py-2 rounded-lg items-center" style={[errorPassword && styles.inputError]}>
                  <TextInput secureTextEntry
                    value={password}
                    onChangeText={(text) => { setPassword(text);; setErrorPassword(false) }} className="p-0 w-full pl-3" placeholder='Password' placeholderTextColor={'#98A2B3'} />
                </View>
                <Pressable className='mt-4 flex justify-center w-full flex-row'  onPress={() => handlePress()}>
                  <View className='bg-[#FFBC99] py-3 w-full rounded-lg'><Text className='text-white text-center font-bold text-sm'>Login</Text></View>
                </Pressable>
          </View>
        </View>
      </ImageBackground>
     
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    borderBottomStartRadius: 0,
    borderBottomEndRadius: 0,
  },
  inputError: {
    borderColor: 'red',
    borderWidth: 1,
    // Adjust the error border color
  }
})