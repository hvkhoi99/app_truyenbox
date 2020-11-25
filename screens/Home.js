import React, { Component } from 'react';
import { FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { connect } from 'react-redux';
import { getListStories } from '../actions/story';
import dailyImage from '../assets/daily.png';
import rankImage from '../assets/rank.png';
import SearchBar from '../components/SearchBar';
import StoryItemHome from '../components/StoryItemHome';
class Home extends Component {


  componentDidMount() {
    this.props.getStories();
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
        <View>
          <View style={styles.TextStyle}>
            <Text style={styles.TextStyleMoiCapNhatvaDeXuat}>Mới Cập Nhật</Text>
            <Text>Xem thêm</Text>
          </View>
          <FlatList
            // numColumns={4} 
            contentContainerStyle={{ marginLeft: -5 }}
            horizontal={true}
            data={this.props.stories}
            renderItem={({ item }) => <StoryItemHome story={item} keyExtractor={item => `${item.id}`}
              onPressXayDung={() => navigation.navigate('Thông Tin Truyện', { story: item })} />}
          />
        </View>
        <View>
          <View style={styles.TextStyle}>
            <Text style={styles.TextStyleMoiCapNhatvaDeXuat}>Đề Xuất</Text>
            <Text>Xem thêm</Text>
          </View>
          <View>
            <FlatList
              contentContainerStyle={{ marginLeft: -5 }}
              numColumns={4}
              data={this.props.stories}
              renderItem={({ item }) => <StoryItemHome story={item} keyExtractor={item => `${item.id}`}
                onPressXayDung={() => navigation.navigate('Thông Tin Truyện', { story: item })} />}
            />

          </View>
        </View>
      </ScrollView>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    stories: state.stories
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getStories: () => {
      dispatch(getListStories())
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
    alignItems: 'center',
    marginLeft: 65,
    marginRight: 20,
    border: '.1px solid rgb(194, 192, 192)',
    borderRadius: 5,
    width: 80,
    height: 80
  }
});

// export default Home;