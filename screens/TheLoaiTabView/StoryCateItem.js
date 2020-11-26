import React, { Component } from 'react';
import { FlatList, View } from 'react-native';
import StoryItemChiTiet from '../../components/StoryItemChiTiet';

class StoryCateItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            StoryArray: [
                { id: 1, name: 'Doremon 1', type: 'Hành Động', watch: 6553, like: 2 },
                { id: 2, name: 'Doremon 2', type: 'Hoạt Hình', watch: 2995, like: 3 },

            ]
        }
    }
    render() {
        console.log(this.props.cate)
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



export default StoryCateItem;