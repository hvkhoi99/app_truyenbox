import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { getListCategories } from '../actions/category';
import { getStoriesByCategoryId } from '../actions/story';
import SearchBar from '../components/SearchBar';
import Cate_Action from './TheLoaiTabView/Cate_Action';
import Cate_Comedy from './TheLoaiTabView/Cate_Comedy';
import Cate_Fantasy from './TheLoaiTabView/Cate_Fantasy';
import Cate_Kungfu from './TheLoaiTabView/Cate_Kungfu';
import Cate_Magic from './TheLoaiTabView/Cate_Magic';
import Cate_Manga from './TheLoaiTabView/Cate_Manga';
import Cate_Manhua from './TheLoaiTabView/Cate_Manhua';
import Cate_Manhwa from './TheLoaiTabView/Cate_Manhwa';
import Cate_Romance from './TheLoaiTabView/Cate_Romance';

const Tab = createMaterialTopTabNavigator();
class TheLoaiScreen extends Component {

    // componentDidMount() {
    //     this.props.getListCategories();
    // }

    render() {
        const {navigation} = this.props;
        return (
            <ScrollView>
                <SearchBar />
                {/* {this.props.categories.length !== 0 ? ( */}
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

                    <Tab.Screen name="Fantasy" children={() => <Cate_Fantasy navigation={navigation} nameCate="Fantasy" />} />
                    <Tab.Screen name="Comedy" children={() => <Cate_Comedy navigation={navigation} nameCate="Comedy" />} />
                    <Tab.Screen name="Manga" children={() => <Cate_Manga navigation={navigation} nameCate="Manga" />} />
                    <Tab.Screen name="Romance" children={() => <Cate_Romance navigation={navigation} nameCate="Romance" />} />
                    <Tab.Screen name="Action" children={() => <Cate_Action navigation={navigation} nameCate="Action" />} />
                    <Tab.Screen name="Magic" children={() => <Cate_Magic navigation={navigation} nameCate="Magic" />} />
                    <Tab.Screen name="Kungfu" children={() => <Cate_Kungfu navigation={navigation} nameCate="Kungfu" />} />
                    <Tab.Screen name="Manhwa" children={() => <Cate_Manhwa navigation={navigation} nameCate="Manhwa" />} />
                    <Tab.Screen name="Manhua" children={() => <Cate_Manhua navigation={navigation} nameCate="Manhua" />} />

                </Tab.Navigator>
                {/* ) : (
                        <ActivityIndicator />
                    )} */}

            </ScrollView>

        );
    }
}

// const mapStateToProps = (state) => {
//     return {
//         categories: state.categories,
//         storiesByCateId: state.storiesByCateId
//     }
// }

// const mapDispatchToProps = (dispatch) => {
//     return {
//         getListCategories: () => {
//             dispatch(getListCategories())
//         },
//         getStoriesByCategoryId: (cate_id) => {
//             dispatch(getStoriesByCategoryId(cate_id))
//         }
//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(TheLoaiScreen);
export default TheLoaiScreen;


