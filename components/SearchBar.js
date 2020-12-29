import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  FlatList,
  Keyboard,
  TouchableOpacity,
  Alert
} from "react-native";

import * as Animatable from 'react-native-animatable'

const listItems = []


import Icon from 'react-native-vector-icons/Ionicons'
import { connect } from "react-redux";
import { actSearchStoriesRequest } from "../actions/search";
class SearchBar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      inputSearch: '',
      searchBarFocused: false
    }
  }

  handleSearch = (text) => {
    this.setState({ inputSearch: text })
  }

  handleIconSearch = () => {
    const nameStory = this.state.inputSearch;
    const { navigation } = this.props;
    const listStorySearch = this.props.listStorySearch;
    if (nameStory === '') {
      Alert.alert('Bạn cần nhập tên truyện để tìm kiếm!');
      console.log('Bạn cần nhập tên truyện để tìm kiếm!');
    } else {
      this.props.searchStories(nameStory);
      navigation.navigate("Search Page", { listStorySearch: listStorySearch })
    }
  }

  componentDidMount() {
    this.keyboardDidShow = Keyboard.addListener('keyboardDidShow', this.keyboardDidShow)
    this.keyboardWillShow = Keyboard.addListener('keyboardWillShow', this.keyboardWillShow)
    this.keyboardWillHide = Keyboard.addListener('keyboardWillHide', this.keyboardWillHide)


  }

  keyboardDidShow = () => {
    this.setState({ searchBarFocused: true })
  }

  keyboardWillShow = () => {
    this.setState({ searchBarFocused: true })
  }

  keyboardWillHide = () => {
    this.setState({ searchBarFocused: false })
  }
  render() {
    return (
      <View style={{ flex: 1, marginBottom: 5 }}>
        <View style={{ height: 50, backgroundColor: 'black', justifyContent: 'center', paddingHorizontal: 5 }}>

          <Animatable.View animation="slideInRight" duration={500} style={{ height: 30, backgroundColor: 'white', flexDirection: 'row', padding: 5, alignItems: 'center' }}>
            <TextInput placeholder="Nhập từ khóa tìm kiếm..."
              style={{ fontSize: 18, marginHorizontal: 5, flex: 1, paddingHorizontal: 10 }}
              onChangeText={this.handleSearch}
              value={this.state.inputSearch}
            />
            <Animatable.View animation={this.state.searchBarFocused ? "fadeInLeft" : "fadeInRight"} duration={400}>
              <TouchableOpacity onPress={this.handleIconSearch}>
                <Icon name={this.state.searchBarFocused ? "ios-search" : "ios-search"} style={{ fontSize: 24 }} />
              </TouchableOpacity>
            </Animatable.View>
          </Animatable.View>

        </View>

        <FlatList
          style={{ backgroundColor: this.state.searchBarFocused ? 'rgba(0,0,0,0.3)' : 'white' }}
          data={listItems}
          renderItem={({ item }) => <Text style={{ paddingH: 20, fontSize: 20 }}>{item}</Text>}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    listStorySearch: state.searchStory
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    searchStories: (stories) => {
      dispatch(actSearchStoriesRequest(stories))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
