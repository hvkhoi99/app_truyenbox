import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import Day from './RankingTabView/Day';
import Month from './RankingTabView/Month';
import Week from './RankingTabView/Week';
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
                    <Tab.Screen name="BXH Ngày" component={Day} />
                    <Tab.Screen name="BXH Tuần" component={Week} />
                    <Tab.Screen name="BXH Tháng" component={Month} />
                </Tab.Navigator>
            </ScrollView>

        );
    }
}

export default RankingScreen;