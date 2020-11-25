import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import Hot from './TheLoaiTabView/Hot';
import New from './TheLoaiTabView/New';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Nam from './TheLoaiTabView/Nam';
import Bede from './TheLoaiTabView/Bede';
import Nu from './TheLoaiTabView/Nu';
class TheLoaiScreen extends Component {

    render() {
        const Tab = createMaterialTopTabNavigator();
        return (
            <ScrollView>
                <SearchBar />
                <Tab.Navigator
                sceneContainerStyle={{
                    backgroundColor:'',
                }}
                tabBarOptions={{
                    scrollEnabled : true,
                    style : {
                        elevation : 0,
                        marginBottom : 10,
                        height :40,
                    },

                    tabStyle: {width :100,borderWidth:0},
                }}>
                    <Tab.Screen name="Hot" component={Hot} />
                    <Tab.Screen name="New" component={New} />
                    <Tab.Screen name="Cho Nam" component={Nam} />
                    <Tab.Screen name="Cho Nữ" component={Nu} />
                    <Tab.Screen name="Cho BêĐê" component={Bede} />
                </Tab.Navigator>
            </ScrollView>

        );
    }
}


export default TheLoaiScreen;