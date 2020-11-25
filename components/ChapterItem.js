import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';

class ChapterItem extends Component {
    render() {
        const {chapter, onPressXayDung} = this.props;
        return (
          <TouchableOpacity onPress={onPressXayDung}>
            <View style={styles.container}>
              <View>
                 <Text style={styles.TextStyle}>{chapter.name}</Text>
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
      marginBottom :10,
      marginLeft :12,
      marginRight :5,
    },
    TextStyle : {
      alignItems :'center',
      color:'black',
    },
    ImageStyle: {
        width: 75, 
        height:120,
        
    }
  });

export default ChapterItem;