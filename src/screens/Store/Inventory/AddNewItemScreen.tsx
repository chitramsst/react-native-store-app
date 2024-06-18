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


    return (

        <View className="w-full h-full">

            <View className="w-full h-full flex bg-black/7" style={styles.container}  >
                <View className=" p-3 w-full">
                    <View className="flex flex-row justify-center items-center w-full">
                        <View className="w-[30%] flex justify-start">
                            <Pressable className='w-6 h-6 rounded-full flex items-center justify-center' onPress={() => handlePress()}>
                                <Icon name="arrow-left" size={14} color="#6F767E" />
                            </Pressable>
                        </View>
                        <View className="w-[40%] flex flex-col justify-center items-center py-3">
                            <Text className="text-md font-black text-black"> Add New Item </Text>
                        </View>
                        <Pressable className="w-[30%] flex items-end justify-end pr-2">
                            <Text className="text-md font-black text-[#FB814B] text-end"> Done </Text>
                        </Pressable>

                    </View>

                    {/* search section */}
                    <View className='flex flex-row w-full justify-center items-center space-x-1 pl-2 pr-2' >

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


                    <View className="w-full mr-1 bg-white  rounded-lg flex flex-col  mt-3 p-2">

                        <View className="w-full flex justify-center p-2">
                            <Text className="text-gray-600 font-semibold text-xs">Food Name</Text>
                            <View className="justify-between flex flex-row items-center">
                                <View className="flex flex-row m-1 justify-start items-center space-x-4 w-[70%]">
                                    <TextInput className="text-left px-2 text-xs  text-neutral-700 bg-gray-100 rounded-lg w-full  h-8" placeholderTextColor="#aaa"
                                        placeholder="Enter Food Name" style={styles.input}></TextInput>
                                </View>
                                <View className="flex  flex-col justify-start items-center px-2 py-[2px]   m-1  text-white w-[30%]">
                                    <Text className="text-gray-400 font-semibold text-xs">Availability:</Text>
                                    <Switch
                                        trackColor={{ false: "#767577", true: "#3FDD78" }}
                                        thumbColor={isEnabled ? "#FFFFFF" : "#FFFFFF"}
                                        onValueChange={toggleSwitch}
                                        value={isEnabled}
                                    />
                                </View>
                            </View>
                        </View>

                        <View className="flex flex-row justify-center items-center w-full space-x-3 p-2">
                            <View className=" w-[50%] flex justify-center">
                                <Text className="text-gray-600 font-semibold text-xs">Price</Text>
                                <View className="justify-between flex flex-row items-center">
                                    <View className="flex flex-row justify-start items-center space-x-4 w-[100%] pt-1">
                                        <TextInput className="text-left px-2 text-xs  text-neutral-700 bg-gray-100 rounded-lg w-full  h-8" placeholderTextColor="#aaa"
                                            placeholder="Enter Price" style={styles.input}></TextInput>
                                    </View>
                                </View>
                            </View>

                            <View className=" w-[50%] flex justify-center">
                                <Text className="text-gray-600 font-semibold text-xs">Code</Text>
                                <View className="justify-between flex flex-row items-center">
                                    <View className="flex flex-row justify-start items-center space-x-4 w-[100%] pt-1">
                                        <TextInput className="text-left px-2 text-xs  text-neutral-700 bg-gray-100 rounded-lg w-full  h-8" placeholderTextColor="#aaa"
                                            placeholder="Enter Value" style={styles.input}></TextInput>
                                    </View>
                                </View>
                            </View>
                        </View>

                        <View className="w-full flex justify-center p-2">
                            <Text className="text-gray-600 font-semibold text-xs">Category</Text>
                            <View className="justify-between flex flex-row items-center">
                                <View className="flex flex-row m-1 justify-start items-center space-x-4 w-[70%]">
                                    <TextInput className="text-left px-2 text-xs  text-neutral-700 bg-gray-100 rounded-lg w-full  h-8" placeholderTextColor="#aaa"
                                        placeholder="Enter Food Name" style={styles.input}></TextInput>
                                </View>
                            </View>
                        </View>

                        <View className="w-full flex justify-center p-2">
                            <Text className="text-gray-600 font-semibold text-xs">Notes</Text>
                            <View className="justify-between flex flex-row items-center">
                                <View className="flex flex-row m-1 justify-start items-center space-x-4 w-full rounded-lg bg-gray-100">
                                    <TextInput className="h-32 text-left px-2  py-5 text-xs  text-neutral-700" placeholderTextColor="#aaa" multiline={true}
                                        numberOfLines={4}
                                        placeholder="Enter Note" style={styles.input}></TextInput>
                                </View>
                            </View>
                        </View>
                    </View>
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
    },
})