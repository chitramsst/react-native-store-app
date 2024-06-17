import React, { useState, useEffect } from 'react';
import { Text, StyleSheet, Button, View, FlatList, ScrollView, TouchableOpacity, Alert, ActivityIndicator, Image, ImageBackground, Pressable, TextInput, Modal, Keyboard } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome6';
import IconMaterial from 'react-native-vector-icons/MaterialIcons';


export default function DashboardScreen({ navigation }) {

    const getTextLength = (text) => {
        const textWithoutDollar = text.slice(1);
        return textWithoutDollar.replace(/\./, "").length;
    };

    const text = "$512.64";
    const textLength = getTextLength(text);


    const handlePress = (item: string) => {
        navigation.navigate('Items', { selectedItem: item });
    };

    return (

        <View className="w-full h-full">

            <View className="w-full h-full flex bg-black/7" style={styles.container}  >
                <View className=" p-5 w-full">
                    <View className="w-full flex flex-col justify-center items-center">
                        <Image source={require('../../assets/images/fyra-logo.png')} />
                    </View>

                    {/* TOTAL SALES SECTION */}
                    <View className="w-full bg-white max-h-28 min-h-28 rounded-lg flex flex-row justify-center items-center mt-7">
                        <View className="w-[50%]  h-full flex justify-center p-2 space-y-1">
                            <Text className="text-[13px] font-semibold text-gray-400 mt-2 ml-1"> Total Sales  </Text>
                            <View className="w-32">
                                <Text className={`text-start font-bold text-[#FB814B] ${textLength <= 5 ? "text-[21px]" : "text-[16px]" // Adjust font sizes as needed
                                    }`}>  {text}</Text>
                            </View>
                            <View className="flex  flex-row justify-start items-center  bg-gray-100 px-2 py-1 rounded-full max-w-[80%]">
                                <View className="justify-center">
                                    <Icon name="arrow-up" size={11} color="#3FDD78" />
                                </View>
                                <Text className="text-[13px] font-bold text-[#3FDD78]"> 37.8%</Text>
                                <Text className="text-[13px] font-bold text-gray-500"> this week </Text>
                            </View>
                        </View>
                        <View className="w-[50%] flex justify-items-end items-stretch">
                            <Image source={require('../../assets/images/DashboardIcon.png')} className="w-full h-full rounded-r-lg" />
                        </View>
                    </View>

                    {/* TOTAL EARNINGS */}


                    <View className="w-full flex justify-center items-center flex-row space-x-2 mt-2">
                        <View className="w-1/2 bg-white max-h-32 min-h-32 rounded-lg flex flex-row justify-center items-center mt-3">
                            <View className="w-full h-full flex justify-center p-2">
                                <View className="flex  flex-row justify-start items-center  bg-[#FB814B] rounded-full p-3  m-1 w-[40px] text-white">
                                <Image source={require('../../assets/images/lightning.png')} className="h-4 w-4" />
                             </View>
                                <Text className="text-[13px] font-bold text-gray-400 mt-2 ml-1"> Total Earnings </Text>
                                <View className="w-32">
                                    <Text className={`text-start font-bold text-gray-800 ${textLength <= 5 ? "text-[18px]" : "text-[16px]" // Adjust font sizes as needed
                                        }`}> $515.25</Text>
                                </View>
                            </View>
                        </View>

                        {/* TOTAL ORDERS */}
                        <View className="w-1/2 bg-white max-h-32 min-h-32 rounded-lg flex flex-row justify-center items-center mt-3">
                            <View className="w-full h-full flex justify-center p-2">
                                <View className="flex  flex-row justify-start items-center  bg-[#3FDD78] rounded-full p-3  m-1 w-[40px] text-white">
                                <Image source={require('../../assets/images/lightning.png')} className="h-4 w-4" />
                                </View>
                                <Text className="text-[13px] font-bold text-gray-400 mt-2 ml-1"> Total Orders  </Text>
                                <View className="w-32">
                                    <Text className={`text-start font-bold text-gray-800 ${textLength <= 5 ? "text-[18px]" : "text-[16px]" // Adjust font sizes as needed
                                        }`}>  35 </Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <Text className="text-sm font-bold text-gray-500 mt-3 mb-2"> Recent Orders </Text>
                    <ScrollView className="flex flex-col space-y-3 h-full">
                    <View className="w-full bg-white rounded-lg flex flex-col mt-1 p-2">
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
                                        <Text className="text-[#FB814B] text-xs font-bold italic">Preparing...</Text>
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
                    </View>

             
                   </ScrollView>
                </View>
            </View>
        </View>
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