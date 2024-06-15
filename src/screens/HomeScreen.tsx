import React, { useState, useEffect } from 'react';
import { Text, StyleSheet, Button, View, StatusBar, ScrollView, TouchableOpacity, Alert, ActivityIndicator, Image, ImageBackground, Pressable, TextInput, Modal, Keyboard } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';




interface HomeScreenProps {
  navigation: any
}


export default function HomeScreen({ navigation }: HomeScreenProps) {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorUsername, setErrorUsername] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);

    const handlePress = () => {
      navigation.navigate('SyncCode');
    };

  return (
    <SafeAreaView >
      <Pressable onPress={() => handlePress()}>
      <ImageBackground source={require('../assets/images/background.png')} >
        <View className="w-[100%] h-full justify-center items-center" >
            <Image source={require('../assets/images/splash-screen-logo1.png')} style={styles.logo} />
        </View>
      </ImageBackground>
      </Pressable>
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
    logo: {
        height: 110,
        width: '70%',
        resizeMode: 'contain',
      },
  })