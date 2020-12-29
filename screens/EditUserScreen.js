import AsyncStorage from '@react-native-community/async-storage';
import React, { Component } from 'react';
import { Alert, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import { actEditUserRequest } from '../actions/userCurrent';
class EditUserScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userData: [],
            changeStatus: false,
            nameUser: '',
            isNull: false,
            messErr: ''
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

    // logOutClick = async () => {
    //     try {
    //         await AsyncStorage.removeItem('isLogin');
    //         await AsyncStorage.removeItem('userLogin');
    //         this.props.navigation.navigate('Login');
    //         window.location.reload();
    //     }
    //     catch (error) {
    //         console.log(error)
    //     }
    // }

    handleChangeUserName = (text) => {
        this.setState({ nameUser: text })
    }

    EditClick = async () => {
        if (this.state.nameUser==='') {
            // Alert.alert('Tên không được để trống!');
            console.log('Tên không được để trống!');
        } else {
            var user = {
                id: this.state.userData.id,
                name: this.state.nameUser,
                email: this.state.userData.email,
                email_verified_at: this.state.userData.email_verified_at,
                role: this.state.userData.role,
                created_at: this.state.userData.created_at,
                updated_at: this.state.userData.updated_at
            }
            this.props.editUser(user.id,user);
            try {
                await AsyncStorage.setItem('userLogin', JSON.stringify(user));
            } catch (error) {
                console.log(error)
            }
            window.location.reload();
        }
        this.props.navigation.navigate('Cá Nhân')
    }

    render() {
        const { navigation } = this.props;
        // const { nameUser } = this.props.route.params;
        // const { emailUser } = this.props.route.params;
        return (
            <ScrollView>
                {/* {this.state.userData.length !== 0 ? ( */}
                <View>
                    <View style={styles.container}>
                        <Text style={styles.Texttitle}>
                            Sửa thông tin cá nhân
                        </Text>
                    </View>
                    <View style={styles.viewInfor}>
                        <View>
                            <Text style={styles.TextInfo}>tên: </Text>
                        </View>
                        <View style={styles.viewTextInfo}>
                            <TextInput style={styles.InputStyle} placeholder={'Tên cũ: ' + this.state.userData.name + '...'} onChangeText={this.handleChangeUserName} value={this.state.nameUser} />
                        </View>
                    </View>
                    {(this.state.nameUser === '') ? (
                        <View style={{
                            alignItems: 'flex-end',
                            marginRight: 10
                        }}>
                            <Text style={{
                                color: 'red'
                            }}>Tên không được bỏ trống!</Text>
                        </View>
                    ) : []}
                    {/* <View style={styles.viewInfor}>
                        <View>
                            <Text style={styles.TextInfo}>email: </Text>
                        </View>
                        <View style={styles.viewTextInfo}>
                            <TextInput style={styles.InputStyle} value={emailUser} />
                        </View>
                    </View> */}
                    <TouchableOpacity onPress={this.EditClick}>
                        <View style={styles.ViewBtn}>
                            <Text style={styles.TexttitleLogout}>
                                Sửa
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
                {/* ) : (
                        <ActivityIndicator />
                    )} */}

            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: 'black',
        paddingBottom: 15
    },
    ViewBtn: {
        marginTop: 20,
        display: 'flex',
        alignItems: 'center',
        // justifyContent: 'center',
        // elevation: 1
    },
    Texttitle: {
        marginTop: 15,
        textTransform: "uppercase",
        color: 'white'
    },

    TextInfo: {
        marginLeft: 20,
        textTransform: "uppercase",
        paddingVertical: 15,
        borderRadius: 8,
        width: 50
    },
    infoUser: {
        backgroundColor: '#ccc',
        borderRadius: 8,
        paddingHorizontal: 10,
        marginVertical: 15,
    },
    viewInfor: {
        backgroundColor: 'white',
        // marginVertical: 8,
        height: 50,
        flexDirection: 'row',
        marginTop: 20,
    },
    viewTextInfo: {
        alignItems: 'center'
    },
    InputStyle: {
        height: 20,
        backgroundColor: 'white',
        fontSize: 18,
        flex: 1,
        paddingHorizontal: 8,
        borderWidth: 1,
        borderColor: '#ccc',
        width: 250
    },
    TexttitleLogout: {
        marginTop: 15,
        textTransform: "uppercase",
        backgroundColor: 'black',
        color: 'white',
        paddingHorizontal: 35,
        paddingVertical: 10,
        borderRadius: 8,
        height: 40,
        width: 100,
        // alignItems: 'center'
    },
})
const mapDispatchToProps = (dispatch) => {
    return {
        editUser: (user_id, user) => {
            dispatch(actEditUserRequest(user_id, user))
        },
    }
}
export default connect(null, mapDispatchToProps)(EditUserScreen);