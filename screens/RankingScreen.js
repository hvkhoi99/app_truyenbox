import React, { Component } from 'react';
import SearchBar from '../components/SearchBar';
import { FlatList, StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Week from './RankingTabView/Week';
import Month from './RankingTabView/Month';
import Year from './RankingTabView/Year';
class RankingScreen extends Component {

    render() {
        const Tab = createMaterialTopTabNavigator();
        return (
            <ScrollView>
                <SearchBar />
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

                        tabStyle: { width: 130, borderWidth: 0 },
                    }}>
                    <Tab.Screen name="BXH Tuần" component={Week} />
                    <Tab.Screen name="BXH Tháng" component={Month} />
                    <Tab.Screen name="BXH Năm" component={Year} />
                </Tab.Navigator>
            </ScrollView>

        );
    }
}

export default RankingScreen;