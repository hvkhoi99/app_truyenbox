import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
class StoryItemChiTiet extends Component {

    render() {
        // console.log(this.props.cateId);
        const { name, story, onPressXayDung } = this.props;
        return (
            <TouchableOpacity onPress={onPressXayDung}>
                <View style={styles.container}>
                    <Image style={styles.ImageStyle} source={{ uri: story.path_image }} />
                    <View>
                        <Text style={styles.TextStyle}>Tên: <Text style={styles.textInfor}>{name}</Text></Text>
                        {/* <Text style={styles.TextStyle}>Thể loại : {story.type}</Text> */}
                        <Text style={styles.TextStyle}>Lượt xem: <Text style={styles.textInfor}>{story.view}</Text></Text>
                        <Text style={styles.TextStyle}>Theo dõi: <Text style={styles.textInfor}>{story.follow}</Text></Text>
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
    },
    textInfor: {
        backgroundColor: 'rgb(208, 208, 214)',
        borderRadius: 5,
        marginLeft: 1,
        
    }
});
export default StoryItemChiTiet;