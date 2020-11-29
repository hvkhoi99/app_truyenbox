import React, { Component } from 'react';
import { FlatList, View } from 'react-native';
import { connect } from 'react-redux';
import { getStoriesDailyWed } from '../../actions/story';
import StoryItemChiTiet1 from '../../components/StoryItemChiTiet1';
class Wednesday extends Component {

    componentDidMount() {
        this.props.getStoriesDaily(3);
    }

    render() {
        const { navigation } = this.props;
        console.log(this.props.storiesDaily)
        return (
            <View >
                {/* {this.props.storiesDaily.length !== 0 ? ( */}
                <FlatList
                    numColumns={1}
                    data={this.props.storiesDaily}
                    renderItem={({ item }) => <StoryItemChiTiet1 name={item.name_story} story={item} keyExtractor={item => `${item.id}`}
                        onPressXayDung={() => navigation.navigate('Thông Tin Truyện 1', { story: item })} />}
                />
                {/* ) : (
                        <ActivityIndicator />
                    )} */}
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        storiesDaily: state.dailyWed
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getStoriesDaily: (day) => {
            dispatch(getStoriesDailyWed(day))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Wednesday)
