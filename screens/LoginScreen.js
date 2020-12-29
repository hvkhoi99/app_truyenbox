import AsyncStorage from '@react-native-community/async-storage';
import Axios from 'axios';
import React, { Component } from 'react';
import { ActivityIndicator, Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { connect } from 'react-redux';
import { isLoginTrue } from '../actions/login';
import fbImage from '../assets/facebook.png';
import ggImage from '../assets/google.png';
import * as Config from '../utils/Config';

class LoginScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            msg: "",
            errMsgEmail: "",
            errMsgPwd: "",
            errMsg: "",
            userInput: '',
            passInput: '',
            // userData: []
        };
    }

    // componentDidMount = async () => {
    //     try {
    //         const value = await AsyncStorage.getItem('userLogin');
    //         if (value !== null) {
    //             this.setState({ userData: JSON.parse(value) })
    //         } else {
    //             this.setState({ userData: [] })
    //         }
    //     }
    //     catch (error) {
    //         console.log(error)
    //     }
    // }


    handleChangeUserInput = (text) => {
        this.setState({ userInput: text });
    }

    handleChangePassInput = (text) => {
        this.setState({ passInput: text });
    }

    loginClick = () => {
        Axios.post(`${Config.API_URL}/api/login-user`, {
            email: this.state.userInput,
            password: this.state.passInput,
        }).then(async response => {
            if (response.data.status === 200) {
                try {
                    await AsyncStorage.setItem('userLogin', JSON.stringify(response.data.data));
                    this.props.addUserToAsync(response.data.data);
                    // RNRestart.Restart();
                    // { (this.state.userData.length !== 0) ? this.props.navigation.navigate('Trang Chủ') : <ActivityIndicator /> }
                    window.location.reload;
                    this.props.navigation.navigate('Cá Nhân');
                } catch (error) {
                    console.log(error)
                }
                this.props.setLoginTrue();
            }
            else {
                if (response.data.status === "failed") {
                    if (response.data.success === undefined) {
                        this.setState({
                            errMsgEmail: response.data.validation_error.email,
                            errMsgPwd: response.data.validation_error.password,
                            msg: "",
                            errMsg: "",
                        });
                    }
                    else {
                        this.setState({
                            errMsg: response.data.message,
                            errMsgEmail: "",
                            errMsgPwd: "",
                            msg: ""
                        });
                    }
                }
            }
        }).catch((error) => {
            console.log(error.response);
        });
    }



    render() {
        const { navigation } = this.props;
        return (
            <SafeAreaView>
                <View style={styles.containerLogintext}>
                    <Text style={styles.TextLoginStyle}>Login</Text>
                </View>
                <View style={{
                    paddingBottom: 5,
                    display: 'flex',
                    justifyContent: 'space-between',
                    flexDirection: 'row'
                }}>
                    <Text style={{ marginLeft: 10 }}>Tài khoản</Text>
                    <Text style={{
                        color: 'red',
                        marginRight: 10
                    }}>{this.state.errMsgEmail}</Text>
                </View>
                <View style={styles.ViewInputStyle}>
                    <TextInput style={styles.InputStyle} placeholder='Nhập email...'
                        onChangeText={this.handleChangeUserInput} value={this.state.userInput} />
                </View>
                <View style={{
                    paddingBottom: 5,
                    display: 'flex',
                    justifyContent: 'space-between',
                    flexDirection: 'row'
                }}>
                    <Text style={{ marginLeft: 10, }}>Mật khẩu</Text>
                    <Text style={{
                        color: 'red',
                        marginRight: 10
                    }}>{this.state.errMsgPwd}</Text>
                </View>
                <View style={styles.ViewInputStyle}>
                    <TextInput
                        secureTextEntry
                        keyboardType="default"
                        style={styles.InputStyle} placeholder='Nhập password...' onChangeText={this.handleChangePassInput} value={this.state.passInput} />
                </View>
                <View style={{
                    display: 'flex',
                    alignItems: 'center'
                }}>
                    <TouchableOpacity onPress={this.loginClick}>
                        <View style={styles.containerdangnhap}>
                            <Text style={styles.TextDangNhap}>
                                Đăng nhập
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.viewErrMsg}>
                    <Text style={{
                        color: 'red',
                        marginTop: 5,
                        paddingBottom: 5
                    }}>{this.state.errMsg}</Text>
                </View>
                <View style={styles.viewErrMsg}>
                    <Text style={{
                        color: 'green',
                        marginTop: -15,
                        paddingBottom: 5
                    }}>{this.state.msg}</Text>
                </View>
                <TouchableOpacity style={styles.containerLogintext1}>
                    <Text style={{
                        marginBottom: 15,
                        color: 'rgb(47, 119, 252)',
                        borderBottomColor: 'rgb(47, 119, 252)',
                        borderBottomWidth: 1,
                    }}>Quên mật khẩu ?</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.containerLogintext1}
                    onPress={() => navigation.navigate("Signup")}
                >
                    <Text style={{
                        marginBottom: 15,
                        color: 'rgb(47, 119, 252)',
                        borderBottomColor: 'rgb(47, 119, 252)',
                        borderBottomWidth: 1,
                        marginBottom: 20
                    }}>Đăng ký</Text>
                </TouchableOpacity>
                <View style={{
                    flexDirection: 'row',
                    display: 'flex',
                    justifyContent: 'space-evenly'
                }}>
                    <TouchableOpacity>
                        <View style={styles.containerFB}>
                            <Image style={{ marginLeft: 5, height: 35, width: 35 }} source={fbImage} />
                            <Text style={{ marginLeft: 5, color: 'white', }}>
                                Đăng nhập bằng
                                Facebook
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={styles.containerGG}>
                            <Image style={{ marginLeft: 5, height: 35, width: 35 }} source={ggImage} />
                            <Text style={{ marginLeft: 5 }}>
                                Đăng nhập bằng
                                Google
                        </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: 360,
        height: 150,
        alignItems: 'center',
        paddingTop: 20,
        backgroundColor: 'white'
    },
    containerGG: {
        height: 50,
        width: 150,
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 8,
        borderColor: '#ccc',
        borderWidth: 1
    },
    containerFB: {
        height: 50,
        width: 150,
        backgroundColor: 'darkblue',
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 8
    },
    WallpagerStyle: {
        height: 100,
        width: 350,
    },
    TextDangNhap: {
        paddingVertical: 15,
        textTransform: "uppercase",
        fontWeight: '700',
        color: 'white',
    },
    containerdangnhap: {
        backgroundColor: 'black',
        height: 50,
        width: 150,
        alignItems: 'center',
        marginBottom: 25,
        marginTop: 10,
        borderRadius: 8,
        borderWidth: 1
    },
    containerLogintext: {
        alignItems: 'center',
        backgroundColor: 'black',
        paddingBottom: 10,
        marginBottom: 10

    },
    containerLogintext1: {
        alignItems: 'center',
    },
    TextLoginStyle: {
        marginTop: 5,
        textTransform: "uppercase",
        fontWeight: '700',
        fontSize: 23,
        color: 'white',

    },
    InputStyle: {
        height: 30,
        backgroundColor: 'white',
        fontSize: 18,
        flex: 1,
        paddingHorizontal: 8
    },
    ViewInputStyle: {
        flexDirection: 'row',
        width: 340,
        alignItems: 'center',
        marginBottom: 30,
        borderWidth: 1,
        marginLeft: 10,
        borderColor: '#ccc'
    },
    viewErrMsg: {
        alignItems: 'center'
    }
});

const mapStateToProps = (state) => {
    return {
        checkLogin: state.checkLogin
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        setLoginTrue: () => {
            dispatch(isLoginTrue())
        },
        addUserToAsync: (user) => {
            dispatch({ type: 'ADD_USER_CURRENT', user })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);