import AsyncStorage from '@react-native-community/async-storage';
import React, { Component } from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import { connect } from 'react-redux';
import { actDeleteStoryFollow, actGetStoriesFollowRequest } from '../../actions/follow';
import StoryActionFollow from '../../components/StoryActionFollow';
class DangTheoDoi extends Component {

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
        const user_id = this.state.userData.id;
        this.props.getStories(user_id);
    }

    render() {
        const { navigation } = this.props;
        return (
            this.state.userData.length !== 0 ? (
                <View >
                    <FlatList
                        numColumns={1}
                        data={this.props.getStoriesFollow}
                        renderItem={({ item, index }) => <StoryActionFollow name={item.name} story={item} index={index}
                            onPressXayDung={() => navigation.navigate('Thông Tin Truyện', { story: item })} />}
                        keyExtractor={item => `${item.id}`}
                    />
                </View>
            ) : (
                    <View style={{
                        display: 'flex',
                        alignItems: 'center'
                    }}>
                        <Text style={{
                            display: 'flex',
                            justifyContent: 'center',
                            marginTop: 50
                        }}>Để thực hiện chức năng này, bạn cần phải Đăng Nhập!</Text>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')}>
                            <View style={{
                                backgroundColor: 'white',
                                height: 50,
                                width: 100,
                                borderRadius: 5,
                                marginTop: 20,
                                borderWidth: 1,
                                borderColor: '#ccc',
                                alignItems: 'center',
                            }}>
                                <Text style={{
                                    color: 'rgb(47, 119, 252)',
                                    marginVertical: 13,
                                    fontWeight: '700',
                                    borderBottomWidth: 1,
                                    borderBottomColor: 'rgb(47, 119, 252)'
                                }}
                                >Đăng nhập</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                )
        );
    }
}

const mapStateToProps = (state) => {
    return {
        getStoriesFollow: state.getStoriesFollow
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getStories: (user_id) => {
            dispatch(actGetStoriesFollowRequest(user_id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DangTheoDoi);