import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar, View, Image, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator()
import LoginScreen from './screens/Auth/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import SyncCodeScreen from './screens/Auth/SyncCodeScreen';
import DashboardScreen from './screens/Store/DashboardScreen';
import OrdersScreen from './screens/Store/Orders/OrdersScreen';
import OrderDetailScreen from './screens/Store/Orders/OrderDetailScreen';
import OrderAcceptScreen from './screens/Store/Orders/OrderAcceptScreen';
import OrderCompletedScreen from './screens/Store/Orders/OrderCompletedScreen';
import OrderPaymentVerificationScreen from './screens/Store/Orders/OrderPaymentVerificationScreen';
import InventoryScreen from './screens/Store/Inventory/InventoryScreen'
import MoreScreen from './screens/Store/MoreScreen';
import CategoryManagementScreen from './screens/Store/Inventory/CategoryManagementScreen'
import AddNewItemScreen from './screens/Store/Inventory/AddNewItemScreen'


function AuthStack() {
    return (
        <Stack.Navigator initialRouteName='Home' screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={HomeScreen} options={{}} />
            <Stack.Screen name="SyncCode" component={SyncCodeScreen} options={{}} />
            <Stack.Screen name="Login" component={LoginScreen} options={{}} />
        </Stack.Navigator>
    )
}



function HomeStack() {
    return (
        <Tab.Navigator initialRouteName='Dashboard' screenOptions={{ headerShown: false, tabBarShowLabel: false, tabBarActiveTintColor: '#6941C6', tabBarStyle: { backgroundColor: '#000000', borderTopLeftRadius: 24, borderTopRightRadius: 24, borderBottomRightRadius: 24, borderBottomLeftRadius: 24, height: 64, marginBottom: 10, margin: 1 } }}>
            <Tab.Screen name="Dashboard" component={DashboardScreen} options={{
                tabBarIcon: (item) => item.focused ?
                    <View className='flex flex-col items-center'>
                        <Image source={require('./assets/images/icons/home.png')} style={{ tintColor: '#FB814B', width: 20, height: 20 }} />
                        <Text style={{ color: '#FB814B' }} className="text-xs">Home</Text>
                    </View> :
                    <View className='flex flex-col items-center'>
                        <Image source={require('./assets/images/icons/home.png')} style={{ tintColor: item.color, width: 20, height: 20 }} />
                        <Text className="text-gray-100 text-xs">Home</Text>
                    </View>
            }} />
            <Tab.Screen name="Orders" component={OrdersScreen} options={{
                tabBarIcon: (item) => item.focused ?
                    <View className='flex flex-col items-center'>
                        <Image source={require('./assets/images/icons/note.png')} style={{ tintColor: '#FB814B', width: 20, height: 20 }} />
                        <Text style={{ color: '#FB814B' }} className="text-xs">Orders</Text>
                    </View> :
                    <View className='flex flex-col items-center'>
                        <Image source={require('./assets/images/icons/note.png')} style={{ tintColor: item.color, width: 20, height: 20 }} />
                        <Text className="text-gray-100 text-xs">Orders</Text>
                    </View>
            }} />
            <Tab.Screen name="Inventory" component={InventoryScreen} options={{
                tabBarIcon: (item) => item.focused ?
                    <View className='flex flex-col items-center'>
                        <Image source={require('./assets/images/icons/box.png')} style={{ tintColor: '#FB814B', width: 20, height: 20 }} />
                        <Text style={{ color: '#FB814B' }} className="text-xs">Inventory</Text>
                    </View> :
                    <View className='flex flex-col items-center'>
                        <Image source={require('./assets/images/icons/box.png')} style={{ tintColor: item.color, width: 20, height: 20 }} />
                        <Text className="text-gray-100 text-xs">Inventory</Text>
                    </View>
            }} />
            <Tab.Screen name="More" component={MoreScreen} options={{
                tabBarIcon: (item) => item.focused ?
                    <View className='flex flex-col items-center'>
                        <Image source={require('./assets/images/icons/more.png')} style={{ tintColor: '#FB814B', width: 20, height: 20 }} />
                        <Text style={{ color: '#FB814B' }} className="text-xs">More</Text>
                    </View> :
                    <View className='flex flex-col items-center'>
                        <Image source={require('./assets/images/icons/more.png')} style={{ tintColor: item.color, width: 20, height: 20 }} />
                        <Text className="text-gray-100 text-xs">More</Text>
                    </View>
            }} />
            {/* <Tab.Screen name="Orders" component={OrdersScreen} options={{tabBarIcon : (item) => item.focused ? <View className='flex flex-col items-center'><DashboardIcon name="home"  color={item.color}></DashboardIcon><View className='h-1.5 mt-0.5 w-1.5 rounded-full' style={{backgroundColor : item.color}}></View></View>: <DashboardIcon name="home" size={20} color={item.color}></DashboardIcon>}} />
            <Tab.Screen name="Inventory" component={InventoryScreen} options={{tabBarIcon : (item) => item.focused ? <View className='flex flex-col items-center'><InventoryIcon name="home"  color={item.color}></InventoryIcon><View className='h-1.5 mt-0.5 w-1.5 rounded-full' style={{backgroundColor : item.color}}></View></View>: <InventoryIcon name="home" size={20} color={item.color}></InventoryIcon>}} />
            <Tab.Screen name="More" component={MoreScreen} options={{tabBarIcon : (item) => item.focused ? <View className='flex flex-col items-center'><MoreIcon name="home"  color={item.color}></MoreIcon><View className='h-1.5 mt-0.5 w-1.5 rounded-full' style={{backgroundColor : item.color}}></View></View>: <MoreIcon name="home" size={20} color={item.color}></MoreIcon>}} />
         */}
        </Tab.Navigator>
    )
}


