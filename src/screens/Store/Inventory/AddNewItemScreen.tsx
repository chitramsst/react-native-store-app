import React, { useState, useEffect } from 'react';
import { Text, StyleSheet, Switch, Button, View, FlatList, ScrollView, TouchableOpacity, Alert, ActivityIndicator, Image, ImageBackground, Pressable, TextInput, Modal, Keyboard } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome6';
import IconMaterial from 'react-native-vector-icons/MaterialIcons';
import IconFontisto from 'react-native-vector-icons/Fontisto';
import { Picker } from '@react-native-picker/picker';

export default function OrdersScreen({ navigation }) {

    const [isEnabled, setIsEnabled] = useState(true);
    const [selectedCategory, setSelectedCategory] = useState();

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

                        <View className="w-full flex justify-center p-2 mt-2">
                            <Text className="text-gray-600 font-semibold text-xs">Category</Text>
                            <View className="justify-between flex flex-row items-center mt-2">
                                <View className="flex flex-row  justify-start items-center space-x-4 w-full">
                                    <View className="w-full bg-gray-100 h-10 rounded-lg">
                                        <Picker
                                            selectedValue={selectedCategory}
                                            onValueChange={(itemValue, itemIndex) =>
                                                setSelectedCategory(itemValue)
                                            }>
                                            <Picker.Item label="Choose Category" value=""/>
                                            <Picker.Item label="item1" value="java" />
                                            <Picker.Item label="item2" value="js" />
                                        </Picker>
                                    </View>
                                </View>
                            </View>
                        </View>

                        <View className="w-full flex justify-center p-2 mt-2">
                            <Text className="text-gray-600 font-semibold text-xs">Dietary Preferences</Text>
                            <View className="justify-between flex flex-row items-center mt-2">
                                <View className="flex flex-row  justify-start items-center space-x-4 w-full">
                                    <View className="w-full bg-gray-100 h-10 rounded-lg">
                                        <Picker
                                            selectedValue={selectedCategory}
                                            onValueChange={(itemValue, itemIndex) =>
                                                setSelectedCategory(itemValue)
                                            }
                                            itemStyle={styles.pickerItem}
                                            >
                                            <Picker.Item label="Vegetarian" value="1" />
                                            <Picker.Item label="Non Vengetarian" value="2" />
                                        </Picker>
                                    </View>
                                </View>
                            </View>
                        </View>

                        <View className="w-full flex justify-center p-2 mt-2">
                            <Text className="text-gray-600 font-semibold text-xs">Notes</Text>
                            <View className="justify-between flex flex-row items-center mt-2">
                                <View className="flex flex-row justify-start items-center space-x-4 w-full rounded-lg bg-gray-100">
                                    <TextInput className="h-32 text-left px-2  py-5 text-xs  text-neutral-700" placeholderTextColor="#aaa" multiline={true}
                                        numberOfLines={4}
                                        placeholder="Additioal Details" style={styles.input}></TextInput>
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
    pickerItem: {
        fontSize: 5, // Customize the font size
        // You can add more styles here if needed
    },
})