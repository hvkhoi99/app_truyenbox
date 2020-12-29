import AsyncStorage from '@react-native-community/async-storage';
import React, { Component } from 'react';
import { Alert, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Swipeout from 'react-native-swipeout';
import { connect } from 'react-redux';
import { actDeleteStoryFollow } from '../actions/follow';
class StoryActionFollow extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userData: []
        }
    }

    componentDidMount = async () => {
        try {
            const value = await AsyncStorage.getItem('userLogin');
            if (value !== null) {
                this.setState({ userData: JSON.parse(value) })
            } else {
                this.setState({ userData: [] })
            }
        }
        catch (error) {
            console.log(error)
        }
    }

    UnfollowClick = (story_id) => {
        var user_id = this.state.userData.id;
        this.props.unfollowStory(user_id, story_id);
    }

    render() {
        const { name, story, onPressXayDung, index } = this.props;

        const swipeSettings = {
            autoClose: true,

            onClose: (secId, rowId, direction) => {
                if (this.state.activeRowKey != null) {
                    this.setState({ activeRowKey: null });
                }
            },
            onOpen: (secId, rowId, direction) => {
                this.setState({ activeRowKey: story.id })
            },
            right: [
                {
                    onPress: () => {
                        Alert.alert(
                            'Alert',
                            'Bạn có muốn bỏ theo dõi?',
                            [
                                { text: 'No', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
                                {
                                    text: 'Yes', onPress: async () => {
                                        this.UnfollowClick(story.id)
                                    }
                                }
                            ],
                            { cancelable: true }
                        )

                    },
                    text: 'Delete', type: 'delete'
                }
            ],
            rowId: index,
            sectionId: 1
        }
        return (
            <Swipeout {...swipeSettings} style={styles.SwipeOut}>
                <View style={{
                    display: 'flex',
                    flexDirection: 'row',
                    marginHorizontal: 5,
                    borderColor: 'black',
                    backgroundColor: 'white',
                    shadowColor: '#000',
                    shadowOpacity: 0.3,
                    shadowRadius: 10,
                    shadowOffset: { width: 0, height: 0 },
                    marginVertical: 16,
                    elevation: 1,
                }}>
                    <View style={styles.container1}>
                        <TouchableOpacity onPress={onPressXayDung}>
                            <View style={styles.StoryItemInfor}>
                                <Image style={styles.ImageStyle} source={{ uri: story.path_image }} />
                                <View>
                                    <Text style={styles.TextStyle}>Tên: <Text style={styles.textInfor}>{name}</Text></Text>
                                    {/* <Text style={styles.TextStyle}>Thể loại : {story.type}</Text> */}
                                    <Text style={styles.TextStyle}>Lượt xem: <Text style={styles.textInfor}>{story.view}</Text></Text>
                                    <Text style={styles.TextStyle}>Theo dõi: <Text style={styles.textInfor}>{story.follow}</Text></Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>
                    {/* <View style={styles.container2}>
                        <TouchableOpacity onPress={() => this.UnfollowClick(story.id)}>
                        <View style={{
                            backgroundColor: ' rgb(151, 15, 15)',
                            alignItems: 'center',
                            height: 59,
                            borderColor: 'black',
                            borderWidth: 1,
                            borderRadius: 8
                        }}>
                            <Text style={styles.textAction}>Xóa</Text>
                        </View>
                    </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={{
                                marginTop: 1,
                                backgroundColor: 'orange',
                                height: 59,
                                alignItems: 'center',
                                borderColor: 'black',
                                borderWidth: 1
                            }}>
                                <Text style={styles.textAction}>Đọc tiếp...</Text>
                            </View>
                        </TouchableOpacity>
                    </View> */}
                </View>
            </Swipeout>
        );
    }
}

const styles = StyleSheet.create({
    container1: {
        backgroundColor: 'white',
        width: 270,
    },
    container2: {
        width: 80,
        display: 'flex',
        flexDirection: 'column',
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
        borderWidth: 1,
        borderColor: '#ccc'
    },
    textInfor: {
        backgroundColor: 'rgb(208, 208, 214)',
        borderRadius: 5,
        marginLeft: 1,
    },
    StoryItemInfor: {
        display: 'flex',
        flexDirection: 'row'
    },
    textAction: {
        color: 'white',
        marginVertical: 20
    },
    SwipeOut: {
        backgroundColor: 'white',
        borderColor: '#ccc',
        borderTopWidth: 1
    }
});

const mapDispatchToProps = (dispatch) => {
    return {
        unfollowStory: (user_id, story_id) => {
            dispatch(actDeleteStoryFollow(user_id, story_id))
        }
    }
}
export default connect(null, mapDispatchToProps)(StoryActionFollow);