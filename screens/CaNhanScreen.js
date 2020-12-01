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
            window.location.reload();
            this.props.navigation.navigate('Login');
        }
        catch(error) {
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
                        <Text style={styles.TextInfo}>TÊN: <Text style={styles.infoUser}>{this.state.userData.name}</Text></Text>
                    </View>
                    <View style={styles.viewInfor}>
                        <Text style={styles.TextInfo}>Email: <Text style={styles.infoUser}>{this.state.userData.email}</Text></Text>
                    </View>
                    <TouchableOpacity>
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
    },
    ViewBtn: {
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    Texttitle: {
        marginTop: 15,
        textTransform: "uppercase",
    },
    TexttitleLogout: {
        marginTop: 15,
        textTransform: "uppercase",
        backgroundColor: 'black',
        color: 'white',
        paddingHorizontal: 8,
        paddingVertical: 10,
        borderRadius: 8,
        height: 40
    },
    TextInfo: {
        marginVertical: 10,
        marginLeft: 20,
        textTransform: "uppercase",
        display: 'flex',
    },
    infoUser: {
        backgroundColor: '#ccc',
        borderRadius: 8,
        paddingHorizontal: 5,
    },
    viewInfor: {
        backgroundColor: 'white',
        marginVertical: 8
    }
})
export default CaNhanScreen;