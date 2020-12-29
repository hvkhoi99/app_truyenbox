import AsyncStorage from '@react-native-community/async-storage';
import Axios from 'axios';
import React, { Component } from 'react';
import { ActivityIndicator, FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { connect } from 'react-redux';
import { getListStories } from '../actions/story';
import { getListStoriesDeXuat } from '../actions/storyDeXuat';
import dailyImage from '../assets/daily.png';
import rankImage from '../assets/rank.png';
import { logCurrentStorage } from '../components/logCurrentStorage';
import SearchBar from '../components/SearchBar';
import StoryItemHome from '../components/StoryItemHome';
import * as Config from '../utils/Config';
import SwiperImg from '../components/swiperImg';
import SlideshowTest from '../components/slideImg';
import { getTruyenHotRequest } from '../actions/storyHot';

class Home extends Component {

  findIndex = (list, id) => {
    var result = -1;
    list.forEach((item, index) => {
      if (item.id === id) {
        result = index;
      }
    });
    return result;
  }

  SaveClick = async (story) => {
    var listStory;
    try {
      const value = await AsyncStorage.getItem('listStory');
      if (value !== null) {
        listStory = JSON.parse(value);
      } else {
        listStory = []
      }
    }
    catch (error) {
      console.log(error)
    }

    if (this.findIndex(listStory, story.id) === -1) {
      listStory.unshift(story);
      await AsyncStorage.setItem('listStory', JSON.stringify(listStory));
    }

    if (this.findIndex(listStory, story.id) === -1) {
      listStory.push(story);
      await AsyncStorage.setItem('listStory', JSON.stringify(listStory));
    }

    await Axios.put(`${Config.API_URL}/api/story/` + story.id, { view: story.view + 1 }).then(res => {
    }).catch(err => {
      console.log(err)
    })
    this.props.addHistory(story);
    this.props.navigation.navigate('Thông Tin Truyện', { story: story });
  }


  componentDidMount() {
    this.props.getStoriesHot(5);
    this.props.getStories();
    this.props.getStoriesDeXuat(8);
    logCurrentStorage();
  }

  render() {
    const { navigation } = this.props;
    return (
      <ScrollView>
        <SearchBar navigation={navigation} />
        {/* <Image style={styles.WallpagerStyle} source={{ uri: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/dc9a94d0-a984-4f3f-a134-66682b76ffc2/d6dx289-ebe7edf2-f46d-4c74-802c-a9b5b775c87f.png' }} /> */}
        <View style={styles.containerView}>
          <SwiperImg storiesHot={this.props.storiesHot} />
          {/* <SlideshowTest storiesHot={this.props.storiesHot} /> */}
        </View>
        <View style={styles.TextStyle}>
          <View style={styles.shadowIconText}>
            <TouchableOpacity style={styles.StyleRankDaily} onPress={() => navigation.navigate("Ranking")}>
              <Image style={styles.IconStyle} source={rankImage} />
              <Text>Ranking</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.shadowIconText}>
            <TouchableOpacity style={styles.StyleRankDaily} onPress={() => navigation.navigate("Daily")}>
              <View style={styles.shadowIconTextItem}>
                <Image style={styles.IconStyle} source={dailyImage} />
                <Text>Daily</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        {this.props.stories.length !== 0 ? (
          <View>
            <View>
              <View style={styles.TextStyle}>
                <Text style={styles.TextStyleMoiCapNhatvaDeXuat}>Mới Cập Nhật</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Daily')}>
                  <Text style={styles.Xemthem}>Xem thêm {">"} </Text>
                </TouchableOpacity>
              </View>
              <FlatList
                contentContainerStyle={{ marginLeft: -4 }}
                horizontal={true}
                data={this.props.stories}
                renderItem={({ item }) => <StoryItemHome story={item}
                  onPressXayDung={() => this.SaveClick(item)} />}
                keyExtractor={item => `${item.id}`}
              />
            </View>
            <View>
              <View style={styles.TextStyle}>
                <Text style={styles.TextStyleMoiCapNhatvaDeXuat}>Đề Xuất</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Ranking')}>
                  <Text style={styles.Xemthem}>Xem thêm {">"}</Text>
                </TouchableOpacity>
              </View>
              <View>
                <FlatList
                  contentContainerStyle={{ marginLeft: -4 }}
                  numColumns={4}
                  data={this.props.storiesDeXuat}
                  renderItem={({ item }) => <StoryItemHome story={item}
                    onPressXayDung={() => this.SaveClick(item)} />}
                  keyExtractor={item => `${item.id}`}
                />
              </View>
            </View>
          </View>
        ) : (
            <ActivityIndicator />
          )}
      </ScrollView>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    stories: state.stories,
    storiesDeXuat: state.storiesDeXuat,
    // history: state.history
    storiesHot: state.storiesHot,

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getStories: () => {
      dispatch(getListStories())
    },
    getStoriesDeXuat: (number) => {
      dispatch(getListStoriesDeXuat(number))
    },
    addHistory: (story) => {
      dispatch({ type: 'ADD_HISTORY', story })
    },
    getStoriesHot: (number) => {
      dispatch(getTruyenHotRequest(number))
    },
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(Home)

const styles = StyleSheet.create({
  containerView: {
    // marginTop: 50

  },
  WallpagerStyle: {
    height: 150,
    width: 400,
  },
  IconStyle: {
    height: 50,
    width: 50,
    marginTop: 5
  },
  TextStyle: {
    paddingTop: 5,
    paddingBottom: 15,
    flexDirection: 'row',
    display: 'flex',
    justifyContent: 'space-evenly',
  },
  TextStyleMoiCapNhatvaDeXuat: {
    flex: 1,
    fontSize: 18,
    fontWeight: '700'
  },
  shadowIconText: {
    // elevation: 1,
    // shadowColor: 'orange',
    // shadowOpacity: 0.3,
    // shadowRadius: 10,
    width: 100,
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: 10,
    borderColor: 'orange',
    borderWidth: 1
  },
  shadowIconTextItem: {
    alignItems: 'center'
  },
  Xemthem: {
    borderBottomWidth: 1,
    borderColor: 'rgb(47, 119, 252)',
    color: 'rgb(47, 119, 252)'
  }
});
