import React, { useState, useEffect } from 'react';
import { Text, StyleSheet, Button, View, FlatList, Switch, ScrollView, TouchableOpacity, Alert, ActivityIndicator, Image, ImageBackground, Pressable, TextInput, Modal, Keyboard } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome6';
import IconMaterial from 'react-native-vector-icons/MaterialIcons';
import IconFontisto from 'react-native-vector-icons/Fontisto';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import ToggleSwitch from 'toggle-switch-react-native'


export default function MoreScreen({ navigation }) {

  const [isEnabled, setIsEnabled] = useState(true);

  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const getTextLength = (text) => {
    const textWithoutDollar = text.slice(1);
    return textWithoutDollar.replace(/\./, "").length;
  };

  const text = "$512.64";
  const textLength = getTextLength(text);

  const handlePress = () => {
    navigation.navigate('Inventory');
  };

  return (

    <View className="w-full h-full">
      <View className="w-full h-full flex bg-black/7" style={styles.container}  >
        <View className=" p-5 w-full">
          <View className="w-full flex flex-col justify-center items-center">
            <Image source={require('../../assets/images/fyra-logo.png')} />
          </View>
          <View className="w-full bg-white max-h-28 min-h-28 rounded-lg flex flex-row justify-center items-center mt-7">
            <View className="justify-between flex flex-row items-center w-full p-2">
              <View className="flex flex-row items-center justify-center">
                <View className="flex justify-center items-center">
                <Image source={require('../../assets/icons/moreIcon.png')} className="w-10 h-10 rounded-full" />
                </View>
                <View className="flex justify-center  ml-2 space-y-1">
                  <Text className="text-[13px] font-semibold text-gray-500"> Mataam-Al Rahath </Text>
                  <Text className="text-[13px] font-semibold text-gray-400"> RahathMataam@gmail.com </Text>
                </View>
              </View>
              <Switch
                trackColor={{ false: "#767577", true: "#FB814B" }}
                thumbColor={isEnabled ? "#FFFFFF" : "#FFFFFF"}
                onValueChange={toggleSwitch}
                value={isEnabled}
            />
            </View>
          </View>
      
          {/* 
body section */}
          <Text className="text-sm font-bold text-gray-500 mt-3 mb-2"> Recent Orders </Text>

          <View className="flex flex-col space-y-2">
            {/* PICKUP */}
            <Pressable className="w-full bg-white rounded-lg flex flex-col mt-1 p-2">
              <View className="w-full  justify-between flex flex-row items-center">
                <View className="flex flex-row m-1 justify-center items-center space-x-4">
                  <Text className="text-gray-400 font-semibold text-xs">#12345678</Text>
                  <View className="flex flex-row m-1 justify-center items-center bg-gray-200 rounded-full px-2">
                    <Image source={require('../../assets/images/clock.png')} className="h-3 w-3" />
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
                    <Text className="text-[12px]  text-gray-500"> 6 x  <Text className="text-[#141718]">chicken alferdo </Text></Text>
                    <Text className="text-[12px]  text-gray-500"> 6 x  <Text className="text-[#141718]">chicken alferdo </Text></Text>
                    <Text className="text-[12px]  text-[#6F767E]"> 5 x  <Text className="text-[#141718]">Pepperoni Pizza <Text className="text-[#6F767E]">(Half ∙ Mushroom, Olives) </Text></Text></Text>
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
                    <Image source={require('../../assets/images/dollar.png')} className="h-4 w-4" />

                  </View>
                  <Text className="text-[13px] font-semibold text-gray-400 "> 4512.56 </Text>
                </View>

              </View>
            </Pressable>
          </View>


          <Pressable onPress={() => handlePress()} className="w-full bg-white rounded-lg flex flex-col mt-3 p-1">
            <View className="w-full  justify-between flex flex-row items-center">
              <View className="flex flex-row justify-start items-center  pb-2 space-x-1 px-1">
                <View className="mt-2 flex justify-center items-center bg-[#FB814B]/50 rounded-full p-1">
                  <Image source={require('../../assets/images/icons/document.png')} className="h-3 w-3" />
                </View>
                <Text className="text-sm font-semibold text-gray-400 mt-1"> Inventory </Text>
              </View>
              <Pressable className="rounded-full text-neutral-700 h-6 w-6 flex justify-center items-center" onPress={() => setModalMenuVisible(false)}>
                <IconAntDesign name="right" size={12} />
              </Pressable>
            </View>
          </Pressable>

          <Pressable className="w-full bg-white rounded-lg flex flex-col mt-3 p-1">
            <View className="w-full  justify-between flex flex-row items-center">
              <View className="flex flex-row justify-start items-center  pb-2 space-x-1 px-1">
                <View className="mt-2 flex justify-center items-center bg-[#FB814B]/50 rounded-full p-1">
                  <Image source={require('../../assets/images/icons/filled.png')} className="h-3 w-3" />
                </View>
                <Text className="text-sm font-semibold text-gray-400 mt-1"> Logout </Text>
              </View>
              <Pressable className="rounded-full text-neutral-700 h-6 w-6 flex justify-center items-center" onPress={() => setModalMenuVisible(false)}>
                <IconAntDesign name="right" size={12} />
              </Pressable>
            </View>
          </Pressable>
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
  label: {
      fontSize: 18,
      marginBottom: 10,
  }
});
