import React, { useState, useEffect } from 'react';
import { Text, StyleSheet, Button, View, FlatList, ScrollView, TouchableOpacity, Alert, ActivityIndicator, Image, ImageBackground, Pressable, TextInput, Modal, Keyboard } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome6';
import IconMaterial from 'react-native-vector-icons/MaterialIcons';
import IconFontisto from 'react-native-vector-icons/Fontisto';


export default function OrdersScreen({ navigation }) {

  const getTextLength = (text) => {
    const textWithoutDollar = text.slice(1);
    return textWithoutDollar.replace(/\./, "").length;
  };

  const text = "$512.64";
  const textLength = getTextLength(text);

  const handlePress = () => {
    navigation.navigate('OrderDetail');
  };

  return (

    <View className="w-full h-full">

      <View className="w-full h-full flex bg-black/7" style={styles.container}  >
        <View className=" p-5 w-full">
          <View className="w-full flex flex-col justify-center items-center py-3">
            <Text className="text-md font-black text-black"> Inventory </Text>
          </View>

          {/* search section */}

          <View className='flex flex-row w-full justify-center items-center space-x-1' >

            <View className='flex flex-row mt-3 items-center bg-white rounded-full mb-1 w-11/12 h-10' >
              <View className='flex items-start pl-3'>
                <Pressable className='w-6 h-6 rounded-full flex items-center justify-center '>
                  <IconFontisto name="search" size={14} color="#6F767E" />
                </Pressable>
              </View>
              <TextInput
                placeholder="Search Items"
                className="placeholder:text-xs"
                placeholderTextColor="#98A2B3"
              />
            </View>
            <View className='flex flex-row mt-3 items-center bg-white rounded-full mb-1'>
              <Image source={require('../../../assets/images/search-menu.png')} className='h-9 w-9' />
            </View>
          </View>
          {/* 
body section */}
          <ScrollView className="flex flex-col space-y-2">
            {/* PICKUP */}
            <Pressable onPress={() => handlePress()} className="w-full bg-white rounded-lg flex flex-col mt-1 p-2">
              <View className="w-full  justify-between flex flex-row items-center">
                <View className="flex flex-row m-1 justify-center items-center space-x-4">
                  <Text className="text-gray-400 font-semibold text-xs">#12345678</Text>
                  <View className="flex flex-row m-1 justify-center items-center bg-gray-200 rounded-full px-2">
                    <Image source={require('../../../assets/images/clock.png')} className="h-3 w-3" />
                    <Text className="text-xs font-semibold text-gray-400"> 10.30 am </Text>
                  </View>
                </View>
                <View className="flex  flex-row justify-start items-center  bg-[#FB814B] rounded-full px-2 py-[2px]   m-1  text-white">
                  <Text className="text-white text-[10px] font-semibold">Pick up</Text>
                </View>
              </View>
              <View className="flex flex-row justify-start items-center  pb-2 space-x-1 px-1">
                <View className="mt-2 flex justify-center items-center">
                  <IconMaterial name="person" size={17} color="#9CA3AF" />
                </View>
                <Text className="text-xs font-semibold text-gray-400 mt-1"> Akhila_aji_21 </Text>
              </View>

              {/* preparing */}
              <View className="px-1 py-2" >
                <View className="w-full bg-gray-100 rounded-lg  flex flex-col mt-1 p-2">
                  <View className="w-full  justify-between flex flex-row items-center">
                    <View className="flex flex-row m-1 justify-center items-center space-x-4">
                      <Text className="text-gray-400 font-bold">Items</Text>
                    </View>
                    <View className="flex  flex-row justify-start items-center  px-2   m-1  text-white">
                      <Text className="text-[#FB814B] text-xs   font-bold italic">Preparing...</Text>
                    </View>
                  </View>
                  <View className="flex flex-col  pb-2 space-y-1 px-1">
                    <Text className="text-[13px]  text-gray-500"> 6 x  <Text className="text-[#141718]">chicken alferdo </Text></Text>
                    <Text className="text-[13px]  text-gray-500"> 6 x  <Text className="text-[#141718]">chicken alferdo </Text></Text>
                    <Text className="text-[13px]  text-[#6F767E]"> 5 x  <Text className="text-[#141718]">Pepperoni Pizza <Text className="text-[#6F767E]">(Half ∙ Mushroom, Olives) </Text></Text></Text>
                  </View>
                </View>

              </View>

              {/* End section */}
              <View className="w-full  justify-between flex flex-row items-center">
                <View className="flex flex-row m-1 justify-center items-center bg-gray-200 rounded-full p-1">
                  <View className="bg-gray-500 rounded-full p-1 h-4 w-4 flex justify-center items-center">
                    <Icon name="info" size={8} color="#FFFF" />
                  </View>
                </View>
                <View className="flex flex-row m-1 justify-center items-center bg-gray-100 rounded-full px-2">
                  <View className="rounded-full p-1 h-5 w-5 flex justify-center items-center">
                    <Image source={require('../../../assets/images/dollar.png')} className="h-4 w-4" />
                  </View>
                  <Text className="text-[13px] font-semibold text-gray-400 "> 4512.56 </Text>
                </View>

              </View>
            </Pressable>
          </ScrollView>
        </View>
      </View>
      <View className='absolute bottom-10 right-10 bg-[#FB814B] w-10 h-10 rounded-full flex justify-center items-center '>
        <Icon name="plus" size={14} color="#FCFCFC" />
      </View>
    </View >
  );
}


const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    borderBottomStartRadius: 0,
    borderBottomEndRadius: 0,
  },
  scrollViewContent: {
    flexGrow: 1,
    height: '100%',
    width: '100%',
  },
  inputError: {
    borderColor: 'red',
    borderWidth: 1,
    // Adjust the error border color
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainerSuccess: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
})