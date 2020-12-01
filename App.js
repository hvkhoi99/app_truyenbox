import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { Component } from 'react';
// import { LogBox } from 'react-native'
import { Provider } from 'react-redux';
import store from './reducers/store';
import CaNhanScreen from './screens/CaNhanScreen';
import ChapterScreen from './screens/ChapterScreen';
import DailyyyScreen from './screens/DailyyyScreen';
import Home from './screens/Home';
import RankingScreen from './screens/RankingScreen';
import TheLoaiScreen from './screens/TheLoaiScreen';
import TheoDoiScreen from './screens/TheoDoiScreen';
import ThongTinTruyenScreen from './screens/ThongTinTruyenScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import ThongTinTruyenScreen1 from './screens/ThongTinTruyenScreen1';
import LoginScreen from './screens/LoginScreen';
import AsyncStorage from '@react-native-community/async-storage';

const Stack = createStackNavigator();
function HomeTab({ navigation, route }) {
  if (route.state && route.state.routes[route.state.index].name === "Chapter") {
    navigation.setOptions({ tabBarVisible: false })
  }
  else if (route.state && route.state.routes[route.state.index].name === "Thông Tin Truyện") {
    navigation.setOptions({ tabBarVisible: false })
  }
  else if (route.state && route.state.routes[route.state.index].name === "Thông Tin Truyện 1") {
    navigation.setOptions({ tabBarVisible: false })
  }
  else {
    navigation.setOptions({ tabBarVisible: true })
  }
  return (
    <Stack.Navigator>
      <Stack.Screen name="Trang Chủ" component={Home} />
      <Stack.Screen name="Ranking" component={RankingScreen} />
      <Stack.Screen name="Daily" component={DailyyyScreen} />
      <Stack.Screen name="Thông Tin Truyện" component={ThongTinTruyenScreen} />
      <Stack.Screen name="Thông Tin Truyện 1" component={ThongTinTruyenScreen1} />
      <Stack.Screen name="Chapter" component={ChapterScreen} />
    </Stack.Navigator>
  );
}

function TheoDoiTab({ navigation, route }) {
  if (route.state && route.state.routes[route.state.index].name === "Chapter") {
    navigation.setOptions({ tabBarVisible: false })
  }
  else if (route.state && route.state.routes[route.state.index].name === "Thông Tin Truyện") {
    navigation.setOptions({ tabBarVisible: false })
  }
  else if (route.state && route.state.routes[route.state.index].name === "Thông Tin Truyện 1") {
    navigation.setOptions({ tabBarVisible: false })
  }
  else {
    navigation.setOptions({ tabBarVisible: true })
  }
  return (
    <Stack.Navigator>
      <Stack.Screen name="Theo Dõi" component={TheoDoiScreen} />
      <Stack.Screen name="Thông Tin Truyện" component={ThongTinTruyenScreen} />
      <Stack.Screen name="Thông Tin Truyện 1" component={ThongTinTruyenScreen1} />
      <Stack.Screen name="Chapter" component={ChapterScreen} />
    </Stack.Navigator>
  );
}
function TheLoaiTab({ navigation, route }) {
  if (route.state && route.state.routes[route.state.index].name === "Chapter") {
    navigation.setOptions({ tabBarVisible: false })
  }
  else if (route.state && route.state.routes[route.state.index].name === "Thông Tin Truyện") {
    navigation.setOptions({ tabBarVisible: false })
  }
  else if (route.state && route.state.routes[route.state.index].name === "Thông Tin Truyện 1") {
    navigation.setOptions({ tabBarVisible: false })
  }
  else {
    navigation.setOptions({ tabBarVisible: true })
  }
  return (
    <Stack.Navigator>
      <Stack.Screen name="Thể Loại" component={TheLoaiScreen} />
      <Stack.Screen name="Thông Tin Truyện" component={ThongTinTruyenScreen} />
      <Stack.Screen name="Thông Tin Truyện 1" component={ThongTinTruyenScreen1} />
      <Stack.Screen name="Chapter" component={ChapterScreen} />
    </Stack.Navigator>
  );
}

const color = {
  active: '#147efb',
  inactive: '#ccc'
}
const Tab = createBottomTabNavigator();

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      list: []
    }
  }

  componentDidMount = async () => {
    try {
      const value = await AsyncStorage.getItem('userLogin');
      if (value !== null) {
        this.setState({ list: JSON.parse(value) })
      } else {
        this.setState({ list: [] })
      }
    }
    catch (error) {
      console.log(error)
    }
  }

  CaNhanTab = () => {
    return (
      (this.state.list.length !== 0) ? (
        <Stack.Navigator>
          <Stack.Screen name="Cá Nhân" component={CaNhanScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
        </Stack.Navigator>
      ) : (
          <Stack.Navigator>
            <Stack.Screen name="Login" component={LoginScreen} />
          </Stack.Navigator>
        )
    )
  }

  render() {
    // LogBox.ignoreLogs(['Warning: ...']);
    // LogBox.ignoreAllLogs();
    return (
      <Provider store={store}>
        <NavigationContainer>
          <Tab.Navigator>
            <Tab.Screen options={{
              tabBarIcon: ({ focused }) => (
                <Icon name="ios-home" size={30} color={focused ? color.active : color.inactive} />
              )
            }} name="Trang Chủ" component={HomeTab} />
            <Tab.Screen options={{
              tabBarIcon: ({ focused }) => (
                <Icon name="ios-heart" size={30} color={focused ? color.active : color.inactive} />
              )
            }} name="Theo Dõi" component={TheoDoiTab} />
            <Tab.Screen options={{
              tabBarIcon: ({ focused }) => (
                <Icon name="ios-albums" size={30} color={focused ? color.active : color.inactive} />
              )
            }} name="Thể Loại" component={TheLoaiTab} />
            <Tab.Screen options={{
              tabBarIcon: ({ focused }) => (
                <Icon name="ios-person" size={30} color={focused ? color.active : color.inactive} />
              )
            }} name="Cá Nhân" component={this.CaNhanTab} />
          </Tab.Navigator>
        </NavigationContainer>
      </Provider>
    )
  }
}



