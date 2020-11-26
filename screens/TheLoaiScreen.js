import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React, { Component } from 'react';
import { ScrollView, ActivityIndicator, Alert } from 'react-native';
import { View } from 'react-native-animatable';
import { connect } from 'react-redux';
import { getListCategories } from '../actions/category';
import SearchBar from '../components/SearchBar';
import StoryCateItem from './TheLoaiTabView/StoryCateItem';
import Hot from './TheLoaiTabView/StoryCateItem';

const Tab = createMaterialTopTabNavigator();
class TheLoaiScreen extends Component {

    componentDidMount() {
        this.props.getListCategories();
    }

    alertClick = () => {
        alert("oke")
    }

    // renderCate = () => {
    //     this.props.categories.map((cate, index) => {
    //         return (
    //             <Tab.Screen key={index} name={cate.name} component={Hot} />
    //         )
    //     })
    // }

    render() {
        const { navigation } = this.props;
        return (
            <ScrollView>
                <SearchBar />
                {this.props.categories.length !== 0 ? (
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

                            tabStyle: { width: 100, borderWidth: 0 },
                        }}>
                        {
                            this.props.categories.map((cate, index) => {
                                return (
                                    <Tab.Screen
                                        key={index}
                                        name={cate.name}
                                        children={() => <StoryCateItem cate={cate} />}
                                    />
                                )
                            })
                        }
                    </Tab.Navigator>
                ) : (
                        <ActivityIndicator />
                    )}

            </ScrollView>

        );
    }
}

const mapStateToProps = (state) => {
    return {
        categories: state.categories
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getListCategories: () => {
            dispatch(getListCategories())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TheLoaiScreen)

