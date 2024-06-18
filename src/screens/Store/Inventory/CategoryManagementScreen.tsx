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
    navigation.navigate('Dashboard');
  };

  const data = [
    { id: 1, title: 'Item 1' },
    { id: 2, title: 'Item 2' },
    { id: 3, title: 'Item 3' },
    { id: 4, title: 'Item 4' },
    { id: 5, title: 'Item 5' },
    { id: 6, title: 'Item 6' }, // Add more items if needed for 5 rows
    { id: 7, title: 'Item 3' },
    { id: 8, title: 'Item 4' },
   
  ];

  const renderItem = ({ item }) => (
    <View className="w-[48%] mr-1 bg-white max-h-32 min-h-32 rounded-lg flex flex-row justify-center items-center mt-3">
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
  );


  return (

    <View className="w-full h-full">

      <View className="w-full h-full flex bg-black/7" style={styles.container}  >
        <View className=" p-5 w-full">
          <View className="flex flex-row justify-center items-center">
        <Pressable className='w-6 h-6 rounded-full flex items-center justify-center ' onPress={() => handlePress()}>
                            <Icon name="arrow-left" size={14} color="#6F767E" />
                        </Pressable>
          <View className="w-full flex flex-col justify-center items-center py-3">
            <Text className="text-md font-black text-black"> Inventory </Text>
          </View>
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
          {/*  body section */}
          <FlatList
            data={data}
            renderItem={renderItem}
            horizontal = {false}
            numColumns={2} // Set number of columns to 2
            keyExtractor={item => item.id} // Extract unique key for each item
              className="w-full p-1  h-[80%]"
          />
        </View>
      </View>
      <View className='absolute bottom-2 right-5 bg-[#FB814B] w-10 h-10 rounded-full flex justify-center items-center '>
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