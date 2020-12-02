import React, { Component } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
class StoryItemHome extends Component {
  render() {
    const { story, onPressXayDung } = this.props;
    const maxlimit = 8;

    return (
      <TouchableOpacity onPress={onPressXayDung}>
        <View style={styles.container}>
          <Image style={styles.ImageStyle} source={{ uri: story.path_image }} />
          <View>

            <Text style={styles.TextStyle}>
              {((story.name).length > maxlimit) ?
                (((story.name).substring(0, maxlimit - 3)) + '...') :
                story.name}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 5,
    borderRadius: 5,
    // border: '.1px solid rgb(194, 192, 192)'
  },
  TextStyle: {
    alignItems: 'center',
    color: 'black',
    // fontWeight: 500
  },
  ImageStyle: {
    width: 75,
    height: 100,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    // borderBottomWidth: 1,
    borderColor: 'black',
    borderWidth: 1
    // borderBottomColor: 'rgb(194, 192, 192)'
  }
});
export default StoryItemHome;