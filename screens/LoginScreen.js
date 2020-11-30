import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import ggImage from '../assets/google.png'
import fbImage from '../assets/facebook.png'
class LoginScreen extends Component {
    render() {
        const { navigation } = this.props;
        return (
            <ScrollView>
                <View style={styles.container}>
                    <Image style={styles.WallpagerStyle} source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfhUmVRshuLK9f2RgMCyybzb8enqKExNbbew&usqp=CAU' }} />
                </View>
                <View style={styles.containerLogintext}>
                    <Text style={styles.TextLoginStyle}>Login</Text>
                </View>
                <View style={styles.ViewInputStyle}>
                    <Text style={{ marginLeft: 10 }}>Tài khoản  :</Text>
                    <TextInput style={styles.InputStyle} />
                </View>
                <View style={styles.ViewInputStyle}>
                    <Text style={{ marginLeft: 10, }}>Mật khẩu  :</Text>
                    <TextInput style={styles.InputStyle} />
                </View>
                <TouchableOpacity onPress={() => navigation.navigate('Cá Nhân')}>
                    <View style={styles.containerdangnhap}>
                        <Text style={styles.TextDangNhap}>
                            Đăng nhập
                        </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.containerLogintext}>
                    <Text style={{ marginBottom: 15 }}>Quên mật khẩu ?</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.containerLogintext}>
                    <Text style={{ marginBottom: 15 }}>Đăng ký</Text>
                </TouchableOpacity>
                <View style={{ flexDirection: 'row', }}>
                    <TouchableOpacity style={{ marginHorizontal: 25 }}>
                        <View style={styles.containerFB}>
                            <Image style={{ height: 35, width: 35 }} source={fbImage} />
                            <Text style={{marginLeft :5,color:'white',}}>
                                Đăng nhập bằng
                                Facebook
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={styles.containerGG}>
                        <Image style={{ height: 35, width: 35 }} source={ggImage} />
                            <Text style={{marginLeft :5}}>
                                Đăng nhập bằng
                                Google
                        </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
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
    },
    containerFB: {
        height: 50,
        width: 150,
        backgroundColor: 'darkblue',
        flexDirection: 'row',
        alignItems: 'center',
        },
    WallpagerStyle: {
        height: 150,
        width: 160,
    },
    TextDangNhap: {
        textTransform: "uppercase",
        fontWeight: '700',
        color: 'white',
    },
    containerdangnhap: {
        marginLeft: 140,
        backgroundColor: 'black',
        height: 30,
        width: 100,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 25,
    },
    containerLogintext: {
        alignItems: 'center',
    },
    TextLoginStyle: {
        marginTop: 5,
        textTransform: "uppercase",
        fontWeight: '600',
        fontSize: 23,
        marginBottom: 20,
    },
    InputStyle: {
        height: 30, backgroundColor: 'white', fontSize: 18, marginLeft: 15, flex: 1
    },
    ViewInputStyle: {
        flexDirection: 'row', width: 340,
        alignItems: 'center',
        marginBottom: 30,
    }
});

export default LoginScreen;