function Navigator(): React.JSX.Element {
    const navigationRef = useNavigationContainerRef();
    let isLoggedIn = false;
    return (
        <NavigationContainer ref={navigationRef} >
            <StatusBar barStyle={'dark-content'} backgroundColor={'#FFFFFF'} />
            {isLoggedIn ? (
                <>
                    <Stack.Navigator initialRouteName={"HomeStack"} screenOptions={{ gestureResponseDistance: 20, gestureDirection: 'horizontal' }}>
                        <Stack.Screen name="HomeStack" component={HomeStack} options={{ headerShown: false }} />
                        <Stack.Screen name="OrderDetail" component={OrderDetailScreen} options={{ headerShown: false }} />
                        <Stack.Screen name="OrderAccept" component={OrderAcceptScreen} options={{ headerShown: false }} />
                        <Stack.Screen name="OrderPaymentVerification" component={OrderPaymentVerificationScreen} options={{ headerShown: false }} />
                        <Stack.Screen name="OrderCompleted" component={OrderCompletedScreen} options={{ headerShown: false }} />
                        <Stack.Screen name="CategoryManagement" component={CategoryManagementScreen} options={{ headerShown: false }} />
                        <Stack.Screen name="AddNewItem" component={AddNewItemScreen} options={{ headerShown: false }} />
                    </Stack.Navigator>
                </>
            )
                : (
                    <>
                        <Stack.Navigator initialRouteName={"AuthStack"} screenOptions={{ gestureResponseDistance: 20, gestureDirection: 'horizontal', headerShown: false }}>
                            <Stack.Screen name="AuthStack" component={AuthStack} />
                            <Stack.Screen name="HomeStack" component={HomeStack} options={{ headerShown: false }} />
                        <Stack.Screen name="OrderDetail" component={OrderDetailScreen} options={{ headerShown: false }} />
                        <Stack.Screen name="OrderAccept" component={OrderAcceptScreen} options={{ headerShown: false }} />
                        <Stack.Screen name="OrderPaymentVerification" component={OrderPaymentVerificationScreen} options={{ headerShown: false }} />
                        <Stack.Screen name="OrderCompleted" component={OrderCompletedScreen} options={{ headerShown: false }} />
                        <Stack.Screen name="CategoryManagement" component={CategoryManagementScreen} options={{ headerShown: false }} />
                        <Stack.Screen name="AddNewItem" component={AddNewItemScreen} options={{ headerShown: false }} />
                   
                        </Stack.Navigator>
                    </>
                )
            }
        </NavigationContainer>
    )
}

export default Navigator; 