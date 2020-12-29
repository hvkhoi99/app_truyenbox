import React, { Component } from 'react';
import { FlatList, View } from 'react-native';
import { connect } from 'react-redux';
import { getListStoriesRankDay } from '../../actions/rankStories';
import StoryItemChiTiet1 from '../../components/StoryItemChiTiet1';

class Day extends Component {

    componentDidMount() {
        this.props.getStoriesRankDay(5)
    }

    render() {
        const { navigation } = this.props;
        // const { StoryArray } = this.state;
        return (
            <View >
                <FlatList
                    numColumns={1}
                    data={this.props.storiesRankDay}
                    renderItem={({ item }) => <StoryItemChiTiet1 name={item.name_story} story={item} 
                        onPressXayDung={() => navigation.navigate('.Thông Tin Truyện', { story: item })} />}
                        keyExtractor={item => `${item.id}`}
                />
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        storiesRankDay: state.rankDay
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getStoriesRankDay: (number) => {
            dispatch(getListStoriesRankDay(number))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Day);