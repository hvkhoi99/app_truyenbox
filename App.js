import AsyncStorage from '@react-native-community/async-storage';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { Component } from 'react';
import { ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { LogBox } from 'react-native';
import { Provider } from 'react-redux';
import store from './reducers/store';
import CaNhanScreen from './screens/CaNhanScreen';
import ChapterScreen from './screens/ChapterScreen';
import DailyyyScreen from './screens/DailyyyScreen';
import EditUserScreen from './screens/EditUserScreen';
import Home from './screens/Home';
import LoginScreen from './screens/LoginScreen';
import RankingScreen from './screens/RankingScreen';
import RegisterScreen from './screens/RegisterScreen';
import TheLoaiScreen from './screens/TheLoaiScreen';
import TheoDoiScreen from './screens/TheoDoiScreen';
import ThongTinTruyenScreen from './screens/ThongTinTruyenScreen';
import ThongTinTruyenScreen1 from './screens/ThongTinTruyenScreen1';
import SearchPage from './screens/SearchPage';
// import SlideshowTest from './components/slideImg';
import SwiperImg from './components/swiperImg';


const Stack = createStackNavigator();
function HomeTab({ navigation, route }) {
  if (route.state && route.state.routes[route.state.index].name === "Chapter") {
    navigation.setOptions({ tabBarVisible: false })
  }
  else if (route.state && route.state.routes[route.state.index].name === "Thông Tin Truyện") {
    navigation.setOptions({ tabBarVisible: false })
  }
  else if (route.state && route.state.routes[route.state.index].name === ".Thông Tin Truyện") {
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
      <Stack.Screen name=".Thông Tin Truyện" component={ThongTinTruyenScreen1} />
      <Stack.Screen name="Chapter" component={ChapterScreen} />
      <Stack.Screen name="Search Page" component={SearchPage} />
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
  else if (route.state && route.state.routes[route.state.index].name === ".Thông Tin Truyện") {
    navigation.setOptions({ tabBarVisible: false })
  }
  else {
    navigation.setOptions({ tabBarVisible: true })
  }
  return (
    <Stack.Navigator>
      <Stack.Screen name="Theo Dõi" component={TheoDoiScreen} />
      <Stack.Screen name="Thông Tin Truyện" component={ThongTinTruyenScreen} />
      <Stack.Screen name=".Thông Tin Truyện" component={ThongTinTruyenScreen1} />
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
  else if (route.state && route.state.routes[route.state.index].name === ".Thông Tin Truyện") {
    navigation.setOptions({ tabBarVisible: false })
  }
  else {
    navigation.setOptions({ tabBarVisible: true })
  }
  return (
    <Stack.Navigator>
      <Stack.Screen name="Thể Loại" component={TheLoaiScreen} />
      <Stack.Screen name="Thông Tin Truyện" component={ThongTinTruyenScreen} />
      <Stack.Screen name=".Thông Tin Truyện" component={ThongTinTruyenScreen1} />
      <Stack.Screen name="Chapter" component={ChapterScreen} />
      <Stack.Screen name="Search Page" component={SearchPage} />
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
      userData: [],
      currentScreen: "",
    }
  }

  componentDidMount = async () => {
    try {
      const value = await AsyncStorage.getItem('userLogin');
      if (value !== null) {
        this.setState({ userData: JSON.parse(value) });
        this.setState({ currentScreen: "Cá Nhân" });
      } else {
        this.setState({ userData: [] });
        this.setState({ currentScreen: "Login" });
      }
    }
    catch (error) {
      console.log(error)
    }
  }

  CaNhanTab = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Cá Nhân" component={CaNhanScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="EditUser" component={EditUserScreen} />
      </Stack.Navigator>
    )
  }
  LoginTab = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={RegisterScreen} />
      </Stack.Navigator>
    )
  }

  render() {
    LogBox.ignoreLogs(['Warning: ...']);
    LogBox.ignoreAllLogs();
    return (
      (this.state.currentScreen !== "") ? (
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
              }} name={this.state.currentScreen} component={this.state.currentScreen == "Cá Nhân" ? this.CaNhanTab : this.LoginTab} />
            </Tab.Navigator>
          </NavigationContainer>
        </Provider>
      ) : (<ActivityIndicator />)
    )
  }
}



