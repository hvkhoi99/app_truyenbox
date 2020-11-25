import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
class StoryItemChiTiet extends Component {
    render() {
        const { story, onPressXayDung } = this.props;
        return (
            <TouchableOpacity onPress={onPressXayDung}>
                <View style={styles.container}>
                    <Image style={styles.ImageStyle} source={{ uri: 'https://sachvui.com/cover/2019/truyen-doraemon-plus.jpg' }} />
                    <View>
                        <Text style={styles.TextStyle}>{story.name}</Text>
                        <Text style={styles.TextStyle}>Thể loại : {story.type}</Text>
                        <Text style={styles.TextStyle}>Lượt xem : {story.watch}</Text>
                        <Text style={styles.TextStyle}>Lượt thích : {story.like}</Text>
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
        marginBottom: 10,
        flexDirection: 'row',
    },
    TextStyle: {
        alignItems: 'center',
        color: 'black',
        marginBottom: 10,
        marginTop: 5,
        marginLeft: 5,
    },
    ImageStyle: {
        width: 90,
        height: 120,
    }
});
export default StoryItemChiTiet;