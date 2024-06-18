import React, { useState, useEffect } from 'react';
import { Text, StyleSheet, Switch, Button, View, FlatList, ScrollView, TouchableOpacity, Alert, ActivityIndicator, Image, ImageBackground, Pressable, TextInput, Modal, Keyboard } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome6';
import IconMaterial from 'react-native-vector-icons/MaterialIcons';
import IconFontisto from 'react-native-vector-icons/Fontisto';


export default function OrdersScreen({ navigation }) {

  const [isEnabled, setIsEnabled] = useState(true);

  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const getTextLength = (text) => {
    const textWithoutDollar = text.slice(1);
    return textWithoutDollar.replace(/\./, "").length;
  };

  const text = "$512.64";
  const textLength = getTextLength(text);

  const handlePress = () => {
    navigation.navigate('OrderDetail');
  };


  const renderItem = ({ item }: { item: string }) => {
    let content;
    if (item === 'GT-05') {
      content = (
        <Pressable style={styles.pressableItem} onPress={() => setModalMenuVisible(true)} className="m-2  p-2 bg-[#FB814B] border-0.5 h-24 w-[102px] rounded-lg border-black/20" >
          <Text style={styles.pressableText} className="text-white">{item}</Text>
          <View className="flex flex-row justify-center items-center mt-3 bg-[#e16d3b] rounded-lg py-[0.5px] mx-3">
            <Pressable className='w-4 h-4 flex items-center justify-center '>
              <Icon name="clock" size={10} color="#FFFFFF" />
            </Pressable>
            <Text className="text-[10px] text-[#FFFFFF] font-bold">0 min</Text>
          </View>
          <View className="flex flex-row justify-center items-center mt-3 bg-[#e16d3b] rounded-lg py-[0.5px] mx-3">
            <Pressable className='w-4 h-4 flex items-center justify-center '>
              <Icon name="dollar" size={10} color="#FFFFFF" />
            </Pressable>
            <Text className="text-[10px] text-[#FFFFFF] font-bold">4215.26</Text>
          </View>
        </Pressable>
      );
    } else {
      content = (
        <Pressable style={styles.pressableItem} onPress={() => handlePress(item)} className="m-2  p-2 bg-white border-0.5 h-24 w-[102px] rounded-lg border-black/20">
          <Text style={styles.pressableText}>{item}</Text>
        </Pressable>
      );
    }
    return (
      <View>
        {content}
      </View>
    );
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

          <View className="w-full flex justify-center items-center flex-row space-x-2 mt-2">

            {/* TOTAL ORDERS */}
            <View className="w-1/2 bg-white max-h-32 min-h-32 rounded-lg flex flex-row justify-center items-center mt-3">
              <View className="w-full h-full flex justify-center p-2">
                <View className="justify-between flex flex-row items-center">
                  <View className="flex flex-row m-1 justify-center items-center space-x-4">
                    <Text className="text-gray-400 font-semibold text-xs">PIZ001</Text>
                  </View>
                  <View className="flex  flex-row justify-start items-center px-2 py-[2px]   m-1  text-white">
                    <Switch
                      trackColor={{ false: "#767577", true: "#3FDD78" }}
                      thumbColor={isEnabled ? "#FFFFFF" : "#FFFFFF"}
                      onValueChange={toggleSwitch}
                      value={isEnabled}
                    />
                  </View>
                </View>
                <View className="flex flex-row justify-start items-center  pb-1 space-x-1 px-1">
                  <Text className="text-xs font-semibold text-gray-400 mt-1"> Margherita Pizza </Text>
                </View>
                <View className="flex flex-row justify-end items-center  pb-1 space-x-1 px-1">
                  <Text className="text-xs font-semibold text-gray-400 mt-1"> $61.00 </Text>
                </View>
                <View className="absolute bottom-0 w-full rounded-t-lg flex justify-center items-center">
                  <View className="border-[3px] bottom-0 border-[#3FDD78] rounded-t-lg w-[50%]"></View>
                </View>
              </View>
            </View>
            <View className="w-1/2 bg-white max-h-32 min-h-32 rounded-lg flex flex-row justify-center items-center mt-3">
              <View className="w-full h-full flex justify-center p-2">
                <View className="justify-between flex flex-row items-center">
                  <View className="flex flex-row m-1 justify-center items-center space-x-4">
                    <Text className="text-gray-400 font-semibold text-xs">PIZ001</Text>
                  </View>
                  <View className="flex  flex-row justify-start items-center px-2 py-[2px]   m-1  text-white">
                    <Switch
                      trackColor={{ false: "#767577", true: "#3FDD78" }}
                      thumbColor={isEnabled ? "#FFFFFF" : "#FFFFFF"}
                      onValueChange={toggleSwitch}
                      value={isEnabled}
                    />
                  </View>
                </View>
                <View className="flex flex-row justify-start items-center  pb-1 space-x-1 px-1">
                  <Text className="text-xs font-semibold text-gray-400 mt-1"> Margherita Pizza </Text>
                </View>
                <View className="flex flex-row justify-end items-center  pb-1 space-x-1 px-1">
                  <Text className="text-xs font-semibold text-gray-400 mt-1"> $61.00 </Text>
                </View>
                <View className="absolute bottom-0 w-full rounded-t-lg flex justify-center items-center">
                  <View className="border-[3px] bottom-0 border-[#3FDD78] rounded-t-lg w-[50%]"></View>
                </View>
              </View>
            </View>
          </View>

          {/*  body section */}
        
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