import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import SearchBar from '../components/SearchBar';
import StoryItemChiTiet from '../components/StoryItemChiTiet';


export default class SearchPage extends Component {

    render() {
        const { listStorySearch } = this.props.route.params;
        const { navigation } = this.props;
        return (
            <View>
                <SearchBar navigation={navigation} />
                {listStorySearch.length !== 0 ? (
                    <FlatList
                        style={{
                            marginTop: 50
                        }}
                        data={listStorySearch}
                        renderItem={({ item }) =>
                            <StoryItemChiTiet
                                name={item.name}
                                story={item}
                                onPressXayDung={() => navigation.navigate('Thông Tin Truyện', { story: item })}
                            />}
                        keyExtractor={item => `${item.id}`}
                    />
                ) : (
                        <View style={{
                            marginTop: 100,
                            backgroundColor: 'white',
                            marginHorizontal: 10,
                            height: 100,
                            elevation: 1,
                            shadowColor: '#000',
                            shadowOpacity: 0.3,
                            shadowRadius: 10,
                            // shadowOffset: { width: 0, height: 0 },
                        }}>
                            <View style={{
                                alignItems: 'center',
                                marginVertical: 30
                            }}>
                                <Text style={styles.textFeedBack}>Thông tin bạn vừa nhập không đúng</Text>
                                <Text style={styles.textFeedBack}>hoặc không có thông tin về từ khóa!</Text>
                            </View>
                        </View>
                    )}

            </View>
        )
    }
}

const styles = StyleSheet.create({
    textFeedBack: {
        fontWeight: '700',
        fontSize: 18
    }
})
