import React, { useState, useEffect } from 'react';
import { Text, StyleSheet, Button, View, FlatList, ScrollView, TouchableOpacity, Alert, ActivityIndicator, Image, ImageBackground, Pressable, TextInput, Modal, Keyboard } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome6';
import IconMaterial from 'react-native-vector-icons/MaterialIcons';
import IconFontisto from 'react-native-vector-icons/Fontisto';
import IconSimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';



export default function OrderDetailScreen({ navigation }) {

    const getTextLength = (text) => {
        const textWithoutDollar = text.slice(1);
        return textWithoutDollar.replace(/\./, "").length;
    };

    const [modalVisible, setModalVisible] = useState(false);

    const text = "$512.64";
    const textLength = getTextLength(text);


    const handlePress = (item: string) => {
        navigation.navigate('OrderCompleted');
    };

    const handleBack = () => {
        navigation.goBack(); // Navigate back
    };

    return (

        <View className="w-full h-full">
            {/* Payment verification query Modal */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(false);
                }}
            >
                <View style={styles.modalContainer} >
                    <View className="bg-[#fff] p-4 rounded-lg w-72">
                        <View className="flex justify-between flex-row-reverse">
                            <Pressable className="rounded-full text-neutral-700 h-6 w-6 bg-neutral-100 flex justify-center items-center" onPress={() => setModalVisible(false)}>
                                <IconAntDesign name="close" size={10} />
                            </Pressable>
                            <Text className="text-xs font-bold mb-3 text-neutral-700"> The Payment is Incomplete</Text>
                        </View>
                        <View className="w-full flex justify-center items-center">
                            <Image source={require('../../../assets/images/payment-transaction.png')} />
                        </View>
                        <Text className="text-xs font-bold mb-3 text-gray-400 w-full text-center">Please verify and complete the payment.</Text>
                        <View className="h-[0.5px] w-full mx-1 bg-neutral-300 my-3"></View>
                        <View className="flex justify-end items-center flex-row space-x-5">
                            <Pressable className="rounded-lg border border-neutral-300 px-3 py-1 inset-0 text-neutral-700" onPress={() => setModalVisible(false)}>
                                <Text className="text-[10px] font-bold text-neutral-700"> Cancel </Text>
                            </Pressable>
                            <Pressable className="rounded-lg bg-[#FB814B] text-[#FCFCFC] px-3 py-1" onPress={() => handlePress()}>
                                <Text className="text-[10px] text-white font-bold"> Verify </Text>
                            </Pressable>
                        </View>
                    </View>
                </View>
            </Modal>


            <ScrollView className="w-full h-full flex bg-black/7" style={styles.container}  >
                <View className=" p-5 w-full">
                    {/* title section */}
                    <View className="flex flex-row justify-between my-5 p-2 w-full">
                        <Pressable className='w-6 h-6 rounded-full flex items-center justify-center ' onPress={() => handleBack()}>
                            <Icon name="arrow-left" size={14} color="#6F767E" />
                        </Pressable>
                        <Text className="text-[#6F767E] text-md font-extrabold"> #12345678 </Text>
                        <View className="flex flex-row m-1 justify-center items-center bg-gray-200 rounded-full px-2">
                        <Image source={require('../../../assets/images/clock.png')} className="h-3 w-3" />
                            <Text className="text-[13px] font-semibold text-gray-400"> 10.30 am </Text>
                        </View>
                    </View>
                    {/* body section */}
                    <View className="flex flex-col space-y-2">
                        <View className="w-full bg-white rounded-lg flex flex-col mt-1 p-2">
                            <View className="w-full  justify-between flex flex-row items-center">
                                <View className="flex flex-row justify-start items-center  pb-2 space-x-1 px-1">
                                    <View className="mt-2 flex justify-center items-center">
                                        <IconMaterial name="person" size={17} color="#9CA3AF" />
                                    </View>
                                    <Text className="text-sm font-semibold text-gray-400 mt-1"> Akhila_aji_21 </Text>
                                </View>
                                <Text className="text-sm font-semibold text-gray-400 mt-1"> 123 Main st, City</Text>

                            </View>


                            {/* preparing */}
                            <View className="px-1 py-2" >
                                <View className="w-full bg-gray-100 rounded-lg  flex flex-col mt-1 p-2">
                                    <View className="w-full  justify-between flex flex-row items-center py-2">
                                        <View className="flex flex-row m-1 justify-center items-center space-x-4">
                                            <Text className="text-gray-400 font-semibold text-xs">Items</Text>
                                        </View>
                                        <View className="flex  flex-row justify-start items-center  px-2   m-1  text-white">
                                            <Text className="text-[#FB814B] text-xs font-semibold italic">Preparing...</Text>
                                        </View>
                                    </View>
                                    <View className="flex flex-col  pb-2 space-y-3 px-1 w-full">
                                        <View className="flex flex-row justify-between items-center">
                                            <Text className="text-[12px]  text-gray-500"> 6 x  <Text className="text-[#141718]">Chicken Alferdo </Text></Text>
                                            <Text className="text-[12px]  text-gray-700"> $500.25</Text>
                                        </View>

                                        <View className="flex flex-row justify-between items-center">
                                            <Text className="text-[12px]  text-gray-500"> 2 x  <Text className="text-[#141718]">Spagati </Text></Text>
                                            <Text className="text-[12px]  text-gray-700"> $500.00</Text>
                                        </View>

                                        <View className="flex flex-row justify-between items-center">
                                            <Text className="text-[12px]  text-gray-500"> 6 x  <Text className="text-[#141718]">Pepperoni Pizza <Text className="text-[#6F767E]">(Half ∙ Mushroom, Olives) </Text></Text></Text>
                                            <Text className="text-[12px]  text-gray-700"> $500.00</Text>
                                        </View>

                                        <View className="flex flex-row justify-between items-center">
                                            <Text className="text-[12px]  text-gray-500"> 6 x  <Text className="text-[#141718]">Chicken Alferdo </Text></Text>
                                            <Text className="text-[12px]  text-gray-700"> $500.00</Text>
                                        </View>

                                    </View>
                                </View>
                                <View className=" bg-[#FB814B] flex  flex-row justify-start items-center  px-2 py-2  my-2 rounded-lg">
                                    <Text className="text-white text-xs font-bold"> Notes: <Text className="italic">"No onions on burgers"</Text></Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    {/* billing section */}
                    <View className="flex flex-col space-y-2 mt-2">
                        <View className="w-full bg-white rounded-lg flex flex-col mt-1 p-2">
                            <View className="w-full  justify-between flex flex-row items-center">
                                <View className="flex flex-col  pb-2 space-y-3 p-1 w-full">
                                    <View className="flex flex-row justify-between items-center">
                                        <Text className="text-[12px]  text-gray-400"> Item Total: </Text>
                                        <Text className="text-[12px]  text-gray-700"> $451.25</Text>
                                    </View>

                                    <View className="flex flex-row justify-between items-center">
                                        <Text className="text-[12px]  text-[#FB814B]"> Coupon Discount: </Text>
                                        <Text className="text-[12px]  text-[#FB814B]"> $451.25</Text>
                                    </View>

                                    <View className="flex flex-row justify-between items-center">
                                        <Text className="text-[12px]  text-gray-400"> Delivery Charge: </Text>
                                        <Text className="text-[12px]  text-[#FB814B]"> Free </Text>
                                    </View>

                                    <View className="flex flex-row justify-between items-center border-b-[0.5px] pb-4 border-gray-400">
                                        <Text className="text-[12px]  text-gray-400"> Taxes & Charges: </Text>
                                        <Text className="text-[12px]  text-gray-700"> $451.25</Text>
                                    </View>

                                    <View className="flex flex-row justify-between items-center">
                                        <Text className="text-[12px]  text-gray-800 font-semibold"> Grand Total: </Text>
                                        <Text className="text-[12px]  text-[#FB814B] font-semibold"> $15000.00 </Text>
                                    </View>

                                </View>
                            </View>


                        </View>
                    </View>
                    <View className="flex flex-col  pb-2  p-1 w-full mt-5">
                        <View className="flex flex-row justify-between items-center">
                            <Text className="text-[12px]  text-gray-800 font-semibold"> Payment Mode: </Text>
                            <Text className="text-[12px]  text-gray-700 font-semibold"> Payment Status:</Text>
                        </View>

                        <View className="flex flex-row justify-between items-center">
                            <Text className="text-[12px]  text-[#FB814B] font-semibold"> Cash </Text>
                            <Text className="text-[12px]  text-[#FB814B] font-semibold"> Incomplete </Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
            <View className="py-2 rounded-2xl bottom-0 absolute w-full my-5 px-2">
                <View className="flex flex-row justify-center items-center bg-black/90 px-5 py-3 rounded-full w-full">
                    <Pressable onPress={() => setModalVisible(true)} className="w-1/2">
                        <Text className="text-[15px]  text-[#FB814B] w-full text-center font-bold"> Mark As Completed</Text>
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