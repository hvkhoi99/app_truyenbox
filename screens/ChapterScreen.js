import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, TextInput, Alert } from 'react-native';
import { connect } from 'react-redux';
import { getListImgs } from '../actions/image';
import Icon from 'react-native-vector-icons/Ionicons';
import moment from 'moment';
import { actAddCommentRequest, actGetCommentsRequest } from '../actions/comment';

// var moment = require('moment')
class ChapterScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            comments: [],
            userData: [],
            contentInput: ""
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
        const { chapter_id } = this.props.route.params;
        this.props.getImages(chapter_id);
        await this.props.getComments(chapter_id);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps && nextProps.comments) {
            this.setState({
                comments: nextProps.comments
            })
        }
    }

    handleChangeContentInput = (text) => {
        this.setState({ contentInput: text });
    }

    commentFunc = () => {

        Alert.alert(this.state.userData.id);
        // var userId = this.state.userData.id;
        // var userName = this.state.userData.name;
        // if (this.state.userData) {
        //     if (this.state.contentInput === '') {

        //     }
        //     else {
        //         var comment = {
        //             content: this.state.contentInput,
        //             chapter_id: this.props.route.params.chapter_id,
        //             user_id: 
        //         }
        //         var newComment = {
        //             content: this.state.contentInput,
        //             name: userName
        //         }
        //         var tmp = this.state.comments;
        //         tmp.unshift(newComment);
        //         this.setState({ comments: tmp })
        //         this.props.commentFunc(comment);
        //         this.state.contentInput = "";
        //     }
        // }
        // else {
        //     Alert.alert('Bạn cần phải đăng nhập để bình luận!');
        // }
    }

    getListComment() {

        return listComment;
    }

    render() {
        const listComment = this.state.comments.map((comment, index) => {
            return (
                <View style={styles.UserComment}>
                    <View style={styles.viewContentUser}>
                        <Icon name="ios-person" size={40} color='#ccc' />
                    </View>
                    <View style={styles.viewCommentRight}>
                        <View style={styles.viewInfoUser}>
                            <Text style={styles.viewNameUser}>{comment.name}</Text>
                            <Text style={{ color: 'blue' }}>{moment(comment.created_at).fromNow()}</Text>
                        </View>
                        <View style={styles.viewComment}>
                            <Text>{comment.content}</Text>
                        </View>
                    </View>
                </View>
            )
        })
        const listImages = this.props.images.map((img, index) => {
            return <Image key={index} style={styles.ImageStyle} source={{ uri: img.path_image }} />
        })
        return (
            <ScrollView>
                <View style={styles.container}>
                    {listImages}
                </View>
                <View style={styles.ViewStyle}>
                    <TouchableOpacity>
                        <Text style={styles.StyleBackNext}>
                            BACK
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styles.StyleBackNext}>
                            NEXT
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={{
                    marginTop: 30,
                    marginBottom: 10,
                    marginHorizontal: 10,
                    borderBottomWidth: 1,
                    borderColor: 'black'
                }}>
                    <Text style={{
                        fontWeight: '700',
                        fontSize: 30
                    }}>Bình luận</Text>
                </View>
                <View style={styles.commentSection}>
                    <TextInput
                        style={styles.input}
                        placeholder="Nhập bình luận nè..."
                        multiline={true}
                        numberOfLines={4}
                        onChangeText={this.handleChangeContentInput}
                        value={this.state.contentInput}
                    />
                    <TouchableOpacity onPress={() => { this.commentFunc() }}>
                        <Icon style={styles.commentIcon} name="ios-paper-plane" size={40} color="rgb(12, 138, 235)" />
                    </TouchableOpacity>
                </View>
                <View style={styles.UsersCommentArea}>

                    {listComment}
                </View>
            </ScrollView>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'gray',
        flexDirection: 'column',
    },
    ImageStyle: {
        width: 350,
        height: 480,
        marginTop: 7,

    },
    ViewStyle: {
        paddingTop: 5,
        paddingBottom: 5,
        marginVertical: 10,
        marginHorizontal: 5,
        flexDirection: 'row',
        alignItems: 'center',
        height: 60,
        backgroundColor: 'black'
    },
    StyleBackNext: {
        alignItems: 'center',
        marginLeft: 80,
        marginRight: 80,
        color: 'white',
    },
    commentSection: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 5
    },
    commentIcon: {
        paddingRight: 10,
    },
    input: {
        flex: 1,
        paddingRight: 10,
        paddingLeft: 10,
        backgroundColor: '#fff',
        color: '#424242',
    },
    UsersCommentArea: {
        backgroundColor: '#fff',
        marginVertical: 10,
        marginHorizontal: 5
    },
    UserComment: {
        paddingVertical: 10,
        flex: 1,
        flexDirection: 'row',
    },
    viewComment: {
        backgroundColor: 'rgb(245, 245, 245)',
        padding: 10,
        marginTop: 20,
        borderRadius: 16
    },
    viewNameUser: {
        fontSize: 15,
        fontWeight: '700',
        borderBottomWidth: 1,
        borderColor: 'black'
    },
    viewInfoUser: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    viewCommentRight: {
        marginLeft: 10,
        width: 260
    },
    viewContentUser: {
        backgroundColor: 'yellow',
        marginLeft: 10,
        width: 45,
        height: 45,
        alignItems: 'center',
        borderRadius: 50
    }
})

const mapStateToProps = (state) => {
    return {
        images: state.images,
        comments: state.comments,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getImages: (chapter_id) => {
            dispatch(getListImgs(chapter_id))
        },
        getComments: (id) => {
            dispatch(actGetCommentsRequest(id))
        },
        commentFunc: (comment) => {
            dispatch(actAddCommentRequest(comment))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChapterScreen);