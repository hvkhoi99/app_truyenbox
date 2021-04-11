import React, { Component } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
class StoryItemChiTiet extends Component {
    render() {
        const { name, story, onPressXayDung } = this.props;
        return (
            <TouchableOpacity onPress={onPressXayDung}>
                <View style={styles.container}>
                    <Image
                        style={styles.ImageStyle}
                        source={{ uri: story.path_image }}
                    />
                    <View>
                        <Text style={styles.TextStyle}>
                            Tên:
                            <View style={styles.viewInfor}>
                                <Text style={styles.textInfor}>{name}</Text>
                            </View>
                        </Text>
                        {/* <Text style={styles.TextStyle}>Thể loại : {story.type}</Text> */}
                        <Text style={styles.TextStyle}>
                            Lượt xem:
                            <View style={styles.viewInfor}>
                                <Text style={styles.textInfor}>
                                    {story.view}
                                </Text>
                            </View>
                        </Text>
                        <Text style={styles.TextStyle}>
                            Theo dõi:
                            <View style={styles.viewInfor}>
                                <Text style={styles.textInfor}>
                                    {story.follow}
                                </Text>
                            </View>
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
        backgroundColor: "white",
        marginBottom: 10,
        flexDirection: "row",
        elevation: 1,
    },
    ImageStyle: {
        width: 90,
        height: 120,
        borderWidth: 1,
        borderColor: "#ccc",
    },
    TextStyle: {
        color: "black",
        marginVertical: 10,
        marginHorizontal: 10,
    },
    viewInfor: {
        height: 15,
    },
    textInfor: {
        backgroundColor: "#ccc",
        borderRadius: 5,
        paddingHorizontal: 5,
        marginHorizontal: 10,
    },
});
export default StoryItemChiTiet;
