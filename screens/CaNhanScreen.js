import AsyncStorage from '@react-native-community/async-storage';
import React, { Component } from 'react';
import { ActivityIndicator, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
class CaNhanScreen extends Component {

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

    logOutClick = async () => {
        try {
            await AsyncStorage.removeItem('isLogin');
            await AsyncStorage.removeItem('userLogin');
            this.props.navigation.navigate('Login');
            window.location.reload();
        }
        catch (error) {
            console.log(error)
        }
    }

    render() {
        const { navigation } = this.props;
        return (
            <ScrollView>
                {/* {this.state.userData.length !== 0 ? ( */}
                <View>
                    <View style={styles.container}>
                        <Text style={styles.Texttitle}>
                            Thông Tin Cá Nhân
                        </Text>
                    </View>
                    <View style={styles.viewInfor}>
                        <View>
                            <Text style={styles.TextInfo}>tên: </Text>
                        </View>
                        <View style={styles.viewTextInfo}>
                            <Text style={styles.infoUser}>{this.state.userData.name}</Text>
                        </View>
                    </View>
                    <View style={styles.viewInfor}>
                        <View>
                            <Text style={styles.TextInfo}>email: </Text>
                        </View>
                        <View style={styles.viewTextInfo}>
                            <Text style={styles.infoUser}>{this.state.userData.email}</Text>
                        </View>
                    </View>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("EditUser", {
                            nameUser: this.state.userData.name,
                            emailUser: this.state.userData.email
                        })}>
                        <View style={styles.ViewBtn}>
                            <Text style={styles.TexttitleLogout}>
                                Sửa Thông tin cá nhân
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <View style={styles.ViewBtn}>
                        <TouchableOpacity onPress={this.logOutClick}>
                            <Text style={styles.TexttitleLogout}>
                                Đăng Xuất
                            </Text>
                        </TouchableOpacity>
                    </View>
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
        justifyContent: 'center',
        // elevation: 1
    },
    Texttitle: {
        marginTop: 15,
        textTransform: "uppercase",
        color: 'white'
    },
    TexttitleLogout: {
        marginTop: 15,
        textTransform: "uppercase",
        backgroundColor: 'black',
        color: 'white',
        paddingHorizontal: 8,
        paddingVertical: 10,
        borderRadius: 8,
        height: 40,
    },
    TextInfo: {
        marginLeft: 20,
        textTransform: "uppercase",
        paddingVertical: 15,
        borderRadius: 8,
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
    }
})
export default CaNhanScreen;