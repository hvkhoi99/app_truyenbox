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

    this.props.navigation.navigate('Thông Tin Truyện', { story: story });
  }


  componentDidMount() {
    this.props.getStories();
    this.props.getStoriesDeXuat(8);
    logCurrentStorage();
  }

  render() {
    const { navigation } = this.props;
    return (

      <ScrollView>
        <SearchBar />
        <Image style={styles.WallpagerStyle} source={{ uri: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/dc9a94d0-a984-4f3f-a134-66682b76ffc2/d6dx289-ebe7edf2-f46d-4c74-802c-a9b5b775c87f.png' }} />
        <View style={styles.TextStyle}>
          <TouchableOpacity style={styles.StyleRankDaily} onPress={() => navigation.navigate("Ranking")}>
            <Image style={styles.IconStyle} source={rankImage} />
            <Text>Ranking</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.StyleRankDaily} onPress={() => navigation.navigate("Daily")}>
            <Image style={styles.IconStyle} source={dailyImage} />
            <Text>Daily</Text>
          </TouchableOpacity>
        </View>
        {this.props.stories.length !== 0 ? (
          <View>
            <View>
              <View style={styles.TextStyle}>
                <Text style={styles.TextStyleMoiCapNhatvaDeXuat}>Mới Cập Nhật</Text>
                <Text>Xem thêm</Text>
              </View>
              <FlatList
                // numColumns={4} 
                contentContainerStyle={{ marginLeft: -4 }}
                horizontal={true}
                data={this.props.stories}
                renderItem={({ item }) => <StoryItemHome story={item} keyExtractor={item => `${item.id}`}
                  onPressXayDung={() => this.SaveClick(item)} />}
              />
            </View>
            <View>
              <View style={styles.TextStyle}>
                <Text style={styles.TextStyleMoiCapNhatvaDeXuat}>Đề Xuất</Text>
                <Text>Xem thêm</Text>
              </View>
              <View>
                <FlatList
                  contentContainerStyle={{ marginLeft: -4 }}
                  numColumns={4}
                  data={this.props.storiesDeXuat}
                  renderItem={({ item }) => <StoryItemHome story={item} keyExtractor={item => `${item.id}`}
                    onPressXayDung={() => this.SaveClick(item)} />}
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
    storiesDeXuat: state.storiesDeXuat
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getStories: () => {
      dispatch(getListStories())
    },
    getStoriesDeXuat: (number) => {
      dispatch(getListStoriesDeXuat(number))
    }
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(Home)

const styles = StyleSheet.create({
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
    paddingBottom: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  TextStyleMoiCapNhatvaDeXuat: {
    flex: 1,
  },
  StyleRankDaily: {
    marginVertical: 10,
    alignItems: 'center',
    marginLeft: 60,
    marginRight: 20,
    // border: '.1px solid rgb(194, 192, 192)',
    borderRadius: 5,
    width: 80,
    height: 80,
    borderColor: 'black',
    borderWidth: 1,
    elevation: 1
  }
});

// export default Home;