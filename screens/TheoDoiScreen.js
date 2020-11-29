import React, { Component } from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { FlatList, StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import DangTheoDoi from './TheoDoiTabView/DangTheoDoi';
import LichSu from './TheoDoiTabView/LichSu';

class TheoDoiScreen extends Component {
    render() {
        const Tab = createMaterialTopTabNavigator();
        return (
            <ScrollView>
                <Tab.Navigator
                    sceneContainerStyle={{
                        backgroundColor: '',
                    }}
                    tabBarOptions={{
                        scrollEnabled: true,
                        style: {
                            elevation: 0,
                            marginBottom: 10,
                            height: 40,
                        },

                        tabStyle: { width: 187, borderWidth: 0 },
                    }}>
                    <Tab.Screen name="Đang Theo Dõi" component={DangTheoDoi} />
                    <Tab.Screen name="Lịch Sử" component={LichSu} />
                </Tab.Navigator>
            </ScrollView>

        );
    }
}

export default TheoDoiScreen;