import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import StoryItemChiTiet from '../../components/StoryItemChiTiet';
class Tuesday extends Component {
    constructor(props) {
        super(props);
        this.state = {
            StoryArray: [
                { id: 1, name: 'Doremon 1',type :'Hành Động', watch:6553, like :2 },
                { id: 2, name: 'Doremon 2',type :'Hoạt Hình', watch:2995, like :3 },
                { id: 3, name: 'Doremon 3',type :'Viễn Tưởng', watch:1234, like :111 },
                { id: 4, name: 'Doremon 4',type :'Hành Động', watch:1233, like :89 },
                { id: 5, name: 'Doremon 5',type :'Hành Động', watch:2222, like :100 },
                { id: 6, name: 'Doremon 6',type :'Hoạt Hình', watch:2222, like :44 },
                { id: 7, name: 'Doremon 7',type :'Phiêu Lưu', watch:2264, like :222 },
                { id: 8, name: 'Doremon 8',type :'Hành Động', watch:2299, like :115 },

            ]
        }
    }
    render() {
        const { navigation } = this.props;
        const { StoryArray } = this.state;
        return (
            <View >
                <FlatList
                    numColumns={1}
                    data={StoryArray}
                    renderItem={({ item }) => <StoryItemChiTiet story={item} keyExtractor={item => `${item.id}`}
                        onPressXayDung={() => navigation.navigate('Thông Tin Truyện')} />}
                />
            </View>
        );
    }
}

export default Tuesday;