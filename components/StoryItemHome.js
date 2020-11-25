import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import LinesEllipsis from 'react-lines-ellipsis';
class StoryItemHome extends Component {
  render() {
    const { story, onPressXayDung } = this.props;
    return (
      <TouchableOpacity onPress={onPressXayDung}>
        <View style={styles.container}>
          <Image style={styles.ImageStyle} source={story.path_image} />
          <View>
            <Text style={styles.TextStyle}>
              <LinesEllipsis
                text={story.name}
                maxLine='1'
                ellipsis='...'
                trimRight
                basedOn='letters'
              />
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
    marginLeft: 12,
    marginRight: 5,
  },
  TextStyle: {
    alignItems: 'center',
    color: 'black',
  },
  ImageStyle: {
    width: 75,
    height: 100,

  }
});
export default StoryItemHome;