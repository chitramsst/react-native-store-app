import React, { useState, useEffect } from 'react';
import { Text, StyleSheet, Switch, Button, View, FlatList, ScrollView, TouchableOpacity, Alert, ActivityIndicator, Image, ImageBackground, Pressable, TextInput, Modal, Keyboard } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default function OrdersScreen({ navigation }) {

  const [isEnabled, setIsEnabled] = useState(true);

  const pressableContents = Array.from({ length: 15 }, (_, index) => `GT-0${index + 1}`);
  const getTextLength = (text) => {
    const textWithoutDollar = text.slice(1);
    return textWithoutDollar.replace(/\./, "").length;
  };

  const text = "$512.64";
  const textLength = getTextLength(text);

  const handlePress = () => {
    navigation.navigate('Inventory');
  };

  const renderItem = ({ item }: { item: string }) => (
    <Pressable style={styles.pressableItem} className="m-2  p-3 bg-white border-0.5  rounded-lg border-black/20">
      <View className="flex flex-row justify-between items-stretch">
        <View>
          <Text className="text-xs font-bold text-[#141718]">Desserts</Text>
          <Text className="text-[10px]  text-gray-400">150 items</Text>
        </View>
        <View className="flex flex-row justify-between items-stretch space-x-2">
          <View className="flex flex-row justify-between items-stretch space-x-2">
            <Pressable className="rounded-full h-6 w-6 bg-neutral-100 flex justify-center items-center mt-2">
              <IconMaterialIcons name="mode-edit" size={12} color="#525252" />
            </Pressable>
          </View>

          <View className="flex flex-row justify-between items-stretch space-x-2">
            <Pressable className="rounded-full h-6 w-6 bg-neutral-100 flex justify-center items-center mt-2" onPress={() => setModalVisible(true)}>
              <IconAntDesign name="delete" size={12} color="#525252" />
            </Pressable>
          </View>
        </View>
      </View>

    </Pressable>
  );

  return (

    <View className="w-full h-full">

      <View className="w-full h-full flex bg-black/7" style={styles.container}  >
        <View className=" p-3 w-full">
          <View className="flex flex-row justify-center items-center w-full">
            <View className="w-[20%] flex justify-center items-start px-2">
              <Pressable className='w-6 h-6 rounded-full flex items-center justify-center' onPress={() => handlePress()}>
                <Icon name="arrow-left" size={14} color="#6F767E" />
              </Pressable>
            </View>
            <View className="w-[60%] flex flex-col justify-center items-center py-3">
              <Text className="text-md font-black text-black"> Category Management </Text>
            </View>
            <Pressable className="w-[20%] flex items-end justify-end pr-2">
              <Text className="text-md font-black text-[#FB814B] text-end"> Done </Text>
            </Pressable>

          </View>

        {/*  body section */}


        <View className="w-[96%] bg-white  rounded-lg  flex-col mt-3 py-5 m-2 flex justify-center items-center">

          <View className="w-full flex justify-center p-4 ">
            <Text className="text-gray-600 font-semibold text-xs">Add Category</Text>
            <View className="justify-between flex flex-row items-center">
              <View className="flex flex-row mt-2 justify-start items-center space-x-4 w-[78%]">
                <TextInput className="text-left px-2 text-xs  text-neutral-700 bg-gray-100 rounded-lg w-full  h-8" placeholderTextColor="#aaa"
                  placeholder="Enter Category Name" style={styles.input}></TextInput>
              </View>
              <View className="flex  flex-col justify-start items-center rounded-lg py-1 text-white px-4  bg-[#FB814B]">
                <Text className="text-white font-semibold text-xs">Add</Text>
              </View>
            </View>
          </View>
        </View>
        <Text className="text-gray-700 font-bold text-xs p-3">Category List</Text>
        <FlatList
          data={pressableContents}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()} // Use index as the key
          horizontal={false} // Set to true if you want horizontal scrolling
          className="w-full"
        />
        </View>

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
  input: {
    textAlignVertical: 'top',
  }
})