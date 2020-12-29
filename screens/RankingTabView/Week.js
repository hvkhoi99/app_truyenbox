import React, { Component } from 'react';
import { FlatList, View } from 'react-native';
import { connect } from 'react-redux';
import { getListStoriesRankWeek } from '../../actions/rankStories';
import StoryItemChiTiet1 from '../../components/StoryItemChiTiet1';

class Week extends Component {

    componentDidMount() {
        this.props.getStoriesRankWeek(5)
    }

    render() {
        const { navigation } = this.props;
        // const { StoryArray } = this.state;
        return (
            <View >
                <FlatList
                    numColumns={1}
                    data={this.props.storiesRankWeek}
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
        storiesRankWeek: state.rankWeek
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getStoriesRankWeek: (number) => {
            dispatch(getListStoriesRankWeek(number))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Week);