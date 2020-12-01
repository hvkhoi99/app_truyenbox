import React, { Component } from 'react';
import { ActivityIndicator, FlatList, View } from 'react-native';
import { connect } from 'react-redux';
import { getListStoriesRankMonth } from '../../actions/rankStories';
import StoryItemChiTiet1 from '../../components/StoryItemChiTiet1';

class Month extends Component {

    componentDidMount() {
        this.props.getStoriesRankMonth(2020, 11, 5)
    }

    render() {
        const { navigation } = this.props;
        // const { StoryArray } = this.state;
        console.log(this.props.storiesRankMonth)
        return (
            <View >
                {this.props.storiesRankMonth !== 0 ? (
                    <FlatList
                        numColumns={1}
                        data={this.props.storiesRankMonth}
                        renderItem={({ item }) => <StoryItemChiTiet1 name={item.name_story} story={item} keyExtractor={item => `${item.id}`}
                            onPressXayDung={() => navigation.navigate('Thông Tin Truyện 1', { story: item })} />}
                    />
                ) : (
                        <ActivityIndicator />
                    )}
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        storiesRankMonth: state.rankMonth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getStoriesRankMonth: (year, month, number) => {
            dispatch(getListStoriesRankMonth(year, month, number))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Month);