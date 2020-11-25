import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import SearchBar from '../components/SearchBar';
import Monday from './DailyTabView/Monday';
import Tuesday from './DailyTabView/Tuesday';
import Wednesday from './DailyTabView/Wednesday';
import Thursday from './DailyTabView/Thursday';
import Friday from './DailyTabView/Friday';
import Saturday from './DailyTabView/Saturday';
import Sunday from './DailyTabView/Sunday';
class DailyyyScreen extends Component {

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

                    tabStyle: {width :150,borderWidth:0},
                }}>
                    <Tab.Screen name="Monday" component={Monday} />
                    <Tab.Screen name="Tuesday" component={Tuesday} />
                    <Tab.Screen name="Wednesday" component={Wednesday} />
                    <Tab.Screen name="Thursday" component={Thursday} />
                    <Tab.Screen name="Friday" component={Friday} />
                    <Tab.Screen name="Saturday" component={Saturday} />
                    <Tab.Screen name="Sunday" component={Sunday} />
                </Tab.Navigator>
            </ScrollView>

        );
    }

}

export default DailyyyScreen;