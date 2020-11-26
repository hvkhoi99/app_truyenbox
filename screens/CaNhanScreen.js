import React, { Component } from 'react';
import { TouchableOpacity, FlatList, StyleSheet, Text, View, Image, ScrollView } from 'react-native';
class CaNhanScreen extends Component {
    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <Text style={styles.Texttitle}>
                        Thông Tin Cá Nhân
                    </Text>
                </View>
                <View>
                    <Text style={styles.TextInfo}>TÊN                : </Text>
                    <Text style={styles.TextInfo}>NGÀY SINH    :</Text>
                    <Text style={styles.TextInfo}>GIỚI TÍNH       :</Text>
                </View>
                <TouchableOpacity>
                    <View style={styles.ViewBtn}>
                        <Text style={styles.Texttitle}>
                            Sửa Thông tin cá nhân
                        </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.ViewBtn}>
                        <Text style={styles.Texttitle}>
                            Đăng Xuất
                        </Text>
                    </View>
                </TouchableOpacity>
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
        backgroundColor: 'white',
    },
    Texttitle: {
        marginTop: 15,
        textTransform: "uppercase",
        // fontWeight: '700',
    },
    TextInfo: {
        marginTop: 30,
        marginLeft: 20,
        textTransform: "uppercase",
        // fontWeight: '400',
    }
})
export default CaNhanScreen;