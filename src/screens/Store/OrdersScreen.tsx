import React, { useState, useEffect } from 'react';
import { Text, StyleSheet, Button, View, FlatList, ScrollView, TouchableOpacity, Alert, ActivityIndicator, Image, ImageBackground, Pressable, TextInput, Modal, Keyboard } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome6';
import IconAntDesign from 'react-native-vector-icons/AntDesign';


interface TableScreenProps {
  navigation: any;
  mainFloorContent: string[];
  firstFloorContent: string[];
}

export default function TableListScreen({ navigation }: TableScreenProps) {

  const MainItem = ({ item }) => (
    <Text className="text-[#6F767E] my-3 mb-5 mt-10 text-md font-semibold">{item}</Text>
  );


  const [modalMenuVisible, setModalMenuVisible] = useState(false);

  const data = [
    {
      mainItem: 'Main Floor',
      subItems: Array.from({ length: 8 }, (_, index) => `GT-0${index + 1}`),
    },
    {
      mainItem: 'First Floor',
      subItems: Array.from({ length: 8 }, (_, index) => `GTS-0${index + 1}`),
    },
    // Add more mainItem-subItem pairs as needed
  ];

  const handlePress = (item: string) => {
    navigation.navigate('Items', { selectedItem: item });
  };

  const SubItem = ({ item }) => (
    <View style={{ padding: 10, backgroundColor: 'lightgreen', marginVertical: 5 }}>
      <Text> {item}</Text>
    </View>
  );

  const handleViewKOT = () => {
    setModalMenuVisible(false)
    navigation.navigate('KOTView');
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

      {/* Menu Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalMenuVisible}
        onRequestClose={() => {
          setModalMenuVisible(false);
        }}
      >
        <View style={styles.modalContainer} >
          <View className="bg-[#fff] p-4 rounded-lg w-64">
            <View className="flex justify-between flex-row-reverse">
              <Pressable className="rounded-full text-neutral-700 h-6 w-6 bg-neutral-100 flex justify-center items-center" onPress={() => setModalMenuVisible(false)}>
                <IconAntDesign name="close" size={10} />
              </Pressable>
              <View className="flex flex-col space-x-0 mb-3">
                <Text className="text-xs font-bold text-neutral-700">Table "GT-05"</Text>
              </View>
            </View>

            <View className="h-[0.5px] w-full mx-1 bg-neutral-300 my-3"></View>

            <Pressable onPress={() => handleViewKOT()}>
              <Text className="text-neutral-700 text-xs text-center">View KOT</Text>
            </Pressable>

            <View className="h-[0.5px] w-full mx-1 bg-neutral-300 my-3"></View>
            <Text className="text-neutral-700 text-xs text-center">Move Table</Text>

            <View className="h-[0.5px] w-full mx-1 bg-neutral-300 my-3"></View>
            <Text className="text-neutral-700 text-xs text-center">Print Bill</Text>
            <View className="h-[0.5px] w-full mx-1 bg-neutral-300 my-3"></View>
            <Text className="text-neutral-700 text-xs text-center">Print Bill and Payment</Text>
            <View className="h-[0.5px] w-full mx-1 bg-neutral-300 my-3"></View>
            <Text className="text-neutral-700 text-xs text-center">Get Pin</Text>
            <View className="h-[0.5px] w-full mx-1 bg-neutral-300 my-3"></View>
          </View>
        </View>
      </Modal>

      <View className="w-full h-full flex bg-black/7" style={styles.container}  >
        <View className=" p-5 w-full">
          <View className="w-full flex flex-col justify-center items-center">
            <Image source={require('../../assets/images/fyra-logo.png')} />
          </View>
          <FlatList
            data={data}
            renderItem={({ item }) => (
              <View>
                <MainItem item={item.mainItem} />
                <FlatList
                  data={item.subItems}
                  renderItem={renderItem}
                  keyExtractor={(item, index) => index.toString()}
                  horizontal={false}
                  numColumns={3}
                  contentContainerStyle={styles.flatListContainer}
                />
              </View>
            )}
            keyExtractor={(item, index) => index.toString()}
            style={styles.container}
          />
        </View>
      </View>
      <View className='absolute bottom-10 right-10 bg-[#FB814B] w-10 h-10 rounded-full flex justify-center items-center '>
        <Icon name="plus" size={14} color="#FCFCFC" />
